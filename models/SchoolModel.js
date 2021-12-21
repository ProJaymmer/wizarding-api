const mongoose = require('../database/connection');
const Schema = mongoose.Schema;
// const studentSchema = require('./StudentSchema');

const SchoolSchema = new Schema({
	headmaster: { type: String, required: true },
	name: { type: String, required: true },
	location: { type: String, required: true },
});

const School = mongoose.model('School', SchoolSchema);

module.exports = School;
