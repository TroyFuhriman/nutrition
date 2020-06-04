import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Log = new Schema(
  {
    food_name: { type: String, required: true },
    serving_quantity: { type: Number, required: true },
    nf_calories: { type: Number, required: true },
    description: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    day: { type: ObjectId, ref: "day", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Log.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Log;
