const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:', { filename: 'devDb.db' })
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "data/database.sqlite",
  // sync: {force: true}
});

module.exports = {
  sequelize
}
