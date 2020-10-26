import { AmqpPubSub } from 'graphql-rabbitmq-subscriptions';
import logger from './logger';

const pubsub = new AmqpPubSub({
  config: {
    host: 'localhost',
    port: 5672,
  },
  logger,
});

export default pubsub;
