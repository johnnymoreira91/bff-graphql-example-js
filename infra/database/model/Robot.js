const { DataTypes, Model } = require('sequelize');

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
          unique: true
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        deleted_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null
        }
      },
      {
        sequelize, 
        modelName: 'Robot',
        paranoid: true,
        underscored: true,
        timestamps: true
      },
    );
  }
}



module.exports = {
  Robot
}