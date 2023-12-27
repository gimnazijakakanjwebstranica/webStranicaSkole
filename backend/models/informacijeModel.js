import mongoose from "mongoose";

const informacijeSchema = mongoose.Schema({
  images: [String],
});

export const Informacije = mongoose.model("Informacije", informacijeSchema);
