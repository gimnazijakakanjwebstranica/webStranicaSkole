import mongoose from "mongoose";

const upravaSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  }
});

export const Uprava = mongoose.model("Uprava", upravaSchema);
