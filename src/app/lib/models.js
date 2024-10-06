import mongoose from "mongoose";

const courschema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 30,
  },
  tutor: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  img: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
});

export const Cour = mongoose.models.Cour || mongoose.model("Cour", courschema);
