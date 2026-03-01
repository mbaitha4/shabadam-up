import "./globals.css";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";

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

        {/* HEADER */}
        <header className="site-header">
          <h1 className="logo">शब्दम्</h1>
          <p className="tagline">उत्तर प्रदेश की बुलंद आवाज</p>

          <nav className="nav-links">
            <Link href="/">UP की ताज़ा खबरें</Link>
            <Link href="/sampadakiya">संपादकीय</Link>
            <Link href="/naukri">नौकरी-भर्ती</Link>
          </nav>
        </header>

        <div className="divider"></div>

        {/* PAGE CONTENT */}
        <main className="page-container">
       {children}
        </main>

        {/* FOOTER */}
        <footer className="footer">
          © 2026 शब्दम् | उत्तर प्रदेश की बुलंद आवाज
        </footer>

      </body>
    </html>
  );
}
