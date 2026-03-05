import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export async function POST(req: Request) {

  await connectDB();

  const { title, summary, content, category, image } = await req.json();

  const article = await News.create({
    title,
    summary,
    content,
    category,
    image,
  });

  return NextResponse.json(article);
}
