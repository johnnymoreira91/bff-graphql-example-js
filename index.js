const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers');
const { Logger } = require('./infra/services/logger');
const { initModels } = require('./infra/database');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(async ({ url }) => {
  await initModels()
  Logger.info(`
    🚀  Server is running!
    📭  Query at ${url}
`)
});
