export default function Home() {
  return (
    <div className="news-grid">

      {/* LEFT COLUMN */}
      <div>
        <h2 className="section-title">आज की मुख्य खबरें</h2>

        <div className="news-card">
          <h3>लखनऊ में नई विकास योजना की घोषणा</h3>
          <p>
            यहाँ संपादक द्वारा डाली गई मुख्य खबरें दिखेंगी।
            यह एक डेमो टेक्स्ट है।
          </p>
        </div>

        <div className="news-card">
          <h3>मुख्यमंत्री ने नई योजनाओं की समीक्षा की</h3>
          <p>
            यहाँ दूसरी मुख्य खबर दिखेगी।
            आगे चलकर यह डेटा database से आएगा।
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div>
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
