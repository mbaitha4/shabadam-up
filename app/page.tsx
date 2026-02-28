import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-grid">

      {/* LEFT SIDE - MAIN NEWS */}
      <div className="main-news">

        <h2 className="section-title">आज की मुख्य खबरें</h2>

        <Link href="/news/lucknow-vikas-yojana" className="news-card">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8f5b3f4f08"
            alt="Lucknow"
          />
          <h3>लखनऊ में नई विकास योजना की घोषणा</h3>
          <p>यहां संपादक द्वारा डाली गई मुख्य खबरें दिखेंगी। यह एक डेमो टेक्स्ट है।</p>
        </Link>

        <Link href="/news/cm-sameeksha" className="news-card">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="CM"
          />
          <h3>मुख्यमंत्री ने नई योजनाओं की समीक्षा की</h3>
          <p>यहां दूसरी मुख्य खबर दिखेगी। आगे चलकर यह डेटा database से आएगा।</p>
        </Link>

      </div>

      {/* RIGHT SIDE - SUMMARY */}
      <div className="sidebar">

        <h2 className="section-title">UP समाचार संक्षेप</h2>

        <ul className="summary-list">
          <li>योगी सरकार ने नई भर्ती प्रक्रिया शुरू की।</li>
          <li>वाराणसी में पर्यटन को बढ़ावा देने की योजना।</li>
          <li>यूपी बोर्ड परीक्षा की नई तिथि घोषित।</li>
        </ul>

      </div>

    </div>
  );
}
