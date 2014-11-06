module.exports = function(req, resp) {
	resp.writeHead(200, {
		"Content-Type": "text/plain"
	});
	req.database.model("Server").findAll().success(function(servers) {
		var temp = 0;
		resp.write("[");
		for (var i = servers.length - 1; i >= 0; i--) {
			servers[i].getBuilds().success(function(builds) {
				resp.write(JSON.stringify(builds));
				temp++;
				if (temp == servers.length) {
					resp.write("]");
					resp.end();
				} else {
					resp.write(",");
				}
			});
		}
	});
};