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
          trailerUrl
          coverImageUrl
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
    GET_GAMES_PAGINATED_BY_GENRE: gql`
      query games($data: GetGamesPaginatedInput!) {
        games(data: $data) {
          id
          title
          trailerUrl
          coverImageUrl
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
          rating
          slug
          genres {
            name
          }
          releaseDate
          developer
          publisher
          description
          coverImageUrl
          trailerUrl
          platforms {
            name
          }
        }
      }
    `,
    GET_ALL_REVIEWS: gql`
      query getAllReviews {
        getAllReviews {
          id
          rating
          game {
            slug
          }
          user {
            username
          }
        }
      }
    `,
    GET_GAME_BY_SLUG_FOR_REVIEW: gql`
      query getGameForReview($data: GetGameInput!) {
        getGameForReview(data: $data) {
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
    GET_HIGHEST_RATED_GAME: gql`
      query GetHighestRatedGame {
        getHighestRatedGame {
          id
          title
          genres {
            name
          }
          rating
          coverImageUrl
          trailerUrl
          description
        }
      }
    `,
    SEARCH_GAMES: gql`
      query searchGames($data: SearchGamesInput!) {
        searchGames(data: $data) {
          id
          title
          genres {
            name
          }
          releaseDate
          developer
          slug
          rating
          coverImageUrl
        }
      }
    `,
    GET_ALL_GENRES: gql`
      query genres {
        genres {
          id
          name
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
