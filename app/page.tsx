export default function Home() {
  return (
    <main style={{ padding: "30px" }}>
      <section style={{ marginBottom: "50px" }}>
        <h2
          style={{
            borderBottom: "3px solid #c0392b",
            paddingBottom: "10px",
            fontSize: "26px",
            color: "#222",
          }}
        >
          आज की मुख्य खबरें
        </h2>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "25px",
            minHeight: "150px",
            marginTop: "20px",
            backgroundColor: "#fafafa",
            fontSize: "18px",
            color: "#333",
          }}
        >
          यहाँ संपादक द्वारा डाली गई मुख्य खबरें दिखेंगी।
        </div>
      </section>

      <section>
        <h2
          style={{
            borderBottom: "3px solid #c0392b",
            paddingBottom: "10px",
            fontSize: "26px",
            color: "#222",
          }}
        >
          UP समाचार संक्षेप
        </h2>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "25px",
            minHeight: "150px",
            marginTop: "20px",
            backgroundColor: "#fafafa",
            fontSize: "18px",
            color: "#333",
          }}
        >
          यहाँ संक्षेप समाचार दिखेंगे।
        </div>
      </section>
    </main>
  );
}
