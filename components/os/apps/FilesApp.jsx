"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  CircleCheck,
  Globe,
  Search,
  LayoutGrid,
  Rows3,
  X,
  ExternalLink,
  Github,
  ArrowUpRight,
  Leaf,
  Clock,
  User,
  Users,
  FolderOpen,
} from "lucide-react";

const WARM = {
  bg: "bg-[#161614]",
  panel: "bg-[#1B1B19]",
  card: "bg-[#1F1F1C]",
  ink: "text-[#EDE9E1]",
  sub: "text-[#A8A29E]",
  faint: "text-[#78716C]",
};

function statusMeta(status = "") {
  const s = status.toLowerCase();
  if (s.includes("production") || s.includes("live"))
    return {
      label: status,
      dot: "bg-emerald-300",
      pill: "bg-emerald-200/10 border-emerald-200/20 text-emerald-100/90",
    };
  if (s.includes("complet"))
    return {
      label: status,
      dot: "bg-[#D6C5A8]",
      pill: "bg-[#D6C5A8]/10 border-[#D6C5A8]/20 text-[#E8DDC8]",
    };
  return {
    label: status || "Notes",
    dot: "bg-stone-400",
    pill: "bg-white/[0.06] border-white/10 text-stone-300",
  };
}

export default function FilesApp({ onOpenBrowser }) {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("grid");
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => setProjects(Array.isArray(d) ? d : []))
      .catch(() => {});
  }, []);

  const counts = useMemo(() => {
    const prod = projects.filter((p) =>
      (p.status || "").toLowerCase().includes("production")
    ).length;
    const done = projects.filter((p) =>
      (p.status || "").toLowerCase().includes("complet")
    ).length;
    return { all: projects.length, production: prod, completed: done };
  }, [projects]);

  const list = useMemo(() => {
    let arr = [...projects];
    if (filter !== "all")
      arr = arr.filter((p) =>
        (p.status || "").toLowerCase().includes(filter)
      );
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          (p.technologies || []).join(" ").toLowerCase().includes(q)
      );
    }
    return arr;
  }, [projects, filter, query]);

  const selected =
    projects.find((p) => p.slug === selectedSlug) || null;

  const openUrl = (url) => {
    if (url) onOpenBrowser?.(url);
  };

  const filters = [
    { id: "all", label: "All work", icon: Layers, count: counts.all },
    { id: "production", label: "Live", icon: Globe, count: counts.production },
    { id: "completed", label: "Completed", icon: CircleCheck, count: counts.completed },
  ];

  return (
    <div className={`h-full flex ${WARM.bg} ${WARM.ink} overflow-hidden select-text`}>
      {/* ——— Sidebar · calm shelf ——— */}
      <aside className="w-[190px] shrink-0 hidden sm:flex flex-col bg-[#1A1A18]/80 border-r border-white/[0.06]">
        <div className="px-4 pt-5 pb-3">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#78716C]">
            Collection
          </p>
          <h2 className="mt-1 text-[15px] font-medium tracking-tight text-[#EDE9E1]">
            Shelf
          </h2>
          <p className="mt-1 text-[11px] leading-relaxed text-[#78716C]">
            Things built slowly,
            <br />
            with care.
          </p>
        </div>

        <div className="px-3 space-y-1">
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`w-full group flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all duration-200 ${
                  active
                    ? "bg-[#EDE9E1] text-[#1C1C1A] shadow-[0_4px_16px_rgba(237,233,225,0.12)]"
                    : "text-[#A8A29E] hover:text-[#EDE9E1] hover:bg-white/[0.05]"
                }`}
              >
                <span
                  className={`w-7 h-7 grid place-items-center rounded-lg shrink-0 transition ${
                    active
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
                    active
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
              <span className="text-[11px] font-medium tracking-wide">
                Take your time
              </span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-[#78716C]">
              {list.length} of {projects.length} pieces
              <br />
              on display — no rush.
            </p>
          </div>
        </div>
      </aside>

      {/* ——— Main ——— */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Header */}
        <header className="shrink-0 border-b border-white/[0.06] bg-[#161614]/90 backdrop-blur px-4 sm:px-5">
          <div className="h-[60px] flex items-center gap-3">
            <div className="min-w-0">
              <h1 className="text-[14px] font-medium tracking-tight text-[#EDE9E1] leading-none">
                Projects
              </h1>
              <p className="mt-1 text-[11px] text-[#78716C] leading-none hidden sm:block">
                A quiet shelf of work
              </p>
            </div>

            <div className="flex-1 hidden md:flex justify-center px-4">
              <div className="flex items-center gap-2 w-full max-w-[300px] h-8 bg-white/[0.04] border border-white/[0.07] rounded-full px-3.5 transition-all duration-200 focus-within:bg-white/[0.06] focus-within:border-[#D6C5A8]/30 focus-within:shadow-[0_0_0_3px_rgba(214,197,168,0.08)]">
                <Search size={13} className="text-[#78716C] shrink-0" strokeWidth={1.8} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, feeling, or stack…"
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
                { id: "grid", icon: LayoutGrid, label: "Grid" },
                { id: "list", icon: Rows3, label: "List" },
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setView(v.id)}
                  title={v.label}
                  className={`h-7 px-2.5 flex items-center gap-1.5 rounded-full text-[11px] font-medium transition-all duration-200 ${
                    view === v.id
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

          {/* Mobile search + filters */}
          <div className="md:hidden pb-3 space-y-2.5">
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full px-3.5 h-8">
              <Search size={13} className="text-[#78716C]" strokeWidth={1.8} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
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

        {/* Content + detail */}
        <div className="flex-1 min-h-0 flex">
          <div className="flex-1 min-w-0 overflow-y-auto">
            {list.length === 0 ? (
              <div className="h-full min-h-[320px] grid place-items-center p-8">
                <div className="flex flex-col items-center text-center max-w-[240px]">
                  <div className="w-14 h-14 rounded-[20px] bg-[#D6C5A8]/10 border border-[#D6C5A8]/20 grid place-items-center text-[#D6C5A8]">
                    <FolderOpen size={22} strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-[13.5px] font-medium text-[#EDE9E1]">
                    Nothing on this shelf
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
            ) : view === "grid" ? (
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5">
                <AnimatePresence mode="popLayout">
                  {list.map((p, i) => {
                    const st = statusMeta(p.status);
                    const isSel = selectedSlug === p.slug;
                    return (
                      <motion.article
                        key={p.slug}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{
                          duration: 0.35,
                          delay: Math.min(i * 0.03, 0.2),
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={() =>
                          setSelectedSlug(isSel ? null : p.slug)
                        }
                        onDoubleClick={() =>
                          openUrl(p.website || p.github)
                        }
                        className={`group flex flex-col rounded-[20px] overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-[2px] ${
                          isSel
                            ? "bg-[#242421] border-[#D6C5A8]/35 ring-1 ring-[#D6C5A8]/25 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
                            : "bg-[#1F1F1C] border-white/[0.06] hover:border-[#D6C5A8]/20 hover:bg-[#232320] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                        }`}
                      >
                        <div className="aspect-[16/9] relative overflow-hidden bg-[#101010]">
                          <img
                            src={p.image || "/projects/kassandra.png"}
                            alt={p.title}
                            loading="lazy"
                            className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#161614]/85 via-[#161614]/10 to-transparent" />
                          <div className="absolute top-2.5 left-2.5">
                            <span
                              className={`inline-flex items-center gap-1.5 pl-2 pr-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide border backdrop-blur-md bg-black/30 ${st.pill}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                              {st.label}
                            </span>
                          </div>
                          <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="inline-flex items-center gap-1 text-[10.5px] font-medium text-white/90 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-2.5 py-1">
                              Preview <ArrowUpRight size={11} />
                            </span>
                          </div>
                        </div>

                        <div className="p-3.5 flex flex-col flex-1">
                          <h3 className="text-[13.5px] font-medium tracking-tight text-[#EDE9E1] leading-tight truncate">
                            {p.title}
                          </h3>
                          <p className="mt-1 text-[12px] leading-relaxed text-[#8F8A83] line-clamp-2 min-h-[32px] font-light">
                            {p.description}
                          </p>

                          {(p.technologies || []).length > 0 && (
                            <div className="mt-2.5 flex flex-wrap gap-1.5">
                              {(p.technologies || []).slice(0, 3).map((t) => (
                                <span
                                  key={t}
                                  className="text-[10.5px] px-2 py-[3px] rounded-full bg-white/[0.05] border border-white/[0.06] text-[#A8A29E] font-normal"
                                >
                                  {t}
                                </span>
                              ))}
                              {(p.technologies || []).length > 3 && (
                                <span className="text-[10.5px] px-2 py-[3px] rounded-full text-[#78716C]">
                                  +{(p.technologies || []).length - 3}
                                </span>
                              )}
                            </div>
                          )}

                          <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-3">
                            {p.website ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openUrl(p.website);
                                }}
                                className="inline-flex items-center gap-1 text-[11.5px] font-medium text-[#D6C5A8] hover:text-[#EDE9E1] transition"
                              >
                                Live <ExternalLink size={11} strokeWidth={1.8} className="opacity-70" />
                              </button>
                            ) : (
                              <span className="text-[11px] text-[#5B5650]">
                                No live link
                              </span>
                            )}
                            {p.github && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openUrl(p.github);
                                }}
                                className="inline-flex items-center gap-1 text-[11.5px] font-medium text-[#78716C] hover:text-[#EDE9E1] transition"
                              >
                                Source <Github size={11} strokeWidth={1.8} className="opacity-70" />
                              </button>
                            )}
                            <span className="ml-auto text-[10.5px] text-[#5B5650] hidden group-hover:inline transition">
                              Click for calm view
                            </span>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </div>
            ) : (
              <div className="p-3 sm:p-4 space-y-2">
                {list.map((p) => {
                  const st = statusMeta(p.status);
                  const isSel = selectedSlug === p.slug;
                  return (
                    <div
                      key={p.slug}
                      onClick={() => setSelectedSlug(isSel ? null : p.slug)}
                      onDoubleClick={() => openUrl(p.website || p.github)}
                      className={`flex items-center gap-3.5 px-3 py-2.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        isSel
                          ? "bg-[#242421] border-[#D6C5A8]/30"
                          : "bg-[#1C1C1A] border-white/[0.05] hover:bg-[#20201D] hover:border-white/[0.09]"
                      }`}
                    >
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        className="w-11 h-11 rounded-xl object-cover bg-black/30 border border-white/[0.07] shrink-0 saturate-[0.85]"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-medium tracking-tight text-[#EDE9E1] truncate">
                            {p.title}
                          </span>
                          <span className={`hidden sm:inline-flex items-center gap-1.5 px-2 py-[2px] rounded-full text-[10px] font-medium border ${st.pill}`}>
                            <span className={`w-1 h-1 rounded-full ${st.dot}`} />
                            {st.label}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-[#78716C] truncate mt-0.5 font-light">
                          {p.description}
                        </p>
                      </div>
                      <div className="hidden md:flex items-center gap-1.5 shrink-0">
                        {p.website && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openUrl(p.website);
                            }}
                            className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#EDE9E1]/10 border border-white/[0.07] text-[#EDE9E1] hover:bg-[#EDE9E1] hover:text-[#1C1C1A] transition"
                          >
                            Live
                          </button>
                        )}
                        {p.github && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openUrl(p.github);
                            }}
                            className="text-[11px] font-medium px-3 py-1.5 rounded-full text-[#A8A29E] hover:text-white hover:bg-white/[0.07] transition"
                          >
                            Code
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {list.length > 0 && (
              <p className="pb-6 pt-1 text-center text-[11px] text-[#5B5650]">
                — {list.length} {list.length === 1 ? "piece" : "pieces"} · double-click any card to wander out —
              </p>
            )}
          </div>

          {/* ——— Calm detail · slides in ——— */}
          <AnimatePresence>
            {selected && (
              <motion.aside
                key={selected.slug}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 300, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block shrink-0 border-l border-white/[0.06] bg-[#1A1A18] overflow-hidden"
              >
                <div className="w-[300px] h-full overflow-y-auto">
                  <div className="relative aspect-[16/9] bg-black/30">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full h-full object-cover saturate-[0.9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18] via-transparent to-transparent" />
                    <button
                      onClick={() => setSelectedSlug(null)}
                      className="absolute top-2.5 right-2.5 w-7 h-7 grid place-items-center rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-black/65 transition"
                      aria-label="Close preview"
                    >
                      <X size={13} />
                    </button>
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border backdrop-blur-md bg-black/35 ${statusMeta(selected.status).pill}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusMeta(selected.status).dot}`} />
                        {selected.status}
                      </span>
                      {selected.timeline && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] text-white/75 border border-white/15 bg-black/35 backdrop-blur-md">
                          <Clock size={10} /> {selected.timeline}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-[16px] font-medium tracking-tight text-[#EDE9E1] leading-tight">
                      {selected.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#A8A29E] font-light">
                      {selected.description}
                    </p>

                    <div className="mt-4 space-y-2 text-[12px]">
                      {selected.role && (
                        <div className="flex items-center gap-2.5 text-[#78716C]">
                          <span className="w-6 h-6 grid place-items-center rounded-lg bg-white/[0.05] text-[#A8A29E]">
                            <User size={12} strokeWidth={1.8} />
                          </span>
                          <span className="text-[#A8A29E]">{selected.role}</span>
                        </div>
                      )}
                      {selected.team && (
                        <div className="flex items-center gap-2.5 text-[#78716C]">
                          <span className="w-6 h-6 grid place-items-center rounded-lg bg-white/[0.05] text-[#A8A29E]">
                            <Users size={12} strokeWidth={1.8} />
                          </span>
                          <span className="text-[#A8A29E]">{selected.team}</span>
                        </div>
                      )}
                    </div>

                    {(selected.technologies || []).length > 0 && (
                      <div className="mt-4">
                        <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#5B5650]">
                          Made with
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {(selected.technologies || []).map((t) => (
                            <span
                              key={t}
                              className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-[#CFC9BF]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {selected.website && (
                        <button
                          onClick={() => openUrl(selected.website)}
                          className="h-9 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#EDE9E1] text-[#1C1C1A] text-[12px] font-medium hover:bg-white transition shadow-[0_4px_16px_rgba(237,233,225,0.12)]"
                        >
                          Visit live <ArrowUpRight size={13} />
                        </button>
                      )}
                      {selected.github && (
                        <button
                          onClick={() => openUrl(selected.github)}
                          className={`h-9 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/[0.09] bg-white/[0.04] text-[12px] font-medium text-[#EDE9E1] hover:bg-white/[0.08] transition ${!selected.website ? "col-span-2" : ""}`}
                        >
                          <Github size={13} /> Source
                        </button>
                      )}
                    </div>

                    <p className="mt-4 text-center text-[10.5px] text-[#5B5650]">
                      Breathe in — double-click a card to open in Browser.
                    </p>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile bottom preview sheet */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key={"m-" + selected.slug}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden shrink-0 border-t border-white/[0.07] bg-[#1A1A18] px-4 py-3 flex items-center gap-3"
            >
              <img
                src={selected.image}
                alt=""
                className="w-10 h-10 rounded-xl object-cover border border-white/10 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="text-[12.5px] font-medium text-[#EDE9E1] truncate">
                  {selected.title}
                </div>
                <div className="text-[11px] text-[#78716C] truncate">
                  {selected.status}
                  {selected.timeline ? ` · ${selected.timeline}` : ""}
                </div>
              </div>
              {selected.website && (
                <button
                  onClick={() => openUrl(selected.website)}
                  className="shrink-0 h-8 px-3.5 inline-flex items-center gap-1 rounded-full bg-[#EDE9E1] text-[#1C1C1A] text-[11.5px] font-medium"
                >
                  Open <ArrowUpRight size={12} />
                </button>
              )}
              <button
                onClick={() => setSelectedSlug(null)}
                className="shrink-0 w-8 h-8 grid place-items-center rounded-full bg-white/[0.06] text-[#A8A29E]"
                aria-label="Dismiss"
              >
                <X size={13} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
