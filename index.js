'use strict';

require('dotenv').config();

var express = require('express');
var app = express();
var myRouter = require('./routers/myRouter.js');

/* Uncomment to connect the database

var db = require('./database.js');
db.connect(error => {
	if(error) throw error;
	console.log('Database connected successfully!');
});

*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use('/my-route', myRouter);

app.use((req, res) => {
	res.status(500).send({
		status: 500,
		msg: 'Yes, you can even customize how to fail. Great, huh?'
	});
});

app.listen(process.env.PORT, process.env.HOST, () => {
	console.log(`App running on http://${process.env.HOST}:${process.env.PORT}`);
});
