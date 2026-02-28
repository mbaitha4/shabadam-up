export default function Home() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "50px",
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          <h2
            style={{
              fontSize: "30px",
              borderBottom: "3px solid #c0392b",
              paddingBottom: "10px",
              marginBottom: "25px",
            }}
          >
            आज की मुख्य खबरें
          </h2>

          <div
            style={{
              background: "#ffffff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              marginBottom: "30px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              लखनऊ में नई विकास योजना की घोषणा
            </h3>
            <p style={{ lineHeight: "1.8", color: "#555" }}>
              यहाँ संपादक द्वारा डाली गई मुख्य खबरें दिखेंगी। यह एक डेमो टेक्स्ट है।
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              मुख्यमंत्री ने नई योजनाओं की समीक्षा की
            </h3>
            <p style={{ lineHeight: "1.8", color: "#555" }}>
              यहाँ दूसरी मुख्य खबर दिखेगी। आगे चलकर यह डेटा database से आएगा।
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <h2
            style={{
              fontSize: "26px",
              borderBottom: "3px solid #c0392b",
              paddingBottom: "10px",
              marginBottom: "25px",
            }}
          >
            UP समाचार संक्षेप
          </h2>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "15px" }}>
                • योगी सरकार ने नई भर्ती प्रक्रिया शुरू की।
              </li>
              <li style={{ marginBottom: "15px" }}>
                • वाराणसी में पर्यटन को बढ़ावा देने की योजना।
              </li>
              <li>
                • यूपी बोर्ड परीक्षा की नई तिथि घोषित।
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
