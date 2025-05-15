import { useQuery } from "@apollo/client";
import { gqlService } from "../../../Services";
export const useGetAllReviews = () => {
  const { loading, error, data } = useQuery(gqlService.query.GET_ALL_REVIEWS);
  return {
    loading,
    error,
    data,
  };
};
export const useGetGameForReview = (slug: string) => {
  const { loading, error, data } = useQuery(
    gqlService.query.GET_GAME_BY_SLUG_FOR_REVIEW,
    {
      variables: {
        data: {
          slug,
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
