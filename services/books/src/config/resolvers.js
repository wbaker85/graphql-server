import { RenameRootFields } from 'apollo-server';
import * as apiClient from '../api/apiClient';

const resolvers = {
  Query: {
    allBooks: () => apiClient.getAllBooks(),
    findBook: (root, args) => apiClient.findBookById(args.id),
    findAuthor: (root, { id }) => {
      return { id };
    },
  },
  Mutation: {
    createBook: (root, args) => apiClient.createBook(args),
  },
  Book: {
    __resolveReference: (ref) => apiClient.findBookById(+ref.id),
    author: (book) => {
      return { __typename: 'Author', id: book.id };
    },
  },
};

export default resolvers;
