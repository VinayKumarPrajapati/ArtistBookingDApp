const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateTrainingInput(data) {
	let errors = {};

	data.trainingCenter = !isEmpty(data.trainingCenter)
		? data.trainingCenter
		: "";
	data.certificate = !isEmpty(data.certificate) ? data.certificate : "";
	data.fieldofTraining = !isEmpty(data.fieldofTraining)
		? data.fieldofTraining
		: "";
	data.from = !isEmpty(data.from) ? data.from : "";
	data.to = !isEmpty(data.to) ? data.to : "";

	if (Validator.isEmpty(data.trainingCenter)) {
		errors.trainingCenter = "Training Center is Mandatory";
	}

	if (Validator.isEmpty(data.certificate)) {
		errors.certificate = "Certificate is Mandatory";
	}

	if (Validator.isEmpty(data.fieldofTraining)) {
		errors.fieldofTraining = "Field Of Training is Mandatory";
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
