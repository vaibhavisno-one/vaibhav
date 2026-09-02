import { getProjects } from '@/lib/getProjects';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
