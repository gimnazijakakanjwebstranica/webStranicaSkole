import mongoose from "mongoose";

const vijeceSchema = mongoose.Schema({
  images: [String],
});

export const VijeceRoditelja = mongoose.model("Vijece_roditelja", vijeceSchema);
