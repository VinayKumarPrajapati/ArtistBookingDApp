import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const artSchema = new Schema(
	{
		artName: {
			type: String,
			required: "Art name is mandatory",
		},
		artType: {
			type: String,
			required: "Type of Art is mandatory",
			maxlength: 10000,
		},
		location: {
			type: String,
		},
		price: {
			type: Number,
			required: "Price is required",
			trim: true,
		},
		postedBy: {
			type: ObjectId,
			ref: "User",
		},
		image: {
			data: Buffer,
			contentType: String,
		},
		quality: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("art", artSchema);
