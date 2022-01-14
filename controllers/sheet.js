const UserSchema = require('../models/UserSchema');
const Sheet = require('../models/SheetSchema');
const SheetSchema = require('../models/SheetSchema');

module.exports.addSheet = async (userId, data) => {
	if (!userId || !data) return { error: 'User Id or data not found' };
	try {
		const user = await UserSchema.findById(userId);
		if (!user) return { error: `No User Found` };
		data = JSON.stringify(data);
		const sheet = new Sheet({
			ownerId: userId,
			ownerName: user.name,
			data,
		});
		await sheet.save();
		return sheet;
	} catch (error) {
		console.log(error);
		return { error: 'Server Error' };
	}
};

module.exports.getSheet = async (req, res) => {
	try {
		const sheetId = req.params.sheetId;
		console.log(sheetId);
		const sheet = await SheetSchema.findById(sheetId);

		if (!sheet) {
			res.status(400).send({ error: 'Sheet Not Found' });
			return;
		}
		res.status(200).send(sheet);
	} catch (error) {
		console.log(error);
		res.status(400).send({ error: error });
	}
};