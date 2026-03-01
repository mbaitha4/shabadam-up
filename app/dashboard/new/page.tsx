"use client";

import { useState } from "react";

export default function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage("Article Published ✅");
      setTitle("");
      setContent("");
    } else {
      setMessage("Error publishing article");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Add New Article</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
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

        <button type="submit" style={{ padding: "10px 20px" }}>
          Publish
        </button>
      </form>

      <p style={{ marginTop: "20px", color: "green" }}>{message}</p>
    </div>
  );
}
