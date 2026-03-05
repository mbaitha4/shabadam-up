import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    title: String,
    summary: String,
    content: String,
    image: String,
    category: String,
  },
  { timestamps: true }
);

export default mongoose.models.News ||
  mongoose.model("News", NewsSchema, "articles");
