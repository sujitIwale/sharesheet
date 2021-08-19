const express = require('express');
const { imgUpload } = require('../middleware/upload');
const router = express.Router();

router.get('/', imgUpload, (req, res) => {
	res.send('file upoaded successfully' + req.file.filename);
});

module.exports = router;
