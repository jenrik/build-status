module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Server", {
		"title":	{ 
			"type": DataTypes.STRING,
			"allowNull": false
		},
		"url":		{ 
			"type": DataTypes.STRING,
			"allowNull": false
		},
		"serverId": {
			"type": DataTypes.INTEGER, 
			"allowNull": false,
			"unique": true,
			"autoIncrement": true,
			"primaryKey": true
		}
	});
};