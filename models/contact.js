module.exports = function (sequelize, DataTypes) {
    var ClientDirectory = sequelize.define("ClientDirectory", {
        // Giving the Author model a name of type STRING
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        message: DataTypes.STRING,
        date_entered: DataTypes.DATE
    });
    return ClientDirectory;
};