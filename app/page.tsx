export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #c0392b", paddingBottom: "10px" }}>
          आज की मुख्य खबरें
        </h2>
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            minHeight: "120px",
            marginTop: "15px",
          }}
        >
          समाचार यहाँ दिखेंगे
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: "2px solid #c0392b", paddingBottom: "10px" }}>
          UP समाचार संक्षेप
        </h2>
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            minHeight: "120px",
            marginTop: "15px",
          }}
        >
          संक्षेप समाचार यहाँ दिखेंगे
        </div>
      </section>
    </main>
  );
}
