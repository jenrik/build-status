var config = require(__dirname + "/../config.json");
var Sequelize = require("sequelize");
var sequelize = new Sequelize(
	config.database.url,
	config.database.username,
	config.database.password,
	config.database.options);

var Server = sequelize.import(__dirname + "/models/server");
var Build = sequelize.import(__dirname + "/models/build");

Server.hasMany(Build, { as: "builds" });
Server.sync();
Build.sync();

module.exports = sequelize;