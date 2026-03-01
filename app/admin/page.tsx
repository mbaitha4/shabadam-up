"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isAuth = localStorage.getItem("admin");
    if (isAuth === "true") setLoggedIn(true);
  }, []);

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("admin", "true");
      setLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Editor Login</h2>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Editor Dashboard</h2>
      <p>You can now add articles here.</p>
    </div>
  );
}
