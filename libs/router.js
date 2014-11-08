function loadRoute(name) {
	return require(__dirname + "/routes/" + name + ".js");
}


module.exports = function(bs) {
	var router = require("express").Router();

	router.all("/", loadRoute("dbInserter")(bs.database));
	router.get("/", loadRoute("frontpage"));

	return router;
};