import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { RedisCache } from 'apollo-server-cache-redis';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

const OpentracingPlugin = require('apollo-opentracing').default;
import tracer from './tracer';

import myPlugin from '../tracing_plugin/index';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'Authors', url: 'http://localhost:4001' },
    { name: 'Books', url: 'http://localhost:4002' },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  plugins: [
    myPlugin,
    responseCachePlugin(),
    // OpentracingPlugin({
    //   server: tracer,
    //   local: tracer,
    // }),
  ],
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
