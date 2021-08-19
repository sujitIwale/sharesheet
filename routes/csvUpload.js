const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { csvUpload } = require('../middleware/upload');
const router = express.Router();

router.get('/', csvUpload, (req, res) => {
	const data = [];
	fs.createReadStream(path.resolve('rawdata', 'Holdings.csv'))
		.pipe(csv.parse({ headers: true }))
		.on('error', (error) => console.error(error))
		.on('data', (row) => data.push(row))
		.on('end', (rowCount) => {
			console.log(`Parsed ${rowCount} rows`);
			res.send(data);
		});
});

module.exports = router;
