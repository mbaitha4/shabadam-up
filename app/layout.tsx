import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "शब्दम् - उत्तर प्रदेश की बुलंद आवाज़",
  description: "UP की ताज़ा खबरें, संपादकीय और नौकरी-भर्ती समाचार",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          margin: 0,
          backgroundColor: "#f4f4f4",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            minHeight: "100vh",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
