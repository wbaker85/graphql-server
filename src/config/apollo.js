import { ApolloServer } from 'apollo-server';
import { RedisCache } from 'apollo-server-cache-redis';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [responseCachePlugin()],
  cache: new RedisCache({
    host: 'localhost',
  }),
  cacheControl: {
    defaultMaxAge: 20,
  },
  persistedQueries: {
    cache: new RedisCache({
      host: 'localhost',
    }),
  },
});

export default server;
