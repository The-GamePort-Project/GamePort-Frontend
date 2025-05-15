import { useLazyQuery, useQuery } from "@apollo/client";
import { gqlService } from "../../../Services";
export const useGetAllGames = (skip = 0, take = 10) => {
  const { loading, error, data, refetch } = useQuery(
    gqlService.query.GET_ALL_GAMES,
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
    refetch,
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

export const useGetHighestRatedGame = () => {
  const { loading, error, data, refetch } = useQuery(
    gqlService.query.GET_HIGHEST_RATED_GAME
  );
  return {
    loading,
    error,
    data,
    refetch,
  };
};

export const useGetGenres = () => {
  const { loading, error, data } = useQuery(gqlService.query.GET_ALL_GENRES, {
    fetchPolicy: "cache-first",
  });
  const genres = data?.genres || [];
  return {
    loading,
    error,
    genres,
  };
};
export const useSearchGames = () => {
  const [searchGames, { loading, error, data }] = useLazyQuery(
    gqlService.query.SEARCH_GAMES,
    { variables: { data: { searchTerm: "" } } }
  );
  const searchData = data?.searchGames || [];
  return { searchGames, loading, error, searchData };
};
export const useGetGamesByGenre = (genreName: string) => {
  const { loading, error, data } = useQuery(
    gqlService.query.GET_GAMES_PAGINATED_BY_GENRE,
    {
      variables: {
        data: {
          genreName,
        },
      },
    }
  );
  const games = data?.games || [];
  return {
    loading,
    error,
    games,
  };
};
