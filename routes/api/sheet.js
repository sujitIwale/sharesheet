const express = require("express");
const {
  getSheet,
  getUserSheets,
  createSheet,
  updateSheet,
} = require("../../controllers/sheet");
const auth = require("../../middleware/auth");
const router = express.Router();

router.get("/getSheet/:sheetId", auth, getSheet);
router.get("/userSheets", auth, getUserSheets);
router.post("/createSheet", auth, createSheet);
router.put("/updateSheet", auth, updateSheet);

module.exports = router;
