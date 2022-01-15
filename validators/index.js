const { validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(203).json({
			error: errors.array()[0].msg,
		});
	}
	next();
};
