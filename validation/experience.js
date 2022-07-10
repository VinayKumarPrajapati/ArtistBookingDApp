const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
	let errors = {};

	// making sure it should not return undefined
	data.category = !isEmpty(data.category) ? data.category : "";
	data.genre = !isEmpty(data.genre) ? data.genre : "";
	data.location = !isEmpty(data.location) ? data.location : "";
	data.eventType = !isEmpty(data.eventType) ? data.eventType : "";
	data.performaceDuration = !isEmpty(data.performaceDuration)
		? data.performaceDuration
		: "";
	data.offStageMember = !isEmpty(data.offStageMember)
		? data.offStageMember
		: "";
	data.priceCharged = !isEmpty(data.priceCharged) ? data.priceCharged : "";

	if (Validator.isEmpty(data.category)) {
		errors.category = "Category is mandatory";
	}

	if (Validator.isEmpty(data.genre)) {
		errors.genre = "Genre is mandatory";
	}

	if (Validator.isEmpty(data.location)) {
		errors.location = "Location is mandatory";
	}

	if (Validator.isEmpty(data.eventType)) {
		errors.eventType = "Event Type is mandatory";
	}

	if (Validator.isEmpty(data.performaceDuration)) {
		errors.performaceDuration = "Performace Duration is mandatory";
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
