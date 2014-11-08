module.exports = function(database) {
	return function(req, resp, next) {
		req.database = database;
		next();
	};
};