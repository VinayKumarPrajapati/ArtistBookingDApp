const orderStatus = ["Created", "Cancelled", "Awaiting", "Completed"];

const OrderSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user",
	},
	address: {
		type: Schema.Types.ObjectId,
		ref: "address",
	},
	status: { type: String, enum: orderStatus },
	ticket: {
		type: Schema.Types.ObjectId,
		ref: "ticket",
	},

	date: {
		eventDate: { type: Date },
	},
});

module.exports = Order = mongoose.model("order", OrderSchema);
