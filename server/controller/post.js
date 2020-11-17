import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

/***
 * @route   GET /
 * @desc    Get all memory data
 * @access  Public
 *  ***/
export const getPost = async (req, res) => {
  try {
    const post_message = await PostMessage.find();
    return res.status(200).json(post_message);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/***
 * @route   POST /posts
 * @desc    Create memory
 * @access  Public
 *  ***/
export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    return res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/***
 * @route   PATCH /post
 * @desc    Update memory
 * @access  Private
 *  ***/
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

/***
 * @route   DELETE / posts
 * @desc    Delete post
 * @access  Public
 *  ***/
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

/***
 * @route   PATCH / posts
 * @desc    Like post
 * @access  Public
 *  ***/
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send("No post with that id");
  }

  const post = await PostMessage.findById(id);

  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  return res.json(updatedPost);
};
