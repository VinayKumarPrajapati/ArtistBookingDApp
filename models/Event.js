const { ObjectId } = mongoose.Schema;

//Event Schema
const EventSchema = new Schema({
	eventName: String,
	eventType: {},
	eventContactInfo: {},
	price: Number,
	createdBy: { type: ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = Event = mongoose.model("event", EventSchema);
