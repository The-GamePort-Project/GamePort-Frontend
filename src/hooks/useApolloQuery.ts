import { useQuery } from "@apollo/client";
import { gqlService } from "../Services";
export const useGetAllGames = (skip = 0, take = 10) => {
  const { loading, error, data } = useQuery(gqlService.query.GET_ALL_GAMES, {
    variables: {
      data: {
        skip,
        take,
      },
    },
  });
  return {
    loading,
    error,
    data,
  };
};

export const useGetGameBySlug = (slug: string) => {
  const { loading, error, data } = useQuery(gqlService.query.GET_GAME_BY_SLUG, {
    variables: {
      data: {
        slug,
      },
    },
  });
  return {
    loading,
    error,
    data,
  };
};

export const useGetUsersPaginated = (skip = 0, take = 10) => {
  const { loading, error, data } = useQuery(
    gqlService.query.GET_USERS_PAGINATED,
    {
      variables: {
        data: {
          skip,
          take,
        },
      },
    }
  );
  return {
    loading,
    error,
    data,
  };
};
export const useGetUsers = () => {
  const { loading, error, data } = useQuery(gqlService.query.GET_USERS);
  return {
    loading,
    error,
    data,
  };
};
export const useGetAllReviews = () => {
  const { loading, error, data } = useQuery(gqlService.query.GET_ALL_REVIEWS);
  return {
    loading,
    error,
    data,
  };
};
