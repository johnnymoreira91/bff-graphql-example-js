const { Robot } = require('../../infra/database')

async function createRobotUseCase(payload, transaction) {
  // await Robot.sync({force: true})
  const createRobot = await Robot.create(payload.data, { transaction })

  return createRobot
}

module.exports = {
  createRobotUseCase
}