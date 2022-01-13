const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	// get token from header
	const token = req.header('x-auth-token');

	if (!token) {
		return res.status(401).json({ error: { message: 'no token found' } });
	}
	try {
		const decoded = jwt.verify(token, process.env.JWTSECRET);
		if (!decoded)
			return res
				.status(401)
				.json({ error: { message: 'invalid token' } });
		req.user = decoded.user;
		next();
	} catch (error) {
		console.error(error.message);
		res.status(400).json('Server Error');
	}
};
