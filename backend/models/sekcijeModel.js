import mongoose from "mongoose";

const sekcijeSchema = mongoose.Schema({
  images: [String],
});

export const Sekcije = mongoose.model("Sekcije", sekcijeSchema);
