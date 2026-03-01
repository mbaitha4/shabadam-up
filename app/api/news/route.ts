import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Editor from "@/models/Editor";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await connectDB();

  const { email, password } = await req.json();

  const user = await Editor.findOne({ email });

  if (!user) {
    return NextResponse.json({ success: false });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ success: false });
  }

  return NextResponse.json({ success: true });
}
