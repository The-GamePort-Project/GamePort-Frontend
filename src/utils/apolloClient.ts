import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  Observable,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  httpService,
  logout,
} from "../Services";
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URI,
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (
      graphQLErrors?.some(
        (err) => err.extensions?.code === "UNAUTHENTICATED"
      ) ||
      (networkError as { statusCode?: number })?.statusCode === 401
    ) {
      if (graphQLErrors)
        graphQLErrors.map(({ message }) => console.log(message));
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        logout();
        return;
      }
      return new Observable((observer) => {
        httpService
          .refreshTokenRequest()
          .then((res) => res.data)
          .then((data) => {
            if (data?.accessToken) {
              setAccessToken(data.accessToken);
              operation.setContext(({ headers = {} }) => ({
                headers: {
                  ...headers,
                  Authorization: `Bearer ${data.accessToken}`,
                },
              }));
              const subscriber = {
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
              };

              forward(operation).subscribe(subscriber);
            } else {
              console.error("No access token in refresh response");
              logout();

              observer.error(new Error("Refresh failed"));
            }
          })
          .catch((err) => {
            console.error("Refresh token error:", err);
            observer.error(err);
            logout();
          });
      });
    }
  }
);

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
