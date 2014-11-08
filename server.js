var express = require("express");
var app = express();
var winston = require("winston");
var buildStatus = require(__dirname + "/buildStatus.js")({
	transports: [
		new (winston.transports.Console)()
	]
});
app.use("/", buildStatus.router);
app.listen(8080);
