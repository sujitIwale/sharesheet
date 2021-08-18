const express = require('express');

const app = express();

// Routes
const imgUpload = require('./routes/imageUpload')

app.use('/upload/img',imgUpload)

app.listen(3003, () => {
	console.log('server is runnig on port 3003');
});
