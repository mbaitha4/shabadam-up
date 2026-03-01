import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export default async function NewsPage({ params }: any) {
  await connectDB();

  const article = await News.findOne({ slug: params.slug });

  if (!article) return <div>Not Found</div>;

  return (
    <div style={{ padding: 40 }}>
      <h1>{article.title}</h1>
      {article.image && (
        <img src={article.image} width="400" />
      )}
      <p>{article.content}</p>
    </div>
  );
}
