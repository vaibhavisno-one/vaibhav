import { getBlogBySlug } from '@/lib/getBlogs';
import { NextResponse } from 'next/server';

export async function GET(_req, { params }) {
  try {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    if (!blog) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
