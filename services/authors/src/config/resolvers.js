import * as apiClient from '../api/apiClient';

const resolvers = {
  Query: {
    allAuthors: () => {
      return apiClient.getAllAuthors();
    },
    findAuthor: (root, args) => {
      return apiClient.findAuthorById(args.id);
    },
  },
  Mutation: {
    createAuthor: (root, args) => apiClient.createAuthor(args),
  },
  Author: {
    __resolveReference: (ref) => apiClient.findAuthorById(+ref.id),
    books: (author) => {
      const mapped = author.books.map((id) => {
        return { __typename: 'Book', id };
      });

      return mapped;
    },
  },
};

export default resolvers;
