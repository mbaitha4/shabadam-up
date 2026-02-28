import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
