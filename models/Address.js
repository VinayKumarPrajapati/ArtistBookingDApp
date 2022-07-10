const AddressSchema = new Schema({
	firstName: String,
	lastName: String,
	company: String,
	contactInfo: {
		phNumber: [Number],
		email: [String],
		address: {
			state: String,
			city: String,
			street: String,
			houseNumber: String,
		},
	},
});

module.exports = Address = mongoose.model("address", AddressSchema);
