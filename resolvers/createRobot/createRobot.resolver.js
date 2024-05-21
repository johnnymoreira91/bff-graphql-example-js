const { Robot } = require('../../infra/database')
const { createRobotUseCase } = require('../../useCase/createRobot/createRobotUseCase')

async function createRobotResolver(_, data) {
  const transaction = await Robot.sequelize.transaction()
  try {
    const newRobot = await createRobotUseCase(data, transaction)
    await transaction.commit()

    return {
      status: 201,
      message: 'Sucess to create robot',
      robot: newRobot
    }
  } catch (error) {
    await transaction.rollback()
    // throw new Error(error.message || 'Error to create a new Robot')
    return {
      status: error.status || 500,
      message: error.message
    };
  }
}

module.exports = {
  createRobotResolver
}