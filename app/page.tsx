import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="news-layout">

      <section className="left-column">
        <h2 className="section-title">आज की मुख्य खबरें</h2>

        <div className="news-card">
          <Image
            src="https://images.unsplash.com/photo-1581090700227-1e8b0c1a4b26"
            alt="Lucknow Development"
            width={800}
            height={400}
            className="news-image"
          />

          <h3>लखनऊ में नई विकास योजना की घोषणा</h3>
          <p>
            यहां संपादक द्वारा डाली गई मुख्य खबरें दिखेंगी।
            यह एक डेमो टेक्स्ट है।
          </p>
        </div>

        <div className="news-card">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
            alt="CM Review"
            width={800}
            height={400}
            className="news-image"
          />

          <h3>मुख्यमंत्री ने नई योजनाओं की समीक्षा की</h3>
          <p>
            यहां दूसरी मुख्य खबर दिखेगी। आगे चलकर यह
            डेटा database से आएगा।
          </p>
        </div>
      </section>

      <aside className="right-column">
        <h2 className="section-title">UP समाचार संक्षेप</h2>
        <ul>
          <li>योगी सरकार ने नई भर्ती प्रक्रिया शुरू की।</li>
          <li>वाराणसी में पर्यटन को बढ़ावा देने की योजना।</li>
          <li>यूपी बोर्ड परीक्षा की नई तिथि घोषित।</li>
        </ul>
      </aside>

    </div>
  );
}
