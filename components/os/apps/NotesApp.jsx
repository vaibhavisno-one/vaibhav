"use client";
import { useState, useEffect } from "react";
import { Search, FileText, ExternalLink } from "lucide-react";

export default function NotesApp({ onOpenBrowser }) {
  const [blogs, setBlogs] = useState([]);
  const [selected, setSelected] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => { fetch("/api/blogs").then((r) => r.json()).then((d) => setBlogs(Array.isArray(d) ? d : [])).catch(() => {}); }, []);

  const openBlog = async (slug) => {
    const hit = blogs.find((b) => b.slug === slug);
    setSelected(hit);
    setContent(`# ${hit?.title}\n\n${hit?.description}\n\nThis is a preview. Open full blog in Browser.`);
  };

  return (
    <div className="h-full flex bg-[#fefefe] text-zinc-900">
      <div className="w-[280px] shrink-0 border-r border-black/10 flex flex-col bg-[#f7f7f7]">
        <div className="h-10 flex items-center px-3 border-b border-black/10 gap-2">
          <Search size={14} className="text-zinc-500" />
          <input
            placeholder="Search notes"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-zinc-400"
            onChange={(e) => {
              const q = e.target.value.toLowerCase();
              if (!q) fetch("/api/blogs").then((r) => r.json()).then((d) => setBlogs(d));
              else setBlogs((prev) => prev.filter((b) => b.title.toLowerCase().includes(q) || b.description?.toLowerCase().includes(q)));
            }}
          />
        </div>

        <div className="flex-1 overflow-auto divide-y divide-black/5">
          {blogs.map((b) => (
            <button key={b.slug} onClick={() => openBlog(b.slug)} className={`w-full text-left p-3 hover:bg-black/5 ${selected?.slug === b.slug ? "bg-[#ffde59]/50" : ""}`}>
              <div className="font-semibold text-[13px] leading-tight line-clamp-2">{b.title}</div>
              <div className="text-xs text-zinc-500 line-clamp-2 mt-1">{b.description}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-900 text-white">{b.readingTime || "5 min"}</span>
                <span className="text-[10px] text-zinc-500">{b.date}</span>
              </div>
            </button>
          ))}
          {blogs.length === 0 && <div className="p-8 text-sm text-zinc-500 text-center">No blogs found.</div>}
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0 bg-white">
        {selected ? (
          <>
            <div className="h-10 flex items-center justify-between px-4 border-b border-black/10 bg-[#f7f7f7]">
              <span className="text-sm font-medium truncate">{selected.title}</span>
              <button onClick={() => onOpenBrowser?.(`/blogs/${selected.slug}`)} className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-white flex items-center gap-1"><ExternalLink size={12} /> Open</button>
            </div>
            <div className="flex-1 overflow-auto p-6 prose prose-zinc prose-sm max-w-none select-text">
              <h1 className="text-2xl font-bold">{selected.title}</h1>
              <p className="text-zinc-600">{selected.description}</p>
              <div className="flex flex-wrap gap-2 my-3">
                {(selected.tags || []).map((t) => <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 border">{t}</span>)}
              </div>
              <div className="whitespace-pre-wrap leading-relaxed text-sm bg-zinc-50 border border-black/5 rounded-xl p-4">{content}</div>
              <p className="text-xs text-zinc-500 mt-6">Full blog content is rendered from MDX files at <code>/content/blogs</code>. The complete MDX is available when you visit the original portfolio routes or open in Browser.</p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-zinc-500">
            <FileText size={40} className="mb-3 opacity-30" />
            <p className="text-sm">Select a note to read</p>
            <p className="text-xs mt-1">{blogs.length} notes</p>
          </div>
        )}
      </div>
    </div>
  );
}
