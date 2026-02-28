import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main style={{ padding: "40px" }}>
        <section style={{ marginBottom: "50px" }}>
          <h2
            style={{
              borderLeft: "5px solid #b30000",
              paddingLeft: "10px",
              fontSize: "26px",
              marginBottom: "20px",
            }}
          >
            आज की मुख्य खबरें
          </h2>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              background: "#fafafa",
              minHeight: "120px",
              fontSize: "16px",
            }}
          >
            समाचार यहाँ दिखेंगे
          </div>
        </section>

        <section>
          <h2
            style={{
              borderLeft: "5px solid #b30000",
              paddingLeft: "10px",
              fontSize: "26px",
              marginBottom: "20px",
            }}
          >
            UP समाचार संक्षेप
          </h2>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              background: "#fafafa",
              minHeight: "120px",
              fontSize: "16px",
            }}
          >
            संक्षेप समाचार यहाँ दिखेंगे
          </div>
        </section>
      </main>
    </>
  );
}
