import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export default async function HomePage() {
  await connectDB();

  // Use lean() for Next.js compatibility
  const news = await News.find().sort({ createdAt: -1 }).lean();

  // Convert _id to string (important for Next.js)
  const formattedNews = news.map((item: any) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className="home-grid">
      {/* LEFT SIDE - MAIN NEWS */}
      <div className="main-news">
        <h2 className="section-title">आज की मुख्य खबरें</h2>

        {formattedNews.map((item: any) => (
          <Link
            key={item._id}
            href={`/news/${item._id}`}
            className="news-card"
          >
            {/* Image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
              />
            )}

            {/* Title */}
            <h3>{item.title}</h3>

            {/* Date */}
            <p style={{ color: "gray", fontSize: "13px" }}>
              {new Date(item.createdAt).toLocaleString()}
            </p>

            {/* Category */}
            <p style={{ fontSize: "13px", fontWeight: "bold" }}>
              Category: {item.category}
            </p>

            {/* Short Description */}
            <p>
              {item.content?.substring(0, 120)}...
            </p>
          </Link>
        ))}
      </div>

      {/* RIGHT SIDE - SUMMARY */}
      <div className="sidebar">
        <h2 className="section-title">UP समाचार संक्षेप</h2>

        <ul className="summary-list">
          {formattedNews.slice(0, 5).map((item: any) => (
            <li key={item._id}>
              <Link href={`/news/${item._id}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
