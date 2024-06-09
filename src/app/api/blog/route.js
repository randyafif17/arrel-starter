import { Post } from "@/lib/models";
import connectToDb from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDb(); // Ensure this is awaited

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
};
