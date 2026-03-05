"use client";

import { useState } from "react";

export default function NewArticle() {

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("mukhya");
  const [image, setImage] = useState("");

  const handleSubmit = async (e:any) => {

    e.preventDefault();

    await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({
        title,
        summary,
        content,
        category,
        image,
      }),
    });

    alert("Article Published ✅");

    setTitle("");
    setSummary("");
    setContent("");
  };

  const handleImage = (e:any) => {

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (

    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>

      <h1>Add New Article</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Summary (Short news for homepage)"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Full Article Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", height: "150px", marginBottom: "10px" }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginBottom: "10px" }}
        >
          <option value="mukhya">मुख्य खबरें</option>
          <option value="sankshep">UP समाचार संक्षेप</option>
          <option value="sampadakiya">संपादकीय</option>
          <option value="naukri">नौकरी</option>
        </select>

        <br />

        <input type="file" onChange={handleImage} />

        <br /><br />

        <button type="submit">Publish</button>

      </form>

    </div>
  );
}
