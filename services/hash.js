const bcrypt = require('bcryptjs');

module.exports.hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	const hashed = await bcrypt.hash(password, salt);
	return hashed;
};

module.exports.checkPassword = async (password, hashedpassword) => {
	const result = await bcrypt.compare(password, hashedpassword);
	return result;
};
