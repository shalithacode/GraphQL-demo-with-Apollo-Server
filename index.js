import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//server setup
const server = new ApolloServer({
  //typedef
  //resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});
