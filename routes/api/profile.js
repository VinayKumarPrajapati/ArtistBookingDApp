const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Validation
const validateProfileInput = require("../../validation/profile");
const validateExperienceInput = require("../../validation/experience");
const validateTrainingInput = require("../../validation/training");

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
			.populate("user", ["name", "avatar"])
			.then((profile) => {
				if (!profile) {
					errors.noprofile = "There is no profile for this user";
					return res.status(404).json(errors);
				}
				res.json(profile);
			})
			.catch((err) => res.status(404).json(err));
	}
);

// @route   POST api/uniqueId/:uniqueId
// @desc    Get profile by uniqueId
// @access  public
router.get("/uniqueId/:uniqueId", (req, res) => {
	const errors = {};
	Profile.findOne({ uniqueId: req.params.uniqueId })
		.populate("user", ["name", "avatar"])
		.then((profile) => {
			if (!profile) {
				erros.noprofile = "There is no profile associated with this unique id";
				res.status(404).json(errors);
			}
			res.json(profile);
		})
		.catch((err) => res.status(404).json(err));
});

// @route   POST api/user/:userId
// @desc    Get profile by userId
// @access  public
router.get("/user/:user_id", (req, res) => {
	const errors = {};

	Profile.findOne({ user: req.params.user_id })
		.populate("user", ["name", "avatar"])
		.then((profile) => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				res.status(404).json(errors);
			}

			res.json(profile);
		})
		.catch((err) =>
			res.status(404).json({ profile: "There is no profile for this user" })
		);
});

// @route   POST api/profile/all
// @desc    Get all profiles
// @access  public
router.get("/all", (req, res) => {
	const errors = {};

	Profile.find()
		.populate("user", ["name", "avatar"])
		.then((profiles) => {
			if (!profiles) {
				errors.noprofile = "There are no profiles";
				return res.status(404).json(errors);
			}

			res.json(profiles);
		})
		.catch((err) => res.status(404).json({ profile: "There are no profiles" }));
});

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
		if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
		if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
		if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
		if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
		if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
		console.log(profileFields.social);
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

// @route   POST api/profile/experience
// @desc    Add experience to Artist
// @access  Private
router.post(
	"/experience",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const { errors, isValid } = validateExperienceInput(req.body);

		if (!isValid) {
			return res.status(400).json(errors);
		}

		Profile.findOne({ user: req.user.id }).then((profile) => {
			const newExp = {
				category: req.body.category,
				genre: req.body.genre,
				location: req.body.location,
				eventType: req.body.eventType,
				performaceDuration: req.body.performaceDuration,
				offStageMember: req.body.offStageMember,
				priceCharged: req.body.priceCharged,
			};
			//Profile Obj to Array
			profile.experience.unshift(newExp);
			profile.save().then((profile) => res.json(profile));
		});
	}
);

// @route   POST api/profile/training
// @desc    Add training to profile
// @access  Private
router.post(
	"/training",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const { errors, isValid } = validateTrainingInput(req.body);

		// Check Validation
		if (!isValid) {
			// Return any errors with 400 status
			return res.status(400).json(errors);
		}

		Profile.findOne({ user: req.user.id }).then((profile) => {
			const newTraining = {
				trainingCenter: req.body.trainingCenter,
				certificate: req.body.certificate,
				fieldofTraining: req.body.fieldofTraining,
				from: req.body.from,
				to: req.body.to,
				current: req.body.current,
				description: req.body.description,
			};

			// Add to exp array
			profile.training.unshift(newTraining);

			profile.save().then((profile) => res.json(profile));
		});
	}
);

module.exports = router;