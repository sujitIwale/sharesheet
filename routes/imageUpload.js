const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/img');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

router.get('/', upload.single('profile'), (req, res) => {
	res.send('file upoaded successfully' + req.file);
});

module.exports = router;
