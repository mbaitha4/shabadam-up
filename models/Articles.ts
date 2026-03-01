import mongoose, { Schema, models, model } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: ["mukhya", "sankhep", "sampadakiya", "naukri"],
      required: true,
    },

    slug: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  {
    timestamps: true, // 👈 This adds createdAt & updatedAt automatically
  }
);

// Prevent model overwrite in Next.js hot reload
const Article =
  models.Article || model("Article", ArticleSchema);

export default Article;
