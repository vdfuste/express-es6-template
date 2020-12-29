import express from 'express';
import dotenv from 'dotenv';
import { __dirname } from 'typemodule';
import myRouter from './routers/myRouter.js';
// import db from './database.js';

dotenv.config();

const app = express();

/* Uncomment this and 'import myRouter' to connect the database

db.connect(error => {
	if (error) throw error;
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
