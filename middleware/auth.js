const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	// get token from header
	const token = req.header('x-auth-token');

	if (!token) {
		return res.status(401).json({ error: { message: 'no token found' } });
	}
	try {
		const decoded = jwt.verify(token, process.env.JWTSECRET);
		console.log(token);
		if (!decoded)
			return res
				.status(401)
				.json({ error: { message: 'Invalid token' } });
		req.user = decoded.user;
		next();
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ error: 'Invalid Token' });
	}
};
