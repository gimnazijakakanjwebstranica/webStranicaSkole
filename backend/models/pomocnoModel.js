import mongoose from "mongoose";

const pomnocnoModel = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

export const Pomocno = mongoose.model(
  "Pomocno",
  pomnocnoModel
);
