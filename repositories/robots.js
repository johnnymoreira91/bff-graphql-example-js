const { Robot } = require("../infra/database")

async function listRobots() {
  const robots = await Robot.findAll()
  return robots
}

module.exports = {
  listRobots
}