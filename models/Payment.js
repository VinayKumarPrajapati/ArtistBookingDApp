const paymentStatus = ["Pending", "awaiting", "Completed", "Error"];

const PaymentSchema = new Schema({
	order: {
		type: Schema.Types.ObjectId,
		ref: "order",
	},
	status: { type: String, enum: paymentStatus },
	amount: Number,

	refundId: String,
	created: { type: Date, default: Date.now, required: true },
});

module.exports = PaymentInfo = mongoose.model("paymentInfo", PaymentSchema);
