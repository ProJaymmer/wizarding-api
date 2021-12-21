// import express
const express = require('express');
// instantiate a new instance of express.Router
const router = express.Router();
// import the 'school' model
// const school = require('../db/seedData.json');
const School = require('../models/fruit');

// index - returns all things
router.get('/', (req, res) => {
	Fruit.find({})
		.then((allFruits) => {
			res.json({
				status: 200,
				fruits: allFruits,
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
