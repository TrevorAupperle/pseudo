import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    immutable: true
  },
  name: {
    type: String,
    required: false,
    unique: false
  },
  email: {
    type: String,
    required: false,
    unique: false
  },
  joinDate: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  professionalStatus: {
    type: Boolean,
    required: false,
    default: false
  },
  interactiveScore: {
    type: String,
    required: false,
    default: 0
  }, 
  experience: {
    type: String,
    required: false,
  }, 
  skills: {
    type: Array,
    required: false,
    default: {}
  }, 
});

const User = mongoose.model("User", UserSchema);

export default User;