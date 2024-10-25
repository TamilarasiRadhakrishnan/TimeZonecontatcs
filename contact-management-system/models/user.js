
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
    return User;
  };
  
  