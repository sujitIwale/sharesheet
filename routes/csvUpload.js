const express = require('express');
const fs = require('fs');
const csv = require('fast-csv');
const { csvUpload } = require('../middleware/upload');
const router = express.Router();

router.post('/', csvUpload, (req, res) => {
	const data = [];
	// fs.createReadStream(path.resolve('uploads/csv', req.file.filename))
	// 	.pipe(csv.parse({ headers: true }))
	// 	.on('error', (error) => console.error(error))
	// 	.on('data', (row) => data.push(row))
	// 	.on('end', (rowCount) => {
	// 		console.log(`Parsed ${rowCount} rows`);
	// 		res.send(data);
	// 	});

	try {
		csv.parseFile(
			`${process.env.CSV_FILE_STORE_PATH}/` + req.file.filename,
			{ headers: true }
		)
			.on('error', (error) => console.log(error))
			.on('data', (row) => data.push(row))
			.on('end', (rowCount) => {
				const results = {
					status: 'success',
					rowCount,
					data,
				};
				res.send(results);
				fs.unlinkSync(
					`${process.env.CSV_FILE_STORE_PATH}/` + req.file.filename
				);
			});
	} catch (error) {
		console.log(error);
		res.send({ error: 'server error' });
	}
});

module.exports = router;
