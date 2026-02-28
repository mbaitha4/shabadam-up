import Link from "next/link";
import Image from "next/image";
import { newsData } from "./data/news";

export default function HomePage() {
  return (
    <div className="home-container">

      {/* LEFT COLUMN */}
      <div className="main-news">
        <h2 className="section-title">आज की मुख्य खबरें</h2>

        {newsData.map((news) => (
          <div key={news.slug} className="news-card">
            <Image
              src={news.image}
              alt={news.title}
              width={600}
              height={300}
              className="news-image"
            />

            <h3>
              <Link href={`/news/${news.slug}`}>
                {news.title}
              </Link>
            </h3>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
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
