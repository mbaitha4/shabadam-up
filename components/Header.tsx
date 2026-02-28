export default function Header() {
  return (
    <header
      style={{
        padding: "30px 20px",
        borderBottom: "4px solid #b30000",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#b30000",
          fontSize: "48px",
          margin: 0,
          letterSpacing: "1px",
        }}
      >
        शब्दम्
      </h1>

      <p
        style={{
          margin: "5px 0 20px 0",
          fontSize: "18px",
          color: "#555",
        }}
      >
        उत्तर प्रदेश की बुलंद आवाज़
      </p>

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        <a href="/category/taza" style={{ textDecoration: "none", color: "#000" }}>
          UP की ताज़ा खबरें
        </a>

        <a href="/category/sampadakiya" style={{ textDecoration: "none", color: "#000" }}>
          संपादकीय
        </a>

        <a href="/category/naukri" style={{ textDecoration: "none", color: "#000" }}>
          नौकरी-भर्ती
        </a>
      </nav>
    </header>
  );
}
