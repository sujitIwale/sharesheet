const express = require('express');
const { getSheet } = require('../../controllers/sheet');
const auth = require('../../middleware/auth');
const router = express.Router();

router.get('/getSheet/:sheetId', auth, getSheet);

module.exports = router;
