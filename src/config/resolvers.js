const books = [
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
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

const resolvers = {
  Query: {
    allBooks: () => books,
    allAuthors: () => authors,
  },
  Author: {
    books: (root) => books.filter((book) => book.author === root.name),
  },
  Book: {
    author: (root) => authors.find((auth) => auth.name === root.author),
  },
};

export default resolvers;
