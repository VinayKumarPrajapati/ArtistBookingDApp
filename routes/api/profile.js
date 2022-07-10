const express = require("express");
const router = express.Router();

// @route   GET api/profile/api
// @desc    Testing profile route
// @access  Public
router.get("/api", (req, res) => res.json({ msg: "profile router working" }));

module.exports = router;
