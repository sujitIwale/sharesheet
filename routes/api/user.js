const express = require("express");
const { searchUsers } = require("../../controllers/users");

const auth = require("../../middleware/auth");
const router = express.Router();

router.get("/searchUsers", auth, searchUsers);

module.exports = router;
