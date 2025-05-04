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
          genres {
            name
          }
          releaseDate
          developer
          slug
          rating
        }
      }
    `,
    GET_GAME_BY_SLUG: gql`
      query game($data: GetGameInput!) {
        game(data: $data) {
          id
          title
          genres {
            name
          }
          releaseDate
          developer
          publisher
          slug
          rating
          description
          coverImageUrl
        }
      }
    `,
    GET_GAME_BY_SLUG_FOR_REVIEW: gql`
      query game($data: GetGameInput!) {
        game(data: $data) {
          id
          title
          genres {
            name
          }
          rating
          coverImageUrl
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
    CREATE_REVIEW: gql`
      mutation CreateReview($data: CreateReviewInput!) {
        createReview(data: $data) {
          id
        }
      }
    `,
  },
};
