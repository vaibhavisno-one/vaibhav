import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const projectsDir = path.join(publicDir, 'projects');
    const blogsDir = path.join(publicDir, 'blogs');

    const collect = (dir, prefix) => {
      if (!fs.existsSync(dir)) return [];
      return fs.readdirSync(dir)
        .filter(f => /\.(png|jpg|jpeg|webp|svg)$/i.test(f))
        .map(f => `${prefix}/${f}`);
    };

    const photos = [
      ...collect(projectsDir, '/projects'),
      ...collect(blogsDir, '/blogs'),
      '/yorolovo.jpeg',
      '/favico.png',
      '/JavaScript.svg',
      '/React.svg',
      '/Nextjs.svg',
      '/MongoDB.svg',
      '/NPM.svg',
    ].filter(Boolean);

    // Filter to only existing files (check)
    const existing = photos.filter(p => {
      const full = path.join(publicDir, p.replace(/^\//,''));
      return fs.existsSync(full);
    });

    // Add wallpapers external as well
    const wallpapers = [
      { url: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=2070&q=80', name: 'stadium' },
      { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2070&q=80', name: 'lake' },
      { url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2070&q=80', name: 'mountain-night' },
      { url: 'https://images.unsplash.com/photo-1451187580459-43490279c429?auto=format&fit=crop&w=2072&q=80', name: 'space' },
      { url: 'https://images.unsplash.com/photo-1534972195531-b367a407dcc8?auto=format&fit=crop&w=2070&q=80', name: 'forest' },
    ];

    return NextResponse.json({ photos: existing, wallpapers });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
