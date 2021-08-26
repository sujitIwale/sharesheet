const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
// fs.rmdirSync('./uploads/img', { recursive: true });

app.use(cors());

app.get('/', (req, res) => {
	// const data = fs.readFileSync('rawdata/data.json', 'utf-8');
	console.log('req');
	res.send('Welcome to file-upload api');
});

// Routes
app.use('/upload/img', require('./routes/imageUpload'));
app.use('/upload/csv', require('./routes/csvUpload'));

app.listen(PORT, () => {
	console.log(`server is runnig on port ${PORT}`);
});
