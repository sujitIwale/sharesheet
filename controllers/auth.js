const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// const { OAuth2Client } = require('google-auth-library');
const User = require('../models/UserSchema');
const { hashPassword, checkPassword } = require('../services/hash');

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

module.exports.verifyToken = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};

module.exports.signup = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		let user = await User.findOne({ email: email });

		if (user) {
			return res
				.status(404)
				.json({ error: `User with email: ${email} already exists` });
		}

		user = new User({ name, email, password });

		user.password = await hashPassword(password);

		await user.save();

		const payload = {
			user: {
				id: user.id,
			},
		};

		const token = jwt.sign(payload, process.env.JWTSECRET, {
			expiresIn: '7d',
		});

		return res.status(200).send({ token });
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ error: error.message });
	}
};

module.exports.signin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email: email });
		if (user === null) {
			return res
				.status(404)
				.json({ error: `User with email: ${email} does not exists` });
		}

		const isCorrect = await checkPassword(password, user.password);
		if (isCorrect === false) {
			return res
				.status(401)
				.json({ error: `Wrong Password for ${email}` });
		}
		const payload = {
			user: {
				id: user.id,
			},
		};

		const token = jwt.sign(payload, process.env.JWTSECRET, {
			expiresIn: '7d',
		});

		return res.status(200).send({ token });
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ error: error.message });
	}
};

// module.exports.googleAuth = async (req, res) => {
// 	const { tokenId } = req.body;

// 	const data = await client.verifyIdToken({
// 		idToken: tokenId,
// 		audience: process.env.GOOGLE_CLIENT_ID
// 	});

// 	// eslint-disable-next-line camelcase
// 	const {email_verified, email } = data.payload;

// 	try {
// 		// eslint-disable-next-line camelcase
// 		if(!email_verified) return res.status(404).json({ error: `User with email: ${email} does not exists` });

// 		const user = await User.findOne({ email });

// 		if (!user) {
// 			const newUser = new User({
// 				name: data.payload.name,
// 				email,
// 				username: data.payload.given_name,
// 				password: 'asdasd',
// 				image: data.payload.picture,
// 			});
// 			await newUser.save();
// 		}

// 		const payload = {
// 			user: {
// 				id: user._id,
// 			},
// 		};

// 		const token = jwt.sign(payload, process.env.JWTSECRET, {
// 			expiresIn: '7d',
// 		});

// 		return res.status(200).send({ token });
// 	} catch (error) {
// 		console.log(error.message);
// 		res.status(500).send({ error: error.message });
// 	}
// }
