import server from './config/apollo';

(async () => {
  const port = 4002;
  const { url } = await server.listen({ port });
  console.log(`Books service ready at ${url}`);
})();
