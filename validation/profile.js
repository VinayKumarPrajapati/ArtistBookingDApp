const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
	let errors = {};

	// making sure it should not return undefined
	data.uniqueId = !isEmpty(data.uniqueId) ? data.uniqueId : "";
	data.category = !isEmpty(data.category) ? data.category : "";
	data.performanceLanguage = !isEmpty(data.performanceLanguage)
		? data.performanceLanguage
		: "";

	if (!Validator.isLength(data.uniqueId, { min: 4, max: 64 })) {
		errors.uniqueId = "Please Enter Valid Unique Id";
	}
	if (Validator.isEmpty(data.category)) {
		errors.category = "category is mandatory";
	}

	if (!isEmpty(data.website)) {
		if (!validator.isURL(data.website)) {
			errors.website = "Web URL is not valid";
		}
	}
	if (!isEmpty(data.youtube)) {
		if (!validator.isURL(data.youtube)) {
			errors.youtube = "Youtube id is not valid";
		}
	}
	if (!isEmpty(data.twitter)) {
		if (!validator.isURL(data.twitter)) {
			errors.twitter = "Twitter id is not valid";
		}
	}
	if (!isEmpty(data.facebook)) {
		if (!validator.isURL(data.facebook)) {
			errors.facebook = "FaceBook id is not valid";
		}
	}
	if (!isEmpty(data.linkedin)) {
		if (!validator.isURL(data.linkedin)) {
			errors.linkedin = "Linkedin id is not valid";
		}
	}
	if (!isEmpty(data.instagram)) {
		if (!validator.isURL(data.instagram)) {
			errors.instagram = "Instagram id is not valid";
		}
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
