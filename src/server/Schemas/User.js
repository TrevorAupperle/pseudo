import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  professionalStatus: {
    type: Boolean,
    required: true,
    default: false
  },
  interactiveScore: {
    type: String,
    required: false,
    default: 0
  }, 
  experience: {
    type: String,
    required: true,
  }, 
  skills: {
    type: Array,
    required: false,
    default: {}
  }, 
});

const User = mongoose.model("User", UserSchema);

module.exports = User;