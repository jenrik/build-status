module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Build", {
		"key":		{ 
			"type": DataTypes.STRING(100)
		},
		"value":		{ 
			"type": DataTypes.TEXT 
		}
	});
};