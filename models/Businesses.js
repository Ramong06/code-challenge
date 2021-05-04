const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BusinessesSchema = new Schema({
	name: { type: String },
	address: { type: String },
	phoneNumber: { type: String },
	website: { type: String },
    image: { type: String },
    likeCount: {
		type: Number,
		default: 0
	}
});

const Businesses = mongoose.model('Businesses', BusinessesSchema);

module.exports = Businesses;