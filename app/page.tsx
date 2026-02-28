export default function Home() {
  return (
    <div>
      {/* Aaj Ki Mukhya Khabrein */}
      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "28px",
            borderBottom: "3px solid #c0392b",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          आज की मुख्य खबरें
        </h2>

        <div
          style={{
            background: "#f9f9f9",
            padding: "25px",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          यहाँ संपादक द्वारा डाली गई मुख्य खबरें दिखेंगी।
        </div>
      </section>

      {/* UP Samachar Sankshipt */}
      <section>
        <h2
          style={{
            fontSize: "28px",
            borderBottom: "3px solid #c0392b",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          UP समाचार संक्षेप
        </h2>

        <div
          style={{
            background: "#f9f9f9",
            padding: "25px",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          यहाँ संक्षेप समाचार दिखेंगे।
        </div>
      </section>
    </div>
  );
}
