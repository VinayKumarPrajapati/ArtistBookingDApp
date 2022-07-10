const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Validation
const validateProfileInput = require("../../validation/profile");

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
					errors.noprofile = "No profile associated with this user id";
					return res.status(404).json(errors);
				}
				res.json(profile);
			})
			.catch((err) => res.status(404).json(err));
	}
);

// @route   POST api/profile
// @desc    Create User Profile
// @access  Private
router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const { errors, isValid } = validateProfileInput(req.body);

		//Checking Validation
		if (!isValid) {
			return res.status(400).json(errors);
		}

		//Get Fields
		const profileFields = {};
		profileFields.user = req.user.id;
		if (req.body.gender) profileFields.gender = req.body.gender;
		if (req.body.uniqueId) profileFields.uniqueId = req.body.uniqueId;
		if (req.body.gender) profileFields.gender = req.body.gender;
		if (req.body.artistCompany)
			profileFields.artistCompany = req.body.artistCompany;
		if (req.body.website) profileFields.website = req.body.website;
		if (req.body.biography) profileFields.biography = req.body.biography;
		if (req.body.USP) profileFields.USP = req.body.USP;
		if (req.body.intrestingFact)
			profileFields.intrestingFact = req.body.intrestingFact;
		if (req.body.totalNumOfPerformance)
			profileFields.totalNumOfPerformance = req.body.totalNumOfPerformance;
		if (req.body.yearsOfExp) profileFields.yearsOfExp = req.body.yearsOfExp;
		if (req.body.priceRange) profileFields.priceRange = req.body.priceRange;

		//Splitting Array using CSV
		if (typeof req.body.category !== "undefined")
			profileFields.category = req.body.category.split(",");
		if (typeof req.body.performanceLanguage !== "undefined")
			profileFields.performanceLanguage =
				req.body.performanceLanguage.split(",");

		//Social Links
		profileFields.social = {};
		if (req.body.youtube) profileFields.youtube = req.body.youtube;
		if (req.body.twitter) profileFields.twitter = req.body.twitter;
		if (req.body.facebook) profileFields.facebook = req.body.facebook;
		if (req.body.linkedin) profileFields.linkedin = req.body.linkedin;
		if (req.body.instagram) profileFields.instagram = req.body.instagram;

		Profile.findOne({ user: req.user.id }).then((profile) => {
			if (profile) {
				//Update Profile Fields
				Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true }
				).then((profile) => res.json(profile));
			} else {
				//Create new Profile
				//Check if uniqueId exists
				Profile.findOne({ uniqueId: profileFields.uniqueId }).then(
					(profile) => {
						if (profile) {
							errors.uniqueId = "Unique Id is already exists";
							res.status(400).json(errors);
						}

						//Save Profile
						new Profile(profileFields)
							.save()
							.then((profile) => res.json(profile));
					}
				);
			}
		});
	}
);

module.exports = router;
