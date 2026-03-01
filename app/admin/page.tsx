"use client";

import { useState } from "react";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const login = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      setLoggedIn(true);
    } else {
      alert("Wrong credentials");
    }
  };

  const publish = async () => {
    await fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({ title, content, image }),
    });

    alert("Article Published");
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Editor Login</h2>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Add Article</h2>
      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />
      <textarea
        placeholder="Content"
        rows={6}
        onChange={(e) => setContent(e.target.value)}
      />
      <br /><br />
      <input
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
      />
      <br /><br />
      <button onClick={publish}>Publish</button>
    </div>
  );
}
