import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    required: true,
    immutable: true,
    default: Date.now
  }
});

export default commentSchema;