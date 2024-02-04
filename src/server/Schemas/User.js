import mongoose from "mongoose";
import { date } from "zod";

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
  joinDate: {
    type: Date,
    default: Date.now
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

export default User;