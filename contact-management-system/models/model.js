
module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      timezone: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
    return Contact;
  };
  