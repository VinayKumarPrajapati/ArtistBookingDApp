const express = require("express");
const router = express.Router();

// @route   GET api/user/api
// @desc    Testing users route
// @access  Public
router.get("/api", (req, res) => res.json({ msg: "User router working" }));

module.exports = router;
