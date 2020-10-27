/* eslint-disable camelcase */
/* eslint-disable require-await */
import { v4 as uuidv4 } from 'uuid';

let authors = [
  {
    id: 1,
    full_name: 'Jane Doe',
    dob: '1/1/1907',
    books: [1, 2],
  },
  {
    id: 2,
    full_name: 'John Smith',
    dob: '4/4/1980',
    books: [1],
  },
];

export const getAllAuthors = async () => {
  return authors;
};

export const createAuthor = async (data) => {
  const newAuthor = { id: uuidv4(), ...data };
  authors.push(newAuthor);
  return newAuthor;
};

export const findAuthorById = async (id) => {
  return authors.filter((author) => author.id === id)[0];
};
