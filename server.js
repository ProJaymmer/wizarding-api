// EXPRESS SERVER SETUP
const express = require('express');
require('dotenv').config();
const app = express();

const morgan = require('morgan');
const cors = require('cors');

app.use(
	cors({
		credentials: true,
	})
);
app.use(morgan('combined'));

// POSTMAN SETUP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		status: 200,
		msg: 'Express Server Connected!',
	});
});

// IMPORT CONTROLLERS
const schoolController = require('./controllers/school.js');
app.use('/schools', schoolController);

// PORT STUFF
PORT = process.env.PORT;
app.set('port', PORT || 8080);
app.listen(app.get('port'), () => {
	console.log(`🌟 server.js is connected to PORT: ${app.get('port')}`);
});
