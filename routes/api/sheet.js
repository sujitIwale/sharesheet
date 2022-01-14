const express = require('express');
const { getSheet, getUserSheets } = require('../../controllers/sheet');
const auth = require('../../middleware/auth');
const router = express.Router();

router.get('/getSheet/:sheetId', auth, getSheet);
router.get('/userSheets', auth, getUserSheets);

module.exports = router;
