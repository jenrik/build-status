var merge = require("merge");
var winston = require("winston");

var config = {
	"database": {
        "uri": "",
        "options": {
            "dialect": "sqlite",
            "storage": "database.db"
        }
    }
}

module.exports = function(userconfig) {
	this.config = merge(
		require(__dirname + "/config.js"), 
		userconfig);
	
	this.logger = new winston.Logger({
		transports: this.config.transports || []
	});

	this.database = require(__dirname + "/libs/database.js")(this);
	this.router = require(__dirname + "/libs/router.js")(this);
};