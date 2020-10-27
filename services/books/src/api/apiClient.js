/* eslint-disable camelcase */
/* eslint-disable require-await */
import { v4 as uuidv4 } from 'uuid';

let books = [
  {
    id: 1,
    title: 'First Book',
    genre: 'Mystery',
    author_id: 1,
  },
  {
    id: 2,
    title: 'Second Book',
    genre: 'Drama',
    author_id: 1,
  },
  {
    id: 3,
    title: 'Third Book',
    genre: 'Science Fiction',
    author_id: 2,
  },
];

export const getAllBooks = async () => {
  return books;
};

export const createBook = async (data) => {
  const newBook = { id: uuidv4(), ...data };
  books.push(newBook);
  return newBook;
};

export const findBookById = async (id) => {
  return books.filter((book) => book.id === id)[0];
};

export const findBooksByAuthorId = async (id) => {
  return books.filter((book) => book.author_id === id);
};
