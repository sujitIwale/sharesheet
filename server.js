const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// fs.rmdirSync('./uploads/img', { recursive: true });

app.use(cors());

app.get('/', (req, res) => {
	// const data = fs.readFileSync('rawdata/data.json', 'utf-8');
	console.log('req');
	res.sendFile(__dirname + '/rawdata/data.json');
});

// Routes
app.use('/upload/img', require('./routes/imageUpload'));
app.use('/upload/csv', require('./routes/csvUpload'));

app.listen(3001, () => {
	console.log('server is runnig on port 3001');
});
