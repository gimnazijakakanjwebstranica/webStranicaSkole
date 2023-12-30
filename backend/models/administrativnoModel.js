import mongoose from "mongoose";

const administrativnoSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

export const Administrativno = mongoose.model("Administrativno", administrativnoSchema);
