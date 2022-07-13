const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

// Profile Schema
const ProfileSchema = new Schema({
	user: {
		type: ObjectId,
		ref: "user",
	},
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	gender: {
		type: String,
	},
	uniqueId: {
		type: String,
		required: true,
		max: 64,
	},
	artistCompany: {
		type: String,
	},
	website: {
		type: String,
	},
	category: {
		type: [String],
	},
	performanceLanguage: {
		type: [String],
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
			},
			genre: {
				type: String,
			},
			location: {
				type: String,
			},
			eventType: {
				type: String,
			},
			performaceDuration: {
				type: String,
			},
			offStageMember: {
				type: Boolean,
			},
			priceCharged: {
				type: String,
			},
		},
	],
	training: [
		{
			trainingCenter: {
				type: String,
			},
			certificate: {
				type: String,
			},
			fieldofTraining: {
				type: String,
			},
			from: {
				type: Date,
			},
			to: {
				type: Date,
			},
			current: {
				type: Boolean,
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
		// required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
