import { gql } from 'apollo-server';

const typeDefs = gql`
  type Author @key(fields: "id") {
    id: ID!
    full_name: String!
    dob: String!
    books: [Book]
  }

  extend type Book @key(fields: "id") {
    id: ID! @external
  }

  extend type Query {
    allAuthors: [Author]
    findAuthor(id: Int!): Author
  }

  extend type Mutation {
    createAuthor(full_name: String!, dob: String!): Author
  }
`;

export default typeDefs;
