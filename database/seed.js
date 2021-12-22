// IMPORT SEED DATA FROM .JSON FILE
const seedData = require('./seedData.json');
// IMPORT SCHOOL MODEL
const School = require('../models/school');

// THIS WILL DELETE EVERYTHING IN DATABASE, THEN REPOPULATE DATABASE WITH ORIGINAL SEED DATA.
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
