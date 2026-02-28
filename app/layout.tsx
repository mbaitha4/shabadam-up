import "./globals.css";
import Link from "next/link";

export const metadata = {
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
            <Link href="/">UP की ताजा खबरें</Link>
            <Link href="/sampadakiya">संपादकीय</Link>
            <Link href="/naukri">नौकरी-भर्ती</Link>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          © 2026 शब्दम् | उत्तर प्रदेश की बुलंद आवाज
        </footer>
      </body>
    </html>
  );
}
