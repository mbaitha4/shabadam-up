export default function Home() {
  return (
    <div
      style={{
        background: "#f4f4f4",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "8px",
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

            <article style={{ marginBottom: "40px" }}>
              <h3>लखनऊ में नई विकास योजना की घोषणा</h3>
              <p style={{ lineHeight: "1.8", color: "#555" }}>
                यहाँ संपादक द्वारा डाली गई मुख्य खबरें दिखेंगी। यह एक डेमो टेक्स्ट है।
              </p>
            </article>

            <article>
              <h3>मुख्यमंत्री ने नई योजनाओं की समीक्षा की</h3>
              <p style={{ lineHeight: "1.8", color: "#555" }}>
                यहाँ दूसरी मुख्य खबर दिखेगी। आगे चलकर यह डेटा database से आएगा।
              </p>
            </article>
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

            <ul style={{ lineHeight: "2", paddingLeft: "18px" }}>
              <li>योगी सरकार ने नई भर्ती प्रक्रिया शुरू की।</li>
              <li>वाराणसी में पर्यटन को बढ़ावा देने की योजना।</li>
              <li>यूपी बोर्ड परीक्षा की नई तिथि घोषित।</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "60px",
            paddingTop: "20px",
            borderTop: "1px solid #ddd",
            textAlign: "center",
            color: "#777",
            fontSize: "14px",
          }}
        >
          © 2026 शब्दम् | उत्तर प्रदेश की बुलंद आवाज़
        </div>
      </div>
    </div>
  );
}
