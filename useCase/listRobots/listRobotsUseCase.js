const { listRobots } = require("../../repositories/robots")

async function listRobotsUseCase() {
  const list = await listRobots()
  return list
}

module.exports = {
  listRobotsUseCase
}