require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

PORT = process.env.PORT;

app.use(
	cors({
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('combined'));

app.get('/', (req, res) => {
	res.json({
		status: 200,
		msg: 'Express Server Connected!',
	});
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
