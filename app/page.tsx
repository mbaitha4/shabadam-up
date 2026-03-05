import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export default async function HomePage() {

  await connectDB();

  const news = await News.find().sort({ createdAt: -1 });

  const mukhya = news.filter((n:any)=>n.category==="mukhya");
  const sankshep = news.filter((n:any)=>n.category==="sankshep");

  return (

    <div className="home-grid">

      <div className="main-news">

        <h2>आज की मुख्य खबरें</h2>

        {mukhya.map((item:any)=>(
          <Link key={item._id} href={`/news/${item._id}`}>

            <div className="news-card">

              {item.image && (
                <img src={item.image} alt={item.title} />
              )}

              <h3>{item.title}</h3>

              <p>{item.summary}</p>

              <p style={{fontSize:"12px",color:"gray"}}>
                {new Date(item.createdAt).toLocaleString()}
              </p>

            </div>

          </Link>
        ))}

      </div>

      <div className="sidebar">

        <h2>UP समाचार संक्षेप</h2>

        <ul>
          {sankshep.map((item:any)=>(
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
