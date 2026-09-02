"use client";
import { useState, useEffect } from "react";
import { Search, FileText, ExternalLink, Clock, Tag } from "lucide-react";

export default function NotesApp({ onOpenBrowser }) {
  const [blogs, setBlogs] = useState([]);
  const [selected, setSelected] = useState(null);
  const [content, setContent] = useState("");
  const [q, setQ] = useState("");

  useEffect(() => { fetch("/api/blogs").then((r) => r.json()).then((d) => setBlogs(Array.isArray(d) ? d : [])).catch(() => {}); }, []);

  const filtered = blogs.filter(b => !q.trim() || b.title.toLowerCase().includes(q.toLowerCase()) || b.description?.toLowerCase().includes(q.toLowerCase()));

  const openBlog = async (slug) => {
    const hit = blogs.find((b) => b.slug === slug);
    setSelected(hit);
    setContent(`# ${hit?.title}\n\n${hit?.description}\n\nThis is a preview. Open full blog in Browser.`);
  };

  return (
    <div className="h-full flex bg-[#0f0f12] text-zinc-100 overflow-hidden">
      <div className="w-[300px] shrink-0 border-r border-white/[0.06] flex flex-col bg-[#17171a]">
        <div className="h-[52px] flex items-center px-3 border-b border-white/[0.06] gap-2 bg-[#1c1c1f] shrink-0">
          <div className="flex-1 flex items-center gap-2 bg-[#0f0f12] border border-white/[0.06] rounded-full px-3 py-1.5 focus-within:border-white/10">
            <Search size={13} className="text-zinc-500 shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search notes"
              className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-zinc-500 text-white"
            />
            {q && <button onClick={()=> setQ("")} className="text-zinc-500 hover:text-zinc-300 text-xs">×</button>}
          </div>
        </div>

        <div className="px-3 py-2 flex items-center justify-between border-b border-white/[0.06] bg-[#0f0f12]/50">
          <span className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">Notes • {filtered.length}</span>
          <span className="text-[11px] text-zinc-600">{blogs.length} total</span>
        </div>

        <div className="flex-1 overflow-auto divide-y divide-white/[0.04]">
          {filtered.map((b) => (
            <button key={b.slug} onClick={() => openBlog(b.slug)} className={`w-full text-left p-3.5 hover:bg-white/[0.04] transition group ${selected?.slug === b.slug ? "bg-[#0a84ff]/10 border-l-2 border-[#0a84ff]" : "border-l-2 border-transparent"}`}>
              <div className="font-semibold text-[13px] leading-tight line-clamp-2 text-white group-hover:text-white">{b.title}</div>
              <div className="text-xs text-zinc-500 line-clamp-2 mt-1.5 leading-relaxed">{b.description}</div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-zinc-300 font-medium flex items-center gap-1"><Clock size={10}/> {b.readingTime || "5 min"}</span>
                <span className="text-[10px] text-zinc-500">{b.date}</span>
              </div>
            </button>
          ))}
          {filtered.length === 0 && <div className="p-8 text-sm text-zinc-500 text-center">No notes found.</div>}
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0 bg-[#0f0f12]">
        {selected ? (
          <>
            <div className="h-[52px] flex items-center justify-between px-4 border-b border-white/[0.06] bg-[#1c1c1f] shrink-0">
              <span className="text-[13px] font-medium truncate text-white pr-3">{selected.title}</span>
              <button onClick={() => onOpenBrowser?.(`/blogs/${selected.slug}`)} className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-[#0a84ff] hover:bg-[#0066cc] text-white flex items-center gap-1.5 font-medium transition"><ExternalLink size={12} /> Open</button>
            </div>
            <div className="flex-1 overflow-auto p-6 prose prose-invert prose-sm max-w-none select-text">
              <h1 className="text-xl font-bold text-white tracking-tight">{selected.title}</h1>
              <p className="text-zinc-400 leading-relaxed">{selected.description}</p>
              <div className="flex flex-wrap gap-1.5 my-3">
                {(selected.tags || []).map((t) => <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 flex items-center gap-1"><Tag size={10}/> {t}</span>)}
              </div>
              <div className="whitespace-pre-wrap leading-relaxed text-sm bg-[#1a1a1e] border border-white/[0.06] rounded-2xl p-4 text-zinc-300">{content}</div>
              <p className="text-xs text-zinc-500 mt-6">Full blog content is rendered from MDX files at <code className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-zinc-300">/content/blogs</code>. Open in Browser for complete MDX.</p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-zinc-500">
              <FileText size={22} />
            </div>
            <p className="text-sm text-white font-medium">Select a note to read</p>
            <p className="text-xs mt-1 text-zinc-500">{blogs.length} notes • Dark mode • Distraction-free</p>
          </div>
        )}
      </div>
    </div>
  );
}
