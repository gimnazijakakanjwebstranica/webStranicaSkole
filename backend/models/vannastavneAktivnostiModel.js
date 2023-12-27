import mongoose from "mongoose";

const vannastavneAktivnostiSchema = mongoose.Schema({
  images: [String],
});

export const VannastavneAktivnosti = mongoose.model(
  "vannastavneAktivnosti",
  vannastavneAktivnostiSchema
);
