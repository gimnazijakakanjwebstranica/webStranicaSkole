import mongoose from "mongoose";

const maturantiSchema = mongoose.Schema({
  images: [String],
});

export const Maturanti = mongoose.model("Maturanti", maturantiSchema);
