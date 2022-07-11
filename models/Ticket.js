const TicketSchema = new Schema({
	eventName: String,
	price: Number,
	user: {
		type: Schema.Types.ObjectId,
		ref: "user",
	},
	order: {
		type: Schema.Types.ObjectId,
		ref: "order",
	},
	created: { type: Date, default: Date.now, required: true },
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
