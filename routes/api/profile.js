const express = require("express");
const router = express.Router();

// Importing Profile & User Model
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   GET api/profile/api
// @desc    Testing profile route
// @access  Public
router.get("/api", (req, res) => res.json({ msg: "profile router working" }));

// @route   GET api/profile
// @desc    Get Current Artist profile route
// @access  Private
router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const errors = {};
		Profile.findOne({ user: req.user.id })
			.then((profile) => {
				if (!profile) {
					error.noprofile = "No profile associated with this user id";
				}
				res.json(profile);
			})
			.catch((err) => res.status(404).json(err));
	}
);

module.exports = router;
