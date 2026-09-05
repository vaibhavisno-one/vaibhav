"use client";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  Search,
  X,
  Clock,
  Leaf,
  BookOpen,
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

function fmtDate(d) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

const mdComponents = (onLink) => ({
  h1: ({ children }) => (
    <h1 className="text-[19px] font-medium tracking-tight text-[#EDE9E1] mt-8 mb-3 leading-snug">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-[16.5px] font-medium tracking-tight text-[#EDE9E1] mt-8 mb-2.5 leading-snug">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-[14.5px] font-medium tracking-tight text-[#D8D2C7] mt-6 mb-2 leading-snug">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[13.5px] font-light leading-[1.85] text-[#B8B2A8] my-3.5">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 space-y-2 pl-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 space-y-2 pl-1 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-[13.5px] font-light leading-relaxed text-[#B8B2A8] flex gap-2.5">
      <span className="mt-[9px] w-1 h-1 rounded-full bg-[#D6C5A8]/70 shrink-0" />
      <span className="flex-1">{children}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-5 rounded-r-2xl rounded-l-md border-l-2 border-[#D6C5A8]/50 bg-white/[0.03] px-4 py-3 text-[13.5px] font-light italic leading-relaxed text-[#CFC9BD]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="px-1.5 py-[2px] rounded-md bg-white/[0.07] border border-white/[0.08] text-[12px] text-[#E8DDC8] font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-5 rounded-2xl bg-[#101010] border border-white/[0.07] p-4 overflow-x-auto text-[12.5px] leading-relaxed text-[#D8D2C7] font-mono [&_code]:bg-transparent [&_code]:border-0 [&_code]:p-0">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      onClick={(e) => {
        if (href && /^https?:\/\//i.test(href)) {
          e.preventDefault();
          onLink?.(href);
        }
      }}
      className="text-[#D6C5A8] underline decoration-[#D6C5A8]/40 underline-offset-[3px] hover:text-[#EDE9E1] hover:decoration-[#EDE9E1]/60 transition font-normal"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-8 border-white/[0.07]" />,
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      className="my-5 w-full rounded-[18px] border border-white/[0.08] object-cover saturate-[0.9]"
    />
  ),
  strong: ({ children }) => (
    <strong className="font-medium text-[#EDE9E1]">{children}</strong>
  ),
});

