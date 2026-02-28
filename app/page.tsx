import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main style={{ padding: "40px" }}>
        <h2>आज की मुख्य खबरें</h2>

        <div style={{
          height: "150px",
          border: "1px solid #ddd",
          marginBottom: "30px"
        }}>
          समाचार यहाँ दिखेंगे
        </div>

        <h2>UP समाचार संक्षेप</h2>

        <div style={{
          height: "150px",
          border: "1px solid #ddd"
        }}>
          संक्षेप समाचार यहाँ दिखेंगे
        </div>
      </main>
    </>
  );
}
