import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export default async function HomePage() {

  await connectDB();

  const mukhyaNews = await News.find({ category: "mukhya" })
    .sort({ createdAt: -1 })
    .lean();

  const sankhepNews = await News.find({ category: "sankhep" })
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();

  const formattedMukhya = mukhyaNews.map((item: any) => ({
    ...item,
    _id: item._id.toString(),
  }));

  const formattedSankhep = sankhepNews.map((item: any) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className="home-grid">

      {/* MAIN NEWS */}
      <div className="main-news">

        <h2 className="section-title">आज की मुख्य खबरें</h2>

        {formattedMukhya.map((item: any) => (

          <Link
            key={item._id}
            href={`/news/${item._id}`}
            className="news-card"
          >

            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", marginBottom: "10px" }}
              />
            )}

            <h3>{item.title}</h3>

            <p style={{ color: "gray", fontSize: "13px" }}>
              {new Date(item.createdAt).toLocaleString()}
            </p>

            <p>
              {item.content?.substring(0, 120)}...
            </p>

          </Link>

        ))}

      </div>

      {/* SUMMARY */}

      <div className="sidebar">

        <h2 className="section-title">UP समाचार संक्षेप</h2>

        <ul className="summary-list">

          {formattedSankhep.map((item: any) => (

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
