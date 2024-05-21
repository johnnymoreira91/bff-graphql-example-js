const { gql } = require("apollo-server");

const typeDefs = gql`

  type Robot {
    id: Int
    uuid: String
    name: String
    type: String
  }

  type CreateRobotResponse {
    status: Int
    message: String
    robot: Robot
  }

  type GraphqlError {
    status: Int
    message: String
  }

  union CreateRobotResponseStatus = CreateRobotResponse | GraphqlError

  input CreateRobot {
    name: String
    type: String
  }

  type Query {
    listRobots: [Robot]
  }

  type Mutation {
    createRobot(data: CreateRobot): CreateRobotResponseStatus
  }
`;

module.exports = typeDefs;