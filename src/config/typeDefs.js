import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    note: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    allBooks: [Book]
    allAuthors: [Author]
  }

  type Subscription {
    bookMutated: BookMutatedPayload!
  }

  type BookMutatedPayload {
    mutation: MutationType!
    node: Book!
  }

  type Mutation {
    updateBook(title: String!, note: String!): Book
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }
`;

export default typeDefs;
