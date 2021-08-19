const express = require('express');

const app = express();

// Routes
app.use('/upload/img', require('./routes/imageUpload'));

app.listen(3003, () => {
	console.log('server is runnig on port 3003');
});
