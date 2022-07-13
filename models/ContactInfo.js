//Contact Schema
const ContactSchema = new Schema({
	phNumber: [Number],
	email: [String],
	address: {
		state: String,
		city: String,
		street2: String,
		street: String,
		houseNumber: String,
	},
	createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = ContactInfo = mongoose.model("contact", ContactSchema);
