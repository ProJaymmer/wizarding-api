// IMPORT EXPRESS
const express = require('express');
// INSTANTIATE A NEW INSTANCE OF express.Router
const router = express.Router();
// IMPORT THE 'SCHOOL' MODEL
// const school = require('../db/seedData.json');
const School = require('../models/fruit');

// INDEX - RETURNS ALL SCHOOLS
router.get('/', (req, res) => {
	School.find({})
		.then((allSchools) => {
			res.json({
				status: 200,
				fruits: allSchools,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

// show - returns a single thing
router.get('/:id', (req, res) => {
	Fruit.findById(req.params.id).then((fruit) => {
		res.json({
			status: 200,
			fruit: fruit,
		});
	});
});

// create - create a single thing
router.post('/', (req, res) => {
	Fruit.create(req.body).then((fruit) => {
		res.json({
			status: 200,
			data: fruit,
		});
	});
});

// delete - remove a single thing
router.delete('/:id', (req, res) => {
	Fruit.findByIdAndDelete(req.params.id).then((fruit) => {
		res.json({
			status: 200,
			fruit: fruit,
		});
	});
});

// put - update a single thing
router.put('/:id', (req, res) => {
	console.log(req.params.id);
	Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(fruit) => {
			res.json({
				status: 200,
				msg: 'item update',
				fruit: fruit,
			});
		}
	);
});

// export router
module.exports = router;
