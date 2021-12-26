import { gql } from 'apollo-server';

export default gql`
  type Movie {
    name: String
    year: Int
    rating: Float
    gif: String!
  }

  type Query {
    random: Movie
  }
`;
