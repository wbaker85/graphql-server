import { ApolloServer } from 'apollo-server';
import { RedisCache } from 'apollo-server-cache-redis';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: new RedisCache({
    host: 'localhost',
  }),
});

export default server;
