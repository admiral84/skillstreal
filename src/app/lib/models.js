import mongoose from "mongoose";

// Define the course schema
const courseSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
  },
  tutor: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
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

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cour",
    },
  ],
});

// Export models
export const Cour =
  mongoose.models.Cour || mongoose.model("Cour", courseSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
