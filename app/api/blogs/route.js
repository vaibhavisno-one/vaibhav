import { getBlogs } from '@/lib/getBlogs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const blogs = await getBlogs();
    return NextResponse.json(blogs);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
export async function POST(req) {
  return GET();
}
