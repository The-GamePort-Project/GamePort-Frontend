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
  },

  mutation: {
    CREATE_USER: gql`
      mutation CreateUser($data: CreateUserInput!) {
        createUser(data: $data) {
          id
          email
          username
        }
      }
    `,
  },
};
