export default function Header() {
  return (
    <header style={{
      padding: "30px",
      borderBottom: "2px solid #ccc"
    }}>
      <h1 style={{
        color: "#b30000",
        fontSize: "42px",
        margin: 0
      }}>
        शब्दम्
      </h1>

      <p style={{ margin: "5px 0 20px 0" }}>
        उत्तर प्रदेश की बुलंद आवाज़
      </p>

      <nav style={{
        display: "flex",
        gap: "20px",
        fontWeight: "bold"
      }}>
        <a href="/category/taza">UP की ताज़ा खबरें</a>
        <a href="/category/sampadakiya">संपादकीय</a>
        <a href="/category/naukri">नौकरी-भर्ती</a>
      </nav>
    </header>
  );
}
