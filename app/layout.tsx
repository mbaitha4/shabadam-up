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

        {/* HEADER */}
        <header>
          <h1>शब्दम्</h1>
          <p>उत्तर प्रदेश की बुलंद आवाज</p>

          <nav className="nav">
            <div className="nav-links">
              <a href="#">UP की ताज़ा खबरें</a>
              <a href="#">संपादकीय</a>
              <a href="#">नौकरी-भर्ती</a>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT AREA */}
        <div className="main-container">
          <div className="news-layout">

            {/* LEFT COLUMN */}
            <div className="content-block">
              <h2 className="section-title">आज की मुख्य खबरें</h2>
              <div className="section-line"></div>

              <div className="news-card">
                <h3>लखनऊ में नई विकास योजना की घोषणा</h3>
                <p>
                  यहां संपादक द्वारा डाली गई मुख्य खबरें दिखेंगी।
                  यह एक डेमो टेक्स्ट है।
                </p>
              </div>

              <div className="news-card">
                <h3>मुख्यमंत्री ने नई योजनाओं की समीक्षा की</h3>
                <p>
                  यहां दूसरी मुख्य खबर दिखेगी। आगे चलकर यह
                  डेटा database से आएगा।
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="content-block sidebar">
              <h2 className="section-title">UP समाचार संक्षेप</h2>
              <div className="section-line"></div>

              <ul>
                <li>योगी सरकार ने नई भर्ती प्रक्रिया शुरू की।</li>
                <li>वाराणसी में पर्यटन को बढ़ावा देने की योजना।</li>
                <li>यूपी बोर्ड परीक्षा की नई तिथि घोषित।</li>
              </ul>
            </div>

          </div>

          {/* FOOTER */}
          <footer>
            © 2026 शब्दम् | उत्तर प्रदेश की बुलंद आवाज
          </footer>
        </div>

        {children}

      </body>
    </html>
  );
}
