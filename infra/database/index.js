const { sequelize } = require('./db')
const { Robot } = require('./model/Robot')

async function initModels() {
  const models = [
    Robot
  ]

  models.forEach((model) => {
    model.prototype.init(sequelize);
  });
  models.forEach((model) => {
    if (model.prototype.associate) {
      model.prototype.associate();
    }
  });
}

module.exports = {
  initModels,
  Robot
}