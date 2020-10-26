import pubsub from '../pubsub/pubsub';

const books = [
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    note: 'This is a book',
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    note: 'This is also a book',
  },
];

const authors = [
  {
    name: 'Leo Tolstoy',
  },
  {
    name: 'Charles Dickens',
  },
];

const BOOK_MUTATED = 'bookMutated';

const resolvers = {
  Query: {
    allBooks: () => books,
    allAuthors: () => authors,
  },
  Mutation: {
    updateBook: (_, args) => {
      const thisBook = books.find((book) => book.title === args.title);
      thisBook.note = args.note;
      pubsub.publish(BOOK_MUTATED, {
        bookMutated: {
          mutation: 'UPDATED',
          node: thisBook,
        },
      });

      return thisBook;
    },
  },
  Subscription: {
    bookMutated: {
      subscribe: () => pubsub.asyncIterator(BOOK_MUTATED),
    },
  },
  Author: {
    books: (root) => books.filter((book) => book.author === root.name),
  },
  Book: {
    author: (root) => authors.find((auth) => auth.name === root.author),
  },
};

export default resolvers;
