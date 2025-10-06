import mongoose from "mongoose";

const resumeSubSchema = new mongoose.Schema(
  {
    url: { type: String, trim: true },          // file path / cloud URL
    data: { type: Buffer },                     // optional binary
    contentType: { type: String, trim: true },  // e.g. 'application/pdf'
  },
  { _id: false }
);

const cvSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
      unique:true,
    },
    address: {
      type: String,
      trim: true,
    },
    mobileNo: {
      type: String,
      required: true,
      trim: true,
      match: [/^\+?[0-9]{7,15}$/, "Please enter a valid mobile number"],
    },
    jobCategory: {
      type: String,
      required: true,
      trim: true,
    },
    resume: {
      type: resumeSubSchema,
      default: {},
    },
  },
  { timestamps: true }
);

// Correct way to get or create the model
const CVModel = mongoose.models.CV || mongoose.model("CV", cvSchema);

export default CVModel;
