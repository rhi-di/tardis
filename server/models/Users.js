const { DatabaseError } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });

    return Users;
};
