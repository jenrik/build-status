module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Build", {
		"time":		{ 
			"type": DataTypes.DATE
		},
		"url":		{ 
			"type": DataTypes.STRING(100) 
		},
		"status":	{ 
			"type": DataTypes.ENUM,
			"values": ["success", "failed", "aborted", "warning"]
		}
	});
};