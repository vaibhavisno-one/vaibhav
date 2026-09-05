"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Ghost,
  Search,
  X,
  Play,
  ArrowLeft,
  RotateCcw,
  Gamepad2,
  Leaf,
  Maximize2,
} from "lucide-react";
import { GAMES } from "@/lib/os/games";

export default function GamesApp() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState(null);
  const [round, setRound] = useState(0);
  const [loadingGame, setLoadingGame] = useState(false);

  const genres = useMemo(() => {
    const m = {};
    GAMES.forEach((g) => {
      const key = (g.genre || "Other").split("·")[0].trim();
      m[key] = (m[key] || 0) + 1;
    });
    return Object.entries(m).map(([name, count]) => ({ name, count }));
  }, []);

  const list = useMemo(() => {
    let arr = [...GAMES];
    if (filter !== "all")
      arr = arr.filter((g) => (g.genre || "").toLowerCase().includes(filter.toLowerCase()));
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(
        (g) =>
          g.title?.toLowerCase().includes(q) ||
          g.tagline?.toLowerCase().includes(q) ||
          g.genre?.toLowerCase().includes(q)
      );
    }
    return arr;
  }, [filter, query]);

  const active = GAMES.find((g) => g.slug === activeSlug) || null;

  const play = (slug) => {
    setActiveSlug(slug);
    setLoadingGame(true);
  };
  const quit = () => {
    setActiveSlug(null);
    setLoadingGame(false);
  };
  const restart = () => {
    setLoadingGame(true);
    setRound((r) => r + 1);
  };

  const filters = [
    { id: "all", label: "All games", icon: Layers, count: GAMES.length },
    ...genres.map((g) => ({ id: g.name, label: g.name, icon: Ghost, count: g.count })),
  ];

  /* ————— Player ————— */
  if (active) {
    return (
      <div className="h-full flex flex-col bg-[#0A0A0C] text-[#EDE9E1] overflow-hidden select-text">
        <div className="shrink-0 h-[52px] flex items-center gap-2.5 px-3 sm:px-4 border-b border-white/[0.07] bg-[#161614]">
          <button
            onClick={quit}
            className="w-8 h-8 grid place-items-center rounded-full bg-white/[0.05] border border-white/[0.07] text-[#A8A29E] hover:text-white hover:bg-white/[0.1] transition"
            aria-label="Back to library"
            title="Back to library"
          >
            <ArrowLeft size={14} strokeWidth={1.8} />
          </button>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium tracking-tight text-[#EDE9E1] truncate leading-tight">
              {active.title}
            </p>
            <p className="text-[11px] text-[#78716C] truncate">{active.controls}</p>
          </div>
          <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-[#78716C] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07]">
            <Maximize2 size={11} /> Maximize window for full dread
          </span>
          <button
            onClick={restart}
            className="h-8 px-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#EDE9E1] text-[#1C1C1A] text-[12px] font-medium hover:bg-white transition"
          >
            <RotateCcw size={12} strokeWidth={2} /> Restart
          </button>
        </div>
        <div className="flex-1 min-h-0 relative bg-black">
          <AnimatePresence>
            {loadingGame && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 grid place-items-center bg-[#0A0A0C]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/25 grid place-items-center text-[#C9A84C] animate-pulse">
                    <Ghost size={22} strokeWidth={1.5} />
                  </div>
                  <p className="mt-3 text-[13px] font-medium text-[#EDE9E1]">Entering the house…</p>
                  <p className="mt-1 text-[11.5px] text-[#78716C]">Click inside, then headphones on.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <iframe
            key={`${active.slug}-${round}`}
            src={active.src}
            title={active.title}
            onLoad={() => setLoadingGame(false)}
            allow="pointer-lock; fullscreen; autoplay; gamepad; xr-spatial-tracking"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0 bg-black"
          />
        </div>
      </div>
    );
  }

  /* ————— Library ————— */
  return (
    <div className="h-full flex bg-[#161614] text-[#EDE9E1] overflow-hidden select-text">
      {/* Sidebar */}
      <aside className="w-[190px] shrink-0 hidden sm:flex flex-col bg-[#1A1A18]/80 border-r border-white/[0.06]">
        <div className="px-4 pt-5 pb-3">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#78716C]">
            Arcade
          </p>
          <h2 className="mt-1 text-[15px] font-medium tracking-tight text-[#EDE9E1]">
            Games
          </h2>
          <p className="mt-1 text-[11px] leading-relaxed text-[#78716C]">
            Small worlds,
            <br />
            ready to play.
          </p>
        </div>

        <div className="px-3 space-y-1">
          {filters.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
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
              <span className="text-[11px] font-medium tracking-wide">Press start</span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-[#78716C]">
              {list.length} of {GAMES.length} worlds
              <br />
              waiting — have fun.
            </p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="shrink-0 border-b border-white/[0.06] bg-[#161614]/90 backdrop-blur px-4 sm:px-5">
          <div className="h-[60px] flex items-center gap-3">
            <div className="min-w-0">
              <h1 className="text-[14px] font-medium tracking-tight text-[#EDE9E1] leading-none">
                Games
              </h1>
              <p className="mt-1 text-[11px] text-[#78716C] leading-none hidden sm:block">
                A quiet little arcade
              </p>
            </div>
            <div className="flex-1 hidden md:flex justify-center px-4">
              <div className="flex items-center gap-2 w-full max-w-[300px] h-8 bg-white/[0.04] border border-white/[0.07] rounded-full px-3.5 transition-all duration-200 focus-within:bg-white/[0.06] focus-within:border-[#D6C5A8]/30 focus-within:shadow-[0_0_0_3px_rgba(214,197,168,0.08)]">
                <Search size={13} className="text-[#78716C] shrink-0" strokeWidth={1.8} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search games…"
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
            <div className="ml-auto inline-flex items-center gap-1.5 text-[11px] text-[#78716C] px-2.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07]">
              <Gamepad2 size={12} /> {GAMES.length} {GAMES.length === 1 ? "title" : "titles"}
            </div>
          </div>
          <div className="md:hidden pb-3 space-y-2.5">
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full px-3.5 h-8">
              <Search size={13} className="text-[#78716C]" strokeWidth={1.8} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games…"
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
                  onClick={() => setFilter(f.id)}
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
                  <Gamepad2 size={22} strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-[13.5px] font-medium text-[#EDE9E1]">No games found</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#78716C]">
                  Try a softer search.
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
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <AnimatePresence mode="popLayout">
                  {list.map((g, i) => (
                    <motion.article
                      key={g.slug}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{
                        duration: 0.35,
                        delay: Math.min(i * 0.05, 0.2),
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => play(g.slug)}
                      className="group flex flex-col rounded-[20px] overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-[2px] bg-[#1F1F1C] border-white/[0.06] hover:border-[#D6C5A8]/25 hover:bg-[#232320] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                    >
                      <div className="aspect-[16/9] relative overflow-hidden bg-[#0A0A0C]">
                        <img
                          src={g.cover}
                          alt={g.title}
                          loading="lazy"
                          className="w-full h-full object-cover saturate-[0.9] group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#161614]/85 via-[#161614]/10 to-transparent" />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="inline-flex items-center gap-1.5 pl-2 pr-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide border backdrop-blur-md bg-black/30 border-[#C9A84C]/25 text-[#E8DDC8]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                            {g.genre}
                          </span>
                        </div>
                        <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EDE9E1] text-[#1C1C1A] text-[13px] font-medium shadow-[0_8px_28px_rgba(0,0,0,0.5)]">
                            <Play size={14} strokeWidth={2.2} /> Play now
                          </span>
                        </div>
                      </div>
                      <div className="p-3.5 flex flex-col flex-1">
                        <h3 className="text-[13.5px] font-medium tracking-tight text-[#EDE9E1] leading-tight">
                          {g.title}
                        </h3>
                        <p className="mt-1 text-[12px] leading-relaxed text-[#8F8A83] line-clamp-2 font-light">
                          {g.tagline}
                        </p>
                        <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-3">
                          <span className="inline-flex items-center gap-1 text-[11.5px] font-medium text-[#D6C5A8]">
                            <Play size={11} strokeWidth={2.2} /> Play
                          </span>
                          <span className="text-[11px] text-[#5B5650] truncate">{g.controls}</span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
              <p className="pb-6 pt-1 text-center text-[11px] text-[#5B5650]">
                — click a world to step inside · best with sound on —
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
