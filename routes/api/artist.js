const express = require("express");
const router = express.Router();

// @route   GET api/artist/api
// @desc    Testing artists route
// @access  Public
router.get("/api", (req, res) => res.json({ msg: "artist router working" }));

module.exports = router;
