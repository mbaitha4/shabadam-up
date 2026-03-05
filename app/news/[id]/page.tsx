import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export default async function ArticlePage({ params }:any) {

  await connectDB();

  const article = await News.findById(params.id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (

    <div style={{maxWidth:"900px",margin:"auto",padding:"20px"}}>

      <h1>{article.title}</h1>

      <p style={{color:"gray"}}>
        {new Date(article.createdAt).toLocaleString()}
      </p>

      {article.image && (
        <img
          src={article.image}
          style={{width:"100%",margin:"20px 0"}}
        />
      )}

      <p style={{fontSize:"18px",lineHeight:"1.7"}}>
        {article.content}
      </p>

    </div>
  );
}
