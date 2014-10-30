var request = require("request");
var lookup = {
	"red": "failed",
	"red_anime": "failed",
	"yellow": "warning",
	"yellow-anime": "warning",
	"blue": "sucess",
	"blue-anime": "success",
	"grey": "disabled",
	"grey-anime": "disabled",
	"disabled": "disabled",
	"disabled-anime": "disabled",
	"aborted": "disabled",
	"aborted-anime": "disabled",
	"nobuilt": "disabled",
	"nobuilt-anime": "disabled",
};

module.exports = function(url, callback) {
	request(url, function(err, resp, body) {
		if (err) callback(err);
		else if (resp.statusCode == 200) {
			var jenkins = JSON.parse(body).jobs;
			var status = [];

			for (var i = jenkins.length - 1; i >= 0; i--) {
				status.push({
					"name": jenkins[i].name,
					"url": jenkins[i].url,
					"status": lookup[jenkins[i].color]
				});
			};

			callback(undefined, status);
		};
	});
};