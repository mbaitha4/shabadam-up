import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    image: String,
    slug: String,
  },
  { timestamps: true }
);

export default mongoose.models.News ||
  mongoose.model("News", NewsSchema, "articles");
