import gql from "graphql-tag"; // 프론트엔드에 graphql을 작성하는법

export const HOME_PAGE = gql`
  query {
    movies(limit: 50, rating: 8.5) {
      id
      title
      genres
      rating
    }
  }
`;
