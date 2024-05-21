const { listRobotsUseCase } = require("../../useCase/listRobots/listRobotsUseCase");

async function listRobotsResolver() {
  try {
    return listRobotsUseCase()
  } catch (error) {
    throw new Error(error.message || 'Error to list all Robots')
  }
}

module.exports = {
  listRobotsResolver
}