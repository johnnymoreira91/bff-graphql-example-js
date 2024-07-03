const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers');
const { Logger } = require('./infra/services/logger');
const { initModels } = require('./infra/database');
const express = require('express');
const { sequelize } = require('./infra/database/db')

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/healthcheck', async (req, res) => {
  try {
    await sequelize.authenticate();
    return res.status(200).send('Database connection is healthy');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.status(500).send('Database connection failed');
    process.exit(1);
  }
});

app.listen(PORT, () => {
  console.log(`Healthcheck server is running on port ${PORT}`);
});

server.listen().then(async ({ url }) => {
  await initModels()
  Logger.info(`
    🚀  Server is running!
    📭  Query at ${url}
`)
});
