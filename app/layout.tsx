import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "शब्दम्",
  description: "उत्तर प्रदेश की बुलंद आवाज",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body
        style={{
          margin: 0,
          fontFamily: "'Noto Serif Devanagari', serif",
          backgroundColor: "#ffffff",
          color: "#111",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            textAlign: "center",
            padding: "30px 20px 20px",
            borderBottom: "2px solid #c0392b",
          }}
        >
          <h1
            style={{
              color: "#c0392b",
              fontSize: "44px",
              margin: 0,
            }}
          >
            शब्दम्
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#555",
              fontSize: "14px",
            }}
          >
            उत्तर प्रदेश की बुलंद आवाज
          </p>

          <nav
            style={{
              marginTop: "20px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            <span style={{ margin: "0 18px", cursor: "pointer" }}>
              UP की ताज़ा खबरें
            </span>
            <span style={{ margin: "0 18px", cursor: "pointer" }}>
              संपादकीय
            </span>
            <span style={{ margin: "0 18px", cursor: "pointer" }}>
              नौकरी-भर्ती
            </span>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main
          style={{
            maxWidth: "1100px",
            margin: "40px auto",
            padding: "0 20px",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
