const ContactSchema = new Schema({
	phNumber: [Number],
	email: [String],
	address: {
		state: String,
		city: String,
		street: String,
		houseNumber: String,
	},
	created: { type: Date, default: Date.now, required: true },
});

module.exports = ContactInfo = mongoose.model("contactInfo", ContactSchema);
