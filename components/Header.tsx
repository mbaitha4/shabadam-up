export default function Header() {
  return (
    <header style={{ textAlign: "center", padding: "20px 0" }}>
      <h1 style={{ color: "#c0392b", fontSize: "42px", margin: 0 }}>
        शब्दम्
      </h1>

      <p style={{ marginTop: "8px", color: "#555" }}>
        उत्तर प्रदेश की बुलंद आवाज़
      </p>

      <nav style={{ marginTop: "20px" }}>
        <a style={{ margin: "0 15px", fontWeight: "bold" }}>
          UP की ताज़ा खबरें
        </a>
        <a style={{ margin: "0 15px", fontWeight: "bold" }}>
          संपादकीय
        </a>
        <a style={{ margin: "0 15px", fontWeight: "bold" }}>
          नौकरी-भर्ती
        </a>
      </nav>

      <hr style={{ marginTop: "20px", border: "1px solid #c0392b" }} />
    </header>
  );
}
