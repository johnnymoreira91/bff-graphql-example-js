const { gql } = require("apollo-server");

const typeDefs = gql`

  type Robot {
    id: Int
    name: String
    type: String
  }

  type Query {
    listRobots: [Robot]
  }
`;

module.exports = typeDefs;