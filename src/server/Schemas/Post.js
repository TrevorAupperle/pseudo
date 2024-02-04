import mongoose from "mongoose";
import Comment from './Comment.js'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  datePublished: {
    type: Date,
    required: true,
    immutable: true,
    default: Date.now
  },
  dateLastModified: {
    type: Date,
    required: false,
    default: Date.now
  },
  impact: {
    type: Number,
    required: false,
    default: 0
  },
  views: {
    type: Number,
    required: false,
    default: 0
  },
  tags: {
    type: [String],
    required: false,
    default: []
  },
  communityForum: [Comment],
  professionalForum: [Comment]
});

const Post = mongoose.model("Post", postSchema);

export default Post;