const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Profile Schema
const ProfileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user",
	},
	uniqueId: {
		type: String,
		required: true,
		max: 32,
	},
	artistCompany: {
		type: String,
	},
	website: {
		type: String,
	},
	artistTalent: {
		type: [String],
		required: true,
	},
	performanceLanguage: {
		type: [String],
		required: true,
	},
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
