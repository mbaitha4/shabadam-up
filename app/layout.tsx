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
      <body>

        <header className="header">
          <h1 className="logo">शब्दम्</h1>
          <p className="tagline">उत्तर प्रदेश की बुलंद आवाज</p>

          <nav className="nav">
            <a href="#">UP की ताज़ा खबरें</a>
            <a href="#">संपादकीय</a>
            <a href="#">नौकरी-भर्ती</a>
          </nav>
        </header>

        <main className="main-container">
          {children}
        </main>

        <footer className="footer">
          © 2026 शब्दम् | उत्तर प्रदेश की बुलंद आवाज
        </footer>

      </body>
    </html>
  );
}
