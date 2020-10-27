import server from './config/apollo-not-federated';

(async () => {
  const port = 4000;
  const { url } = await server.listen({ port });
  console.log(`GraphQL service ready at ${url}`);
})();
