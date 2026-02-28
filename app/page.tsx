export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "40px",
      }}
    >
      {/* LEFT COLUMN - MAIN NEWS */}
      <div>
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
            marginBottom: "25px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>
            लखनऊ में नई विकास योजना की घोषणा
          </h3>
          <p style={{ lineHeight: "1.7", color: "#444" }}>
            यहाँ संपादक द्वारा डाली गई मुख्य खबरें दिखेंगी। यह एक डेमो टेक्स्ट है।
          </p>
        </div>

        <div
          style={{
            background: "#f9f9f9",
            padding: "25px",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>
            मुख्यमंत्री ने नई योजनाओं की समीक्षा की
          </h3>
          <p style={{ lineHeight: "1.7", color: "#444" }}>
            यहाँ दूसरी मुख्य खबर दिखेगी। आगे चलकर यह डेटा database से आएगा।
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN - SHORT NEWS */}
      <div>
        <h2
          style={{
            fontSize: "24px",
            borderBottom: "3px solid #c0392b",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          UP समाचार संक्षेप
        </h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            style={{
              marginBottom: "15px",
              paddingBottom: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            योगी सरकार ने नई भर्ती प्रक्रिया शुरू की।
          </li>
          <li
            style={{
              marginBottom: "15px",
              paddingBottom: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            वाराणसी में पर्यटन को बढ़ावा देने की योजना।
          </li>
          <li
            style={{
              marginBottom: "15px",
              paddingBottom: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            यूपी बोर्ड परीक्षा की नई तिथि घोषित।
          </li>
        </ul>
      </div>
    </div>
  );
}
