var emitter = require("events");
var database = require(__dirname + "/database.js");
var drivers = {};
module.exports = function(bs) {
	var drivers = {};
	var database = bs.database;

	this.timer = setInterval(60000, function() {
		var servers = database.models("servers").findAll().success();
	});

	this.addDriver = function(name, func) {
		drivers[name] = func;
	};
	this.removeDriver = function(name) {
		delete drivers[name];
		//ToDo: Check the database for servers that use the driver, and throw a error if any is found or remove them
	};
};