import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function POST(req: Request) {
  await connectDB();

  const { title, content } = await req.json();

  const db = mongoose.connection.db;

  if (!db) {
    return NextResponse.json({ success: false });
  }

  await db.collection("articles").insertOne({
    title,
    content,
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}
