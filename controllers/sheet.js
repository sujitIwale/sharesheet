const { json } = require('express');
const UserSchema = require('../models/UserSchema');
const Sheet = require('../models/SheetSchema');

module.exports.addSheet = async (userId, data) => {
	if (!userId || !results) return;
	try {
		const user = await UserSchema.findById(userId);
		if (!user) return;
		data = JSON.stringify(data);
		const sheet = new Sheet({
			ownerId: userId,
			ownerName: user.name,
			data,
		});
		await sheet.save();
	} catch (error) {
		console.log('error');
	}
};
