const mongoose = require('../database/connection');
const Schema = mongoose.Schema;
// const studentSchema = require('./StudentSchema');

// SCHEMATICS FOR THE MODEL
const SchoolSchema = new Schema({
	headmaster: { type: String, required: true },
	name: { type: String, required: true },
	location: { type: String, required: true },
});

// DEFINE SCHOOL MODEL USING SCHEMA
const School = mongoose.model('School', SchoolSchema);

// EXPORT SCHOOL MODEL
module.exports = School;
