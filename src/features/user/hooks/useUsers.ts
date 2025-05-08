import { gqlService } from "../../../Services";
import { useQuery } from "@apollo/client";

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
