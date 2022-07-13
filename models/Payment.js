const { ObjectId } = mongoose.Schema;

const paymentStatus = ["Pending", "awaiting", "Completed", "Error"];

//Payment Schema
const PaymentSchema = new Schema({
	order: {
		type: ObjectId,
		ref: "order",
	},
	status: { type: String, enum: paymentStatus },
	amount: Number,
	refundId: String,
	createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = PaymentInfo = mongoose.model("paymentInfo", PaymentSchema);
