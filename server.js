const express = require('express');
const fs = require('fs');
const app = express();

// fs.rmdirSync('./uploads/img', { recursive: true });

// Routes
app.use('/upload/img', require('./routes/imageUpload'));
app.use('/upload/csv', require('./routes/csvUpload'));

app.listen(3001, () => {
	console.log('server is runnig on port 3001');
});
