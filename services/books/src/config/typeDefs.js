import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book @key(fields: "id") {
    id: ID!
    title: String!
    genre: String!
    author: Author
  }

  extend type Author @key(fields: "id") {
    id: ID! @external
  }

  extend type Query {
    allBooks: [Book]
    findBook(id: Int!): Book
  }

  extend type Mutation {
    createBook(title: String!, genre: String!, author_id: Int!): Book
  }
`;

export default typeDefs;
