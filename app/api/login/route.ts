import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const db = mongoose.connection.db;
    const user = await db.collection("editors").findOne({ email });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
      return NextResponse.json({ success: false, message: "Wrong password" });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" });
  }
}
