var router = require("express").Router();

function loadRoute(name) {
	return require(__dirname + "/routes/" + name + ".js");
}

router.all("/", loadRoute("dbInserter"));
router.get("/", loadRoute("frontpage"));

module.exports = router;