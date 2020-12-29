'use strict';

var mysql = require('mysql');

var database = mysql.createConnection({
	host: 'localhost',
	port: 8889,
	user: 'root',
	password: 'root',
	database: 'my_database'
});

module.exports = database;
