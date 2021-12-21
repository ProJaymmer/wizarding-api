const School = require('../models/school');
const seedData = require('./seedData.json');

School.deleteMany({}).then(() => {
	School.insertMany(seedData, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Wizarding Schools Seeded');
		}
		process.exit();
	});
});
