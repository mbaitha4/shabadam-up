import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "शब्दम्",
  description: "उत्तर प्रदेश की बुलंद आवाज़",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, fontFamily: "serif" }}>
        
        {/* Header Start */}
        <header style={{ textAlign: "center", padding: "20px 0" }}>
          <h1 style={{ color: "#c0392b", fontSize: "42px", margin: 0 }}>
            शब्दम्
          </h1>

          <p style={{ marginTop: "8px", color: "#555" }}>
            उत्तर प्रदेश की बुलंद आवाज़
          </p>

          <nav style={{ marginTop: "20px" }}>
            <span style={{ margin: "0 15px", fontWeight: "bold" }}>
              UP की ताज़ा खबरें
            </span>
            <span style={{ margin: "0 15px", fontWeight: "bold" }}>
              संपादकीय
            </span>
            <span style={{ margin: "0 15px", fontWeight: "bold" }}>
              नौकरी-भर्ती
            </span>
          </nav>

          <hr style={{ marginTop: "20px", border: "1px solid #c0392b" }} />
        </header>
        {/* Header End */}

        {children}
      </body>
    </html>
  );
}
