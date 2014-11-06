var database = require(__dirname + "/../database.js");

module.exports = function(req, resp, next) {
	req.database = database;
	next();
};