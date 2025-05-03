import { gql } from "@apollo/client";

export const gqlService = {
  query: {
    SAY_HELLO: gql`
      query SayHello {
        sayHello
      }
    `,
    GET_USERS: gql`
      query GetUsers {
        getUsers {
          id
          email
          username
          firstname
          lastname
          createdAt
          updatedAt
        }
      }
    `,
    GET_USERS_PAGINATED: gql`
      query GetUsersPaginated($data: GetAllUsersInput!) {
        getUsersPaginated(data: $data) {
          id
          email
          username
          firstname
          lastname
          createdAt
          updatedAt
        }
      }
    `,
    GET_ALL_GAMES: gql`
      query games($data: GetGamesPaginatedInput!) {
        games(data: $data) {
          id
          title
          genres
          releaseDate
          developer
          slug
          rating
        }
      }
    `,
    GET_GAME_BY_SLUG: gql`
      query GetGameBySlug($slug: String!) {
        game(slug: $slug) {
          id
          title
          slug
          description
          developer
          publisher
          releaseDate
          coverImageUrl
          trailerUrl
          genres {
            id
            name
          }
          platforms {
            id
            name
          }
          rating
          createdAt
          updatedAt
        }
      }
    `,
  },

  mutation: {
    CREATE_USER: gql`
      mutation CreateUser($data: CreateUserInput!) {
        createUser(data: $data) {
          email
          username
          firstname
          lastname
        }
      }
    `,
  },
};
