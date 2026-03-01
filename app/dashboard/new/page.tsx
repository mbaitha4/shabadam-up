"use client";

import { useState } from "react";

export default function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  // Convert image to base64
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        category,
        image,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage("Article Published ✅");
      setTitle("");
      setContent("");
      setCategory("");
      setImage("");
    } else {
      setMessage("Error publishing article");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      <h1>Add New Article</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        >
          <option value="">Select Category</option>
          <option value="mukhya">मुख्य खबरें</option>
          <option value="sankhep">UP समाचार संक्षेप</option>
          <option value="sampadakiya">संपादकीय</option>
          <option value="naukri">नौकरी-भर्ती</option>
        </select>

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginBottom: "15px" }}
        />

        {image && (
          <img
            src={image}
            alt="preview"
            style={{ width: "100%", marginBottom: "15px" }}
          />
        )}

        <button type="submit" style={{ padding: "10px 20px" }}>
          Publish
        </button>
      </form>

      <p style={{ marginTop: "20px", color: "green" }}>{message}</p>
    </div>
  );
}
