// THIS REQUIREMENT ALLOWS mongoose.connect TO USE mongoURI AS AN ARGUMENT WITHOUT ITS TYPE BEING A STRING
require('dotenv').config();

// CONNECT TO MONGO DB IN YOUR LOCAL DATABASE
const mongoose = require('mongoose');

let mongoURI = process.env.DB_URL;
// 'mongodb+srv://admin:admin@wizardschoolscluster.jvwqc.mongodb.net/WizardingSchoolsDatabase?retryWrites=true&w=majority';

// if (process.env.NODE_ENV === 'production') {
// 	mongoURI = process.env.DB_URL;
// } else {
// 	// THIS CODE REFERENCES A LOCAL DATABASE AND CREATES IT IF IT DOESN'T EXIST
// 	mongoURI = 'mongodb://127.0.0.1:27017/schools';
// 	// mongoURI = 'mongodb://localhost/schools';
// }

mongoose.connect(
	mongoURI,
	{ useNewUrlParser: true },
	{ useUnifiedTopology: true }
	// () => {
	// 	console.log('MongoDB Connected as Local Database');
	// }
);

mongoose.connection.on('connected', () => {
	console.log('✅ connection.js is connected to Mongoose Database!');
});

module.exports = mongoose;
