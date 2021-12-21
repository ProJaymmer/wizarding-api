// CONNECT TO MONGO DB IN YOUR LOCAL DATABASE
const mongoose = require('mongoose');

let mongoURI = '';

if (process.env.NODE_ENV === 'production') {
	mongoURI = process.env.DB_URL;
} else {
	// mongoURI = 'mongodb://localhost/dogApp';
	mongoURI = 'mongodb://127.0.0.1:27017';
}

mongoose.connect(
	mongoURI,
	{ useNewUrlParser: true },
	{ useUnifiedTopology: true },
	() => {
		console.log('MongoDB Connected as Local Database');
	}
);

module.exports = mongoose;
