const path = require('path');
const multer = require('multer');

const imgStorage = multer.diskStorage({
	destination: `${process.env.CSV_FILE_STORE_PATH}`,
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const csvStorage = multer.diskStorage({
	destination: 'uploads/csv',
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

module.exports.imgUpload = multer({ storage: imgStorage }).single('image');
module.exports.csvUpload = multer({ storage: csvStorage }).single('csvdata');
