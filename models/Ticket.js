const { ObjectId } = mongoose.Schema;

const TicketSchema = new Schema({
	eventName: String,
	price: Number,
	user: {
		type: ObjectId,
		ref: "user",
	},
	order: {
		type: ObjectId,
		ref: "order",
	},
	orderedBy: { type: ObjectId, ref: "User" },
	created: { type: Date, default: Date.now, required: true },
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
