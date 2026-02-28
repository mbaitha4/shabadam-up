import { newsData } from "../../data/news";
import Image from "next/image";

export default function NewsDetail({
  params,
}: {
  params: { slug: string };
}) {
  const article = newsData.find(
    (item) => item.slug === params.slug
  );

  if (!article) {
    return <div>Article Not Found</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>

      <Image
        src={article.image}
        alt={article.title}
        width={800}
        height={400}
        className="news-image"
      />

      <p>{article.content}</p>
    </div>
  );
}
