import Link from "next/link";
import Image from "next/image";
import { newsData } from "./data/news";

export default function HomePage() {
  return (
    <div className="news-layout">
      <section className="left-column">
        <h2 className="section-title">आज की मुख्य खबरें</h2>

        {newsData.map((news) => (
          <div key={news.slug} className="news-card">
            <Image
              src={news.image}
              alt={news.title}
              width={800}
              height={400}
              className="news-image"
            />

            <h3>
              <Link href={`/news/${news.slug}`}>
                {news.title}
              </Link>
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
}
