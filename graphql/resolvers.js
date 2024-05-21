const { CreateRobotResponseStatus } = require('./resolveType')
const { listRobotsResolver } = require("../resolvers/listRobots/listRobots.resolver");
const { createRobotResolver } = require('../resolvers/createRobot/createRobot.resolver')

const resolvers = {
  Query: {
    listRobots: listRobotsResolver,
  },
  Mutation: {
    createRobot: createRobotResolver
  },
  CreateRobotResponseStatus: CreateRobotResponseStatus
};

module.exports = resolvers;