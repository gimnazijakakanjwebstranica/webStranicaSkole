import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: String,
  body: String,
  imagesUrl: String,
});

export const Article = mongoose.model("Article", articleSchema)