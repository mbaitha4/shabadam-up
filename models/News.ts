import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  slug: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.News ||
  mongoose.model("News", NewsSchema);
