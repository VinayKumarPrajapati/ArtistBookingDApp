const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");

//model Imports
const User = require("../../models/User");

// @route   GET api/user/api
// @desc    Testing user route
// @access  Public
// router.get("/api", (req, res) => res.json({ msg: "User router working" }));

// @route   GET api/user/api
// @desc    Testing user route
// @access  Public
router.post("/register", (req, res) => {
	//Will find email user trying to register
	User.findOne({ email: req.body.email }).then((user) => {
		if (user) {
			return res
				.status(400)
				.json({ email: "Email Already Register. Kindly Login" });
		} else {
			const avatar = gravatar.url(req.body.email, {
				s: "150", //Size 150
				r: "pg", // Reading PG
				d: "mm", //Default MM
			});

			const newUser = new User({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				professionalName: req.body.lastName,
				category: req.body.category,
				email: req.body.email,
				avatar,
				password: req.body.password,
			});

			bcrypt.gensalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) {
						throw err;
					}
					newUser.password = hash;
					newUser
						.save()
						.then((user) => res.json(user))
						.catch((err) => console.log(err));
				});
			});
		}
	});
});

module.exports = router;
