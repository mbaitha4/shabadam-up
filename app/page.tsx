import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export default async function HomePage() {

  await connectDB();

  const news = await News.find().sort({ createdAt: -1 });

  return (

    <div className="home-grid">

      {/* MAIN NEWS */}

      <div className="main-news">

        <h2>आज की मुख्य खबरें</h2>

        {news.map((item:any) => (

          <Link
            key={item._id}
            href={`/news/${item._id}`}
            className="news-card"
          >

            {item.image && (
              <img src={item.image} alt={item.title} />
            )}

            <h3>{item.title}</h3>

            <p style={{ color: "gray", fontSize: "14px" }}>
              {new Date(item.createdAt).toLocaleString()}
            </p>

            <p>{item.summary}</p>

          </Link>

        ))}

      </div>


      {/* RIGHT SIDE SUMMARY */}

      <div className="sidebar">

        <h2>UP समाचार संक्षेप</h2>

        <ul>

          {news.slice(0,5).map((item:any) => (

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
