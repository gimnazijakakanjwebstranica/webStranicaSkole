import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

export const UceniciGeneracije = mongoose.model(
  "Učenici_generacije",
  studentSchema
);
