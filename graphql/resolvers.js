const { listRobotsResolver } = require("../resolvers/listRobots/listRobots.resolver");

const resolvers = {
  Query: {
    listRobots: listRobotsResolver(),
  },
};

module.exports = resolvers;