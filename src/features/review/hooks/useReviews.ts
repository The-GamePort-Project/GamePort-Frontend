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
