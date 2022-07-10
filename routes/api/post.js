const express = require("express");
const router = express.Router();

// @route   GET api/post/api
// @desc    Testing post route
// @access  Public
router.get("/api", (req, res) => res.json({ msg: "post router working" }));

module.exports = router;
