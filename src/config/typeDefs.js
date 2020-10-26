import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
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
`;

export default typeDefs;
