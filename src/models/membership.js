module.exports = (sequelize, DataTypes) => {
  const Membership = sequelize.define('Membership', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'member'
    },
    teamId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Teams',
        key: 'id',
        as: 'teamId',
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
    }
  });

  Membership.associate = (models) => {
    Membership.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Membership.belongsTo(models.Team, {
      as: 'team',
      foreignKey: 'teamId',
      onDelete: 'CASCADE'
    });
  };

  return Membership;
};
