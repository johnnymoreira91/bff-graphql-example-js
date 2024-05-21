const { Sequelize, DataTypes, Model } = require('sequelize');

class Robot extends Model {
  init(sequelize) {
    Robot.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        uuid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null
        }
      },
      {
        sequelize, 
        modelName: 'Robot',
        underscored: true,
        timestamps: true
      },
    );
  }
}



module.exports = {
  Robot
}