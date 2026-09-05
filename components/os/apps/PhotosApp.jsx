"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Briefcase,
  PenLine,
  Shapes,
  Heart,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Leaf,
  ImagePlus,
  LayoutGrid,
  Grip,
} from "lucide-react";

function prettyName(src = "") {
  const base = src.split("/").pop().split(".").slice(0, -1).join(".") || src;
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function categoryOf(src = "") {
  if (src.startsWith("/projects/")) return "work";
  if (src.startsWith("/blogs/")) return "writing";
  if (/\.svg$/i.test(src)) return "icons";
  return "personal";
}

export default function PhotosApp() {
  const [photos, setPhotos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [dense, setDense] = useState(false);
  const [idx, setIdx] = useState(null);

  useEffect(() => {
    fetch("/api/photos")
      .then((r) => r.json())
      .then((d) => setPhotos(d.photos || []))
      .catch(() => {});
  }, []);

  const counts = useMemo(() => {
    const c = { all: photos.length, work: 0, writing: 0, icons: 0, personal: 0 };
    photos.forEach((p) => {
      const k = categoryOf(p);
      if (c[k] !== undefined) c[k] += 1;
    });
    return c;
  }, [photos]);

  const list = useMemo(() => {
    let arr = filter === "all" ? [...photos] : photos.filter((p) => categoryOf(p) === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter((p) => p.toLowerCase().includes(q) || prettyName(p).toLowerCase().includes(q));
    }
    return arr;
  }, [photos, filter, query]);

  const active = idx !== null ? list[idx] : null;

  const openAt = (i) => setIdx(i);
  const close = useCallback(() => setIdx(null), []);
  const step = useCallback(
    (dir) => {
      if (list.length === 0) return;
      setIdx((cur) => (cur === null ? 0 : (cur + dir + list.length) % list.length));
    },
    [list.length]
  );

  // Calm keyboard wandering
  useEffect(() => {
    if (idx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, step, close]);

  const filters = [
    { id: "all", label: "Everything", icon: Layers, count: counts.all },
    { id: "work", label: "Work", icon: Briefcase, count: counts.work },
    { id: "writing", label: "Writing", icon: PenLine, count: counts.writing },
    { id: "icons", label: "Icons", icon: Shapes, count: counts.icons },
    { id: "personal", label: "Personal", icon: Heart, count: counts.personal },
  ];

  return (
    <div className="h-full flex bg-[#161614] text-[#EDE9E1] overflow-hidden select-text relative">
      {/* ——— Sidebar · calm album ——— */}
      <aside className="w-[190px] shrink-0 hidden sm:flex flex-col bg-[#1A1A18]/80 border-r border-white/[0.06]">
        <div className="px-4 pt-5 pb-3">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#78716C]">
            Album
          </p>
          <h2 className="mt-1 text-[15px] font-medium tracking-tight text-[#EDE9E1]">
            Gallery
          </h2>
          <p className="mt-1 text-[11px] leading-relaxed text-[#78716C]">
            Moments kept
            <br />
            softly.
          </p>
        </div>

        <div className="px-3 space-y-1 overflow-y-auto">
          {filters.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => {
                  setFilter(f.id);
                  setIdx(null);
                }}
                className={`w-full group flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all duration-200 ${
                  isActive
                    ? "bg-[#EDE9E1] text-[#1C1C1A] shadow-[0_4px_16px_rgba(237,233,225,0.12)]"
                    : "text-[#A8A29E] hover:text-[#EDE9E1] hover:bg-white/[0.05]"
                }`}
              >
                <span
                  className={`w-7 h-7 grid place-items-center rounded-lg shrink-0 transition ${
                    isActive
                      ? "bg-[#1C1C1A]/10 text-[#1C1C1A]"
                      : "bg-white/[0.05] text-[#A8A29E] group-hover:text-[#EDE9E1]"
                  }`}
                >
                  <f.icon size={13} strokeWidth={1.8} />
                </span>
                <span className="flex-1 text-[12.5px] font-medium leading-none truncate">
                  {f.label}
                </span>
                <span
                  className={`text-[10.5px] tabular-nums px-1.5 py-0.5 rounded-full leading-none ${
                    isActive
                      ? "bg-[#1C1C1A]/10 text-[#1C1C1A]/70"
                      : "bg-white/[0.05] text-[#78716C]"
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-auto p-3">
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3">
            <div className="flex items-center gap-1.5 text-[#C9B99A]">
              <Leaf size={12} strokeWidth={1.8} />
              <span className="text-[11px] font-medium tracking-wide">Take your time</span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-[#78716C]">
              {list.length} of {photos.length} frames
              <br />
              on display — no rush.
            </p>
          </div>
        </div>
      </aside>

      {/* ——— Main ——— */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="shrink-0 border-b border-white/[0.06] bg-[#161614]/90 backdrop-blur px-4 sm:px-5">
          <div className="h-[60px] flex items-center gap-3">
            <div className="min-w-0">
              <h1 className="text-[14px] font-medium tracking-tight text-[#EDE9E1] leading-none">
                Gallery
              </h1>
              <p className="mt-1 text-[11px] text-[#78716C] leading-none hidden sm:block">
                A quiet collection of moments
              </p>
            </div>

            <div className="flex-1 hidden md:flex justify-center px-4">
              <div className="flex items-center gap-2 w-full max-w-[300px] h-8 bg-white/[0.04] border border-white/[0.07] rounded-full px-3.5 transition-all duration-200 focus-within:bg-white/[0.06] focus-within:border-[#D6C5A8]/30 focus-within:shadow-[0_0_0_3px_rgba(214,197,168,0.08)]">
                <Search size={13} className="text-[#78716C] shrink-0" strokeWidth={1.8} />
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIdx(null);
                  }}
                  placeholder="Search frames by name…"
                  className="flex-1 bg-transparent outline-none text-[12.5px] placeholder:text-[#5B5650] text-[#EDE9E1]"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="w-5 h-5 grid place-items-center rounded-full bg-white/[0.07] text-[#A8A29E] hover:text-white hover:bg-white/[0.12] transition"
                    aria-label="Clear search"
                  >
                    <X size={11} />
                  </button>
                )}
              </div>
            </div>

            <div className="ml-auto flex items-center gap-1 rounded-full bg-white/[0.04] border border-white/[0.07] p-1">
              {[
                { id: false, icon: LayoutGrid, label: "Cozy" },
                { id: true, icon: Grip, label: "Dense" },
              ].map((v) => (
                <button
                  key={v.label}
                  onClick={() => setDense(v.id)}
                  title={v.label}
                  className={`h-7 px-2.5 flex items-center gap-1.5 rounded-full text-[11px] font-medium transition-all duration-200 ${
                    dense === v.id
                      ? "bg-[#EDE9E1] text-[#1C1C1A]"
                      : "text-[#78716C] hover:text-[#A8A29E]"
                  }`}
                >
                  <v.icon size={13} strokeWidth={1.8} />
                  <span className="hidden lg:inline">{v.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden pb-3 space-y-2.5">
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full px-3.5 h-8">
              <Search size={13} className="text-[#78716C]" strokeWidth={1.8} />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIdx(null);
                }}
                placeholder="Search frames…"
                className="flex-1 bg-transparent outline-none text-[12.5px] text-[#EDE9E1] placeholder:text-[#5B5650]"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-[#78716C]">
                  <X size={13} />
                </button>
              )}
            </div>
            <div className="sm:hidden flex items-center gap-1.5 overflow-x-auto">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setFilter(f.id);
                    setIdx(null);
                  }}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-[11.5px] font-medium transition ${
                    filter === f.id
                      ? "bg-[#EDE9E1] text-[#1C1C1A]"
                      : "bg-white/[0.04] border border-white/[0.07] text-[#A8A29E]"
                  }`}
                >
                  {f.label} · {f.count}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="flex-1 min-h-0 overflow-y-auto">
          {list.length === 0 ? (
            <div className="h-full min-h-[320px] grid place-items-center p-8">
              <div className="flex flex-col items-center text-center max-w-[240px]">
                <div className="w-14 h-14 rounded-[20px] bg-[#D6C5A8]/10 border border-[#D6C5A8]/20 grid place-items-center text-[#D6C5A8]">
                  <ImagePlus size={22} strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-[13.5px] font-medium text-[#EDE9E1]">
                  No frames here yet
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#78716C]">
                  Try a softer search, or wander back to everything.
                </p>
                <button
                  onClick={() => {
                    setFilter("all");
                    setQuery("");
                  }}
                  className="mt-4 px-4 py-1.5 rounded-full bg-[#EDE9E1] text-[#1C1C1A] text-[12px] font-medium hover:bg-white transition"
                >
                  Show everything
                </button>
              </div>
            </div>
          ) : (
            <>
              <div
                className={`p-4 sm:p-5 grid gap-3.5 ${
                  dense
                    ? "grid-cols-3 sm:grid-cols-4 xl:grid-cols-5"
                    : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                <AnimatePresence mode="popLayout">
                  {list.map((src, i) => (
                    <motion.button
                      key={src}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{
                        duration: 0.35,
                        delay: Math.min(i * 0.02, 0.18),
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => openAt(i)}
                      className={`group relative overflow-hidden text-left transition-all duration-300 hover:-translate-y-[2px] ${
                        dense ? "aspect-square rounded-2xl" : "aspect-[4/3] rounded-[20px]"
                      } bg-[#1F1F1C] border border-white/[0.06] hover:border-[#D6C5A8]/25 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] ${
                        active === src ? "border-[#D6C5A8]/40 ring-1 ring-[#D6C5A8]/30" : ""
                      }`}
                    >
                      <img
                        src={src}
                        alt={prettyName(src)}
                        loading="lazy"
                        className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 group-hover:scale-[1.04] transition-all duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161614]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-x-0 bottom-0 p-2.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-[11px] font-medium text-[#EDE9E1] truncate leading-tight">
                          {prettyName(src)}
                        </p>
                        <p className="text-[10px] text-white/60 capitalize mt-0.5">
                          {categoryOf(src)} · {i + 1} of {list.length}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
              <p className="pb-6 pt-1 text-center text-[11px] text-[#5B5650]">
                — {list.length} {list.length === 1 ? "frame" : "frames"} · click any frame to linger —
              </p>
            </>
          )}
        </div>
      </div>

      {/* ——— Calm lightbox ——— */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-10 flex flex-col bg-[#101010]/85 backdrop-blur-xl"
            onClick={close}
          >
            <div
              className="h-[52px] shrink-0 flex items-center gap-3 px-4 border-b border-white/[0.07] bg-[#1A1A18]/70"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium tracking-tight text-[#EDE9E1] truncate leading-tight">
                  {prettyName(active)}
                </p>
                <p className="text-[11px] text-[#78716C] mt-0.5 capitalize">
                  {categoryOf(active)} · {idx + 1} of {list.length}
                </p>
              </div>
              <span className="hidden sm:inline-flex text-[11px] tabular-nums px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-[#A8A29E]">
                {idx + 1} / {list.length}
              </span>
              <button
                onClick={close}
                className="w-8 h-8 grid place-items-center rounded-full bg-white/[0.06] border border-white/[0.08] text-[#A8A29E] hover:text-white hover:bg-white/[0.12] transition"
                aria-label="Close viewer"
              >
                <X size={15} strokeWidth={1.8} />
              </button>
            </div>

            <div
              className="flex-1 min-h-0 relative flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => step(-1)}
                aria-label="Previous"
                className="absolute left-3 sm:left-5 z-10 w-10 h-10 grid place-items-center rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/80 hover:bg-[#EDE9E1] hover:text-[#1C1C1A] hover:border-transparent transition-all duration-200"
              >
                <ChevronLeft size={18} strokeWidth={1.8} />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={active}
                  alt={prettyName(active)}
                  initial={{ opacity: 0, scale: 0.97, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-full max-h-full object-contain rounded-[20px] border border-[#D6C5A8]/15 shadow-[0_24px_64px_rgba(0,0,0,0.55)] bg-[#1A1A18]"
                />
              </AnimatePresence>

              <button
                onClick={() => step(1)}
                aria-label="Next"
                className="absolute right-3 sm:right-5 z-10 w-10 h-10 grid place-items-center rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/80 hover:bg-[#EDE9E1] hover:text-[#1C1C1A] hover:border-transparent transition-all duration-200"
              >
                <ChevronRight size={18} strokeWidth={1.8} />
              </button>
            </div>

            <div
              className="shrink-0 border-t border-white/[0.07] bg-[#1A1A18]/70 px-4 py-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 overflow-x-auto justify-start sm:justify-center">
                {list.map((p, i) => (
                  <button
                    key={p}
                    onClick={() => setIdx(i)}
                    title={prettyName(p)}
                    className={`w-12 h-12 rounded-xl overflow-hidden shrink-0 border transition-all duration-200 ${
                      i === idx
                        ? "border-[#D6C5A8]/60 ring-1 ring-[#D6C5A8]/40 opacity-100"
                        : "border-white/[0.08] opacity-50 hover:opacity-100 hover:border-white/20"
                    }`}
                  >
                    <img src={p} alt="" className="w-full h-full object-cover saturate-[0.85]" loading="lazy" />
                  </button>
                ))}
              </div>
              <p className="mt-2 text-center text-[10.5px] text-[#5B5650] hidden sm:block">
                Wander with ← → · rest with esc
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
