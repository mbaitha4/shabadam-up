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
      <head>
        <meta name="theme-color" content="#c0392b" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body
        style={{
          margin: 0,
          fontFamily: "serif",
          background: "#f5f5f5",
        }}
      >
        {/* Header */}
        <header
          style={{
            textAlign: "center",
            padding: "20px 0",
            background: "#ffffff",
            borderBottom: "2px solid #c0392b",
          }}
        >
          <h1
            style={{
              color: "#c0392b",
              fontSize: "42px",
              margin: 0,
            }}
          >
            शब्दम्
          </h1>

          <p style={{ marginTop: "8px", color: "#555" }}>
            उत्तर प्रदेश की बुलंद आवाज
          </p>

          <nav style={{ marginTop: "20px" }} className="nav-links">
            <a>UP की ताजा खबरें</a>
            <a>संपादकीय</a>
            <a>नौकरी-भर्ती</a>
          </nav>
        </header>

        {/* Main Content */}
        <main
          style={{
            maxWidth: "1100px",
            margin: "40px auto",
            padding: "20px",
            background: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            marginTop: "40px",
            color: "#777",
            fontSize: "14px",
          }}
        >
          © 2026 शब्दम् | उत्तर प्रदेश की बुलंद आवाज
        </footer>
      </body>
    </html>
  );
}
