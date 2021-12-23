// IMPORT EXPRESS
const express = require('express');
// INSTANTIATE A NEW INSTANCE OF express.Router
const router = express.Router();
// IMPORT THE 'SCHOOL' MODEL
const School = require('../models/school');

// READ - RETURNS ALL SCHOOLS
router.get('/', (req, res) => {
	School.find({})
		.then((allSchools) => {
			res.json({
				status: 200,
				schools: allSchools,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

// READ - RETURNS A SINGLE SCHOOL
router.get('/:id', (req, res) => {
	School.findById(req.params.id).then((school) => {
		res.json({
			status: 200,
			school: school,
		});
	});
});

// CREATE - CREATES A NEW SCHOOL
router.post('/', (req, res) => {
	School.create(req.body).then((school) => {
		res.json({
			status: 200,
			data: school,
		});
	});
});

// DELETE - REMOVES A SINGLE SCHOOL
router.delete('/:id', (req, res) => {
	School.findByIdAndDelete(req.params.id).then((school) => {
		res.json({
			status: 200,
			school: school,
		});
	});
});

// UPDATE - UPDATES A SINGLE SCHOOL
router.put('/:id', (req, res) => {
	console.log(req.params.id);
	School.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(school) => {
			res.json({
				status: 200,
				msg: 'Wizarding School Updated',
				school: school,
			});
		}
	);
});

// EXPORT ROUTER
module.exports = router;
