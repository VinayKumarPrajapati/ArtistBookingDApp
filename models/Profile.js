const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Profile Schema
const ProfileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user",
	},

	gender: {
		type: String,
		required: true,
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
	category: {
		type: [String],
		required: true,
	},
	performanceLanguage: {
		type: [String],
		required: true,
	},
	biography: {
		type: String,
	},
	USP: {
		type: String,
	},
	intrestingFact: {
		type: String,
	},
	experience: [
		{
			category: {
				type: String,
				required: true,
			},
			genre: {
				type: String,
				required: true,
			},
			location: {
				type: String,
				required: true,
			},
			eventType: {
				type: String,
				required: true,
			},
			performaceDuration: {
				type: String,
			},
			offStageMember: {
				type: Boolean,
				required: true,
			},
			priceCharged: {
				type: String,
			},
		},
	],
	training: [
		{
			school: {
				type: String,
				required: true,
			},
			certificate: {
				type: String,
				required: true,
			},
			fieldofstudy: {
				type: String,
				required: true,
			},
			from: {
				type: Date,
				required: true,
			},
			to: {
				type: Date,
			},
			current: {
				type: Boolean,
				default: false,
			},
			description: {
				type: String,
			},
		},
	],
	achievements: [
		{
			award: {
				type: String,
			},
			honor: {
				type: String,
			},
			category: {
				type: String,
			},
			description: {
				type: String,
			},
		},
	],
	social: {
		youtube: {
			type: String,
		},
		twitter: {
			type: String,
		},
		facebook: {
			type: String,
		},
		//seen many artist on linkedin if not worth mention we can remove
		linkedin: {
			type: String,
		},
		instagram: {
			type: String,
		},
	},
	totalNumOfPerformance: {
		type: Number,
		default: 0,
	},
	yearsOfExp: {
		type: Number,
		default: 0,
	},
	priceRange: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
