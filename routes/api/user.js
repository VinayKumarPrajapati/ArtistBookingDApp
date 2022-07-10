const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");
const passport = require("passport");

//Basic Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//model Imports
const User = require("../../models/User");

// @route   GET api/user/test
// @desc    Testing user route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "User router working" }));

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

			bcrypt.genSalt(10, (err, salt) => {
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

// @route   GET api/user/login
// @desc    Login User Returning JWT_token
// @access  Public
router.post("/login", (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	// Check Validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	// Find email from mongoDB
	User.findOne({ email }).then((user) => {
		// Check for user
		if (!user) {
			errors.email = "User not registered Please Register";
			return res.status(404).json(errors);
		}

		// Check Password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				// Matched
				const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload

				// Sign Token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{ expiresIn: 600 },
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token,
						});
					}
				);
			} else {
				errors.password = "Password incorrect";
				return res.status(400).json(errors);
			}
		});
	});
});

// @route   GET api/users/current
// @desc    Returning current user
// @access  Private
router.get(
	"/current",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		res.json({
			id: req.user.id,
			name: req.user.name,
			email: req.user.email,
		});
	}
);

module.exports = router;