import server from './config/apollo';

(async () => {
  const port = 4000;
  const { url } = await server.listen({ port });
  console.log(`GraphQL service ready at ${url}`);
})();
