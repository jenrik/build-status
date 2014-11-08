var config = require(__dirname + "/../config.json");
var Sequelize = require("sequelize");

module.exports = function(bs) {
	var sequelize = new Sequelize(
		bs.config.database.uri,
		bs.config.database.options);

	var Server = sequelize.import(__dirname + "/models/server");
	var Build = sequelize.import(__dirname + "/models/build");
	var Config = sequelize.import(__dirname + "/models/config");

	Server.hasMany(Build, { as: "builds" });
	Server.sync()
		.succes(function() {
			bs.logger.info("Succes fully synced the Server table");
		})
		.error(function(error) {
			bs.logger.error("Failed to sync the Server table", error);
		});
	Build.sync()
		.succes(function() {
			bs.logger.info("Succes fully synced the Build table");
		})
		.error(function(error) {
			bs.logger.error("Failed to sync the Build table", error);
		});
	Config.sync()
		.succes(function() {
			bs.logger.info("Succes fully synced the Config table");
		})
		.error(function(error) {
			bs.logger.error("Failed to sync the Config table", error);
		});
};