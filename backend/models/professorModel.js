import mongoose from "mongoose";

const professorSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  subjects: {
    type: String,
    required: true,
  },
  titles: {
    type: String,
    required: true,
  },
});

export const Professor = mongoose.model("Professor", professorSchema);
