var express = require("express");
var app = express();
var router = require(__dirname + "/libs/router.js");
app.use("/", router);
app.listen(8080);
