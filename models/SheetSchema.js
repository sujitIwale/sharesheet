const mongoose = require('mongoose');

const Sheet = mongoose.Schema(
	{
		name: {
			type: String,
			default: 'Untitled',
		},
		ownerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		ownerName: {
			type: String,
			required: true,
		},
		data: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Sheet', Sheet);
