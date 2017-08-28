//******************************************************************
//CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
//******************************************************************

//Dependencies
var Sequelize = require("sequelize");

//Created mySQL connection using Sequelize
//Edit this object to use your mySQL user/database information
var sequelize = new Sequelize("ClientDirectory", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
});

module.exports = sequelize;