import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Article from "@/models/Article";

export async function POST(req: Request) {
  await connectDB();

  const { title, content, category, image } = await req.json();

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  await Article.create({
    title,
    content,
    category,
    image,
    slug,
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  await connectDB();
  const articles = await Article.find().sort({ createdAt: -1 });
  return NextResponse.json(articles);
}
