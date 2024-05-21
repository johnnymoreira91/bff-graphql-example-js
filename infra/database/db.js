const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:', { filename: 'devDb.db' })

module.exports = {
  sequelize
}
