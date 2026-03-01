import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export default async function HomePage() {
  await connectDB();

  const news = await News.find().sort({ createdAt: -1 });

  return (
    <div className="home-grid">

      {/* LEFT SIDE - MAIN NEWS */}
      <div className="main-news">
        <h2 className="section-title">आज की मुख्य खबरें</h2>

        {news.map((item: any) => (
          <Link
            key={item._id}
            href={`/news/${item.slug}`}
            className="news-card"
          >
            {item.image && (
              <img src={item.image} alt={item.title} />
            )}
            <h3>{item.title}</h3>
            <p>
              {item.content.substring(0, 120)}...
            </p>
          </Link>
        ))}

      </div>

      {/* RIGHT SIDE - SUMMARY */}
      <div className="sidebar">
        <h2 className="section-title">UP समाचार संक्षेप</h2>

        <ul className="summary-list">
          {news.slice(0, 5).map((item: any) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