export default function NotesApp({ onOpenBrowser }) {
  const [blogs, setBlogs] = useState([]);
  const [cache, setCache] = useState({});
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("all");
  const [progress, setProgress] = useState(0);
  const readerRef = useRef(null);
  const cacheRef = useRef({});
  const selectedRef = useRef(null);

  const loadFull = (slug) => {
    if (!slug || cacheRef.current[slug]?.content) return;
    setLoading(true);
    fetch(`/api/blogs/${slug}`)
      .then((r) => r.json())
      .then((d) => {
        if (d?.slug) {
          cacheRef.current[slug] = d;
          setCache((c) => ({ ...c, [slug]: d }));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  const select = useCallback((slug) => {
    selectedRef.current = slug;
    setSelectedSlug(slug);
    setProgress(0);
    readerRef.current?.scrollTo({ top: 0 });
    loadFull(slug);
  }, []);

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((d) => {
        const arr = Array.isArray(d) ? d : [];
        setBlogs(arr);
        // Settle into the first story so the page always shows a whole blog
        if (!selectedRef.current && arr[0]?.slug) {
          selectedRef.current = arr[0].slug;
          setSelectedSlug(arr[0].slug);
          loadFull(arr[0].slug);
        }
      })
      .catch(() => {});
  }, []);

  const allTags = useMemo(() => {
    const m = {};
    blogs.forEach((b) => (b.tags || []).forEach((t) => (m[t] = (m[t] || 0) + 1)));
    return Object.entries(m)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [blogs]);

  const filtered = useMemo(() => {
    let arr = [...blogs];
    if (tag !== "all") arr = arr.filter((b) => (b.tags || []).includes(tag));
    if (q.trim()) {
      const s = q.toLowerCase();
      arr = arr.filter(
        (b) =>
          b.title?.toLowerCase().includes(s) ||
          b.description?.toLowerCase().includes(s) ||
          (b.tags || []).join(" ").toLowerCase().includes(s)
      );
    }
    return arr;
  }, [blogs, q, tag]);

  const meta = blogs.find((b) => b.slug === selectedSlug) || null;
  const full = cache[selectedSlug] || null;
  const selected = full || meta;

  const onReaderScroll = (e) => {
    const el = e.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
  };

  return (
    <div className="h-full flex flex-col md:flex-row bg-[#161614] text-[#EDE9E1] overflow-hidden select-text">
      {/* ——— Left · calm shelf ——— */}
      <aside
        className={`${
          selectedSlug ? "hidden md:flex" : "flex"
        } w-full md:w-[272px] shrink-0 flex-col bg-[#1A1A18]/80 border-r border-white/[0.06] min-h-0`}
      >
        <div className="px-4 pt-5 pb-3 shrink-0">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#78716C]">
            Journal
          </p>
          <h2 className="mt-1 text-[15px] font-medium tracking-tight text-[#EDE9E1]">
            Blogs
          </h2>
          <p className="mt-1 text-[11px] leading-relaxed text-[#78716C]">
            Slow reads,
            <br />
            written with care.
          </p>
          <div className="mt-3 flex items-center gap-2 h-8 bg-white/[0.04] border border-white/[0.07] rounded-full px-3.5 transition-all duration-200 focus-within:bg-white/[0.06] focus-within:border-[#D6C5A8]/30 focus-within:shadow-[0_0_0_3px_rgba(214,197,168,0.08)]">
            <Search size={13} className="text-[#78716C] shrink-0" strokeWidth={1.8} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search stories…"
              className="flex-1 min-w-0 bg-transparent outline-none text-[12.5px] placeholder:text-[#5B5650] text-[#EDE9E1]"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="w-5 h-5 grid place-items-center rounded-full bg-white/[0.07] text-[#A8A29E] hover:text-white transition"
                aria-label="Clear search"
              >
                <X size={11} />
              </button>
            )}
          </div>
          {allTags.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <button
                onClick={() => setTag("all")}
                className={`px-2.5 py-1 rounded-full text-[10.5px] font-medium transition ${
                  tag === "all"
                    ? "bg-[#EDE9E1] text-[#1C1C1A]"
                    : "bg-white/[0.04] border border-white/[0.07] text-[#A8A29E] hover:text-[#EDE9E1]"
                }`}
              >
                All
              </button>
              {allTags.slice(0, 6).map((t) => (
                <button
                  key={t.name}
                  onClick={() => setTag(tag === t.name ? "all" : t.name)}
                  className={`px-2.5 py-1 rounded-full text-[10.5px] font-medium transition ${
                    tag === t.name
                      ? "bg-[#EDE9E1] text-[#1C1C1A]"
                      : "bg-white/[0.04] border border-white/[0.07] text-[#A8A29E] hover:text-[#EDE9E1]"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 pb-2 flex items-center justify-between shrink-0">
          <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#5B5650]">
            Shelf · {filtered.length}
          </span>
          <span className="text-[10.5px] text-[#5B5650] tabular-nums">{blogs.length} total</span>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-3 pb-3 space-y-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((b, i) => {
              const isSel = b.slug === selectedSlug;
              return (
                <motion.button
                  key={b.slug}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(i * 0.03, 0.18),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => select(b.slug)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 group ${
                    isSel
                      ? "bg-[#242421] border-[#D6C5A8]/30 ring-1 ring-[#D6C5A8]/20"
                      : "bg-[#1C1C1A] border-white/[0.05] hover:bg-[#20201D] hover:border-white/[0.09]"
                  }`}
                >
                  <div className="text-[13px] font-medium leading-snug tracking-tight text-[#EDE9E1] line-clamp-2">
                    {b.title}
                  </div>
                  <div className="text-[12px] font-light text-[#78716C] line-clamp-2 mt-1.5 leading-relaxed">
                    {b.description}
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-[3px] rounded-full bg-white/[0.05] border border-white/[0.07] text-[#A8A29E] font-medium">
                      <Clock size={10} strokeWidth={1.8} /> {b.readingTime || "5 min"}
                    </span>
                    <span className="text-[10.5px] text-[#5B5650]">{fmtDate(b.date)}</span>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-[13px] font-medium text-[#EDE9E1]">No stories here</p>
              <p className="mt-1 text-[12px] text-[#78716C]">Try a softer search.</p>
              <button
                onClick={() => {
                  setQ("");
                  setTag("all");
                }}
                className="mt-3 px-4 py-1.5 rounded-full bg-[#EDE9E1] text-[#1C1C1A] text-[12px] font-medium hover:bg-white transition"
              >
                Show everything
              </button>
            </div>
          )}
        </div>

        <div className="p-3 shrink-0 hidden md:block">
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3">
            <div className="flex items-center gap-1.5 text-[#C9B99A]">
              <Leaf size={12} strokeWidth={1.8} />
              <span className="text-[11px] font-medium tracking-wide">Take your time</span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-[#78716C]">
              {filtered.length} of {blogs.length} stories
              <br />
              to sink into — no rush.
            </p>
          </div>
        </div>
      </aside>

      {/* ——— Right · whole story ——— */}
      <div
        className={`${
          selectedSlug ? "flex" : "hidden md:flex"
        } flex-1 min-w-0 flex-col min-h-0 bg-[#161614]`}
      >
        {selected ? (
          <>
            <header className="relative shrink-0 border-b border-white/[0.06] bg-[#161614]/90 backdrop-blur">
              <div className="h-[52px] flex items-center gap-2.5 px-3 sm:px-4">
                <button
                  onClick={() => setSelectedSlug(null)}
                  className="md:hidden w-8 h-8 grid place-items-center rounded-full bg-white/[0.05] border border-white/[0.07] text-[#A8A29E]"
                  aria-label="Back to stories"
                >
                  <ArrowLeft size={14} />
                </button>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium tracking-tight text-[#EDE9E1] truncate leading-tight">
                    {selected.title}
                  </p>
                  <p className="text-[11px] text-[#78716C] mt-0.5 truncate">
                    {fmtDate(selected.date)}
                    {selected.readingTime ? ` · ${selected.readingTime}` : ""}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-emerald-200/10 border border-emerald-200/20 text-emerald-100/90 font-medium shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  Full story
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04]">
                <div
                  className="h-full bg-[#D6C5A8]/70 rounded-full transition-[width] duration-150"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </header>

            <div ref={readerRef} onScroll={onReaderScroll} className="flex-1 min-h-0 overflow-y-auto">
              <article className="max-w-[640px] mx-auto px-5 sm:px-8 py-6 pb-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {selected.cover && (
                      <div className="rounded-[20px] overflow-hidden border border-white/[0.08] bg-black/30 mb-6">
                        <img
                          src={selected.cover}
                          alt={selected.title}
                          className="w-full aspect-[16/8] object-cover saturate-[0.9]"
                        />
                      </div>
                    )}
                    <h1 className="text-[21px] sm:text-[24px] font-medium tracking-tight text-[#EDE9E1] leading-tight">
                      {selected.title}
                    </h1>
                    <p className="mt-2 text-[13.5px] font-light leading-relaxed text-[#8F8A83]">
                      {selected.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {selected.date && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#A8A29E] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07]">
                          <CalendarDays size={11} strokeWidth={1.8} /> {fmtDate(selected.date)}
                        </span>
                      )}
                      {selected.readingTime && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#A8A29E] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07]">
                          <Clock size={11} strokeWidth={1.8} /> {selected.readingTime}
                        </span>
                      )}
                      {(selected.tags || []).map((t) => (
                        <button
                          key={t}
                          onClick={() => setTag(t)}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-[#D6C5A8]/10 border border-[#D6C5A8]/20 text-[#E8DDC8] hover:bg-[#D6C5A8]/20 transition"
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="my-6 border-t border-white/[0.07]" />

                    {loading && !full ? (
                      <div className="space-y-3 animate-pulse">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-3.5 rounded-full bg-white/[0.05]"
                            style={{ width: `${[96, 100, 92, 98, 70][i]}%` }}
                          />
                        ))}
                        <p className="pt-2 text-[12px] text-[#5B5650]">Brewing the words…</p>
                      </div>
                    ) : full?.content ? (
                      <ReactMarkdown components={mdComponents(onOpenBrowser)}>
                        {full.content}
                      </ReactMarkdown>
                    ) : (
                      <p className="text-[13px] font-light leading-relaxed text-[#78716C]">
                        {selected.description}
                      </p>
                    )}

                    <p className="mt-10 text-center text-[11px] text-[#5B5650]">
                      — end of story · breathe out —
                    </p>
                  </motion.div>
                </AnimatePresence>
              </article>
            </div>
          </>
        ) : (
          <div className="flex-1 hidden md:flex flex-col items-center justify-center p-8 text-center">
            <div className="w-14 h-14 rounded-[20px] bg-[#D6C5A8]/10 border border-[#D6C5A8]/20 grid place-items-center text-[#D6C5A8]">
              <BookOpen size={22} strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-[13.5px] font-medium text-[#EDE9E1]">Choose a story to settle into</p>
            <p className="mt-1 text-[12px] text-[#78716C]">
              {blogs.length} stories · full text · calm reading
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
