"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, Box, Cpu, ExternalLink, Github, Search, LayoutGrid, List as ListIcon } from "lucide-react";

export default function FilesApp({ onOpenBrowser }) {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/projects").then((r) => r.json()).then((d) => setProjects(Array.isArray(d) ? d : [])).catch(() => {});
  }, []);

  const list = useMemo(() => {
    let arr = filter === "all" ? projects : projects.filter((p) => (p.status || "").toLowerCase().includes(filter));
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return arr;
  }, [projects, filter, query]);

  return (
    <div className="h-full flex bg-[#0f0f12] text-zinc-100 overflow-hidden select-text">
      {/* Sidebar — ultra minimal */}
      <aside className="w-[148px] shrink-0 bg-[#0f0f12] border-r border-white/[0.05] hidden sm:flex flex-col">
        <div className="flex-1 p-3">
          <div className="text-[10px] font-semibold tracking-[0.14em] text-zinc-500 uppercase px-2">Filters</div>
          <div className="mt-3 space-y-0.5">
            {[
              { id: "all", label: "All", icon: Folder },
              { id: "completed", label: "Completed", icon: Box },
              { id: "production", label: "In Production", icon: Cpu },
            ].map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setFilter(item.id)}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[12.5px] text-left transition ${active ? "bg-white text-zinc-900 font-medium" : "text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04]"}`}
                >
                  <item.icon size={13} className={active ? "text-zinc-700" : "text-zinc-600"} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="p-3 border-t border-white/[0.05]">
          <div className="text-[11px] leading-none text-zinc-500">{list.length} of {projects.length}</div>
          <div className="text-[10px] text-zinc-600 mt-1">projects</div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col bg-[#0f0f12]">
        {/* Header — minimal */}
        <div className="h-10 shrink-0 flex items-center gap-3 px-3 sm:px-4 border-b border-white/[0.05]">
          <h1 className="text-[13px] font-semibold tracking-tight text-white">Projects</h1>
          <span className="text-[11px] text-zinc-500">{list.length}</span>

          {/* Search — minimal pill */}
          <div className="flex-1 hidden sm:flex justify-center">
            <div className="flex items-center gap-2 w-full max-w-[260px] h-7 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 focus-within:bg-white/[0.06] focus-within:border-white/10 transition">
              <Search size={12} className="text-zinc-500 shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects"
                className="flex-1 bg-transparent outline-none text-[12.5px] placeholder:text-zinc-600 text-white"
              />
              {query && <button onClick={() => setQuery("")} className="text-zinc-500 hover:text-zinc-300 text-[11px] leading-none">×</button>}
            </div>
          </div>

          {/* View toggle — icons only */}
          <div className="ml-auto flex items-center rounded-full bg-white/[0.04] border border-white/[0.06] p-0.5">
            <button onClick={() => setView("grid")} className={`w-6 h-6 grid place-items-center rounded-full transition ${view === "grid" ? "bg-white text-zinc-900" : "text-zinc-500 hover:text-zinc-300"}`} title="Grid">
              <LayoutGrid size={12} />
            </button>
            <button onClick={() => setView("list")} className={`w-6 h-6 grid place-items-center rounded-full transition ${view === "list" ? "bg-white text-zinc-900" : "text-zinc-500 hover:text-zinc-300"}`} title="List">
              <ListIcon size={12} />
            </button>
          </div>
        </div>

        {/* Mobile filter + search */}
        <div className="sm:hidden flex items-center gap-2 px-3 py-2 border-b border-white/[0.05] bg-[#0f0f12]">
          <div className="flex items-center gap-1 p-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
            {[
              { id: "all", label: "All" },
              { id: "completed", label: "Done" },
              { id: "production", label: "Live" },
            ].map((f) => (
              <button key={f.id} onClick={() => setFilter(f.id)} className={`px-3 py-1 rounded-full text-[11px] font-medium transition ${filter === f.id ? "bg-white text-zinc-900" : "text-zinc-500"}`}>{f.label}</button>
            ))}
          </div>
          <div className="flex-1 flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 h-7 ml-auto">
            <Search size={12} className="text-zinc-600" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" className="flex-1 bg-transparent outline-none text-xs text-white placeholder:text-zinc-600" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {list.length === 0 ? (
            <div className="h-full grid place-items-center p-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] grid place-items-center text-zinc-600"><Search size={14}/></div>
                <div className="text-sm text-white">No projects</div>
                <div className="text-xs text-zinc-500">Try another filter</div>
                <button onClick={() => { setFilter("all"); setQuery(""); }} className="mt-2 text-xs px-3 py-1.5 rounded-full bg-white text-zinc-900 font-medium">Clear</button>
              </div>
            </div>
          ) : view === "grid" ? (
            <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <AnimatePresence mode="popLayout">
                {list.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.015 }}
                    onClick={() => setSelected(p.slug)}
                    onDoubleClick={() => onOpenBrowser?.(p.website || p.github)}
                    className={`group flex flex-col rounded-xl overflow-hidden border cursor-pointer ${selected === p.slug ? "bg-white/[0.06] border-white/10" : "bg-[#151518] border-white/[0.05] hover:border-white/10 hover:bg-[#1a1a1e]" } transition`}
                  >
                    <div className="aspect-[16/9.5] relative overflow-hidden bg-[#0a0a0c]">
                      <img src={p.image || "/projects/kassandra.png"} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                      <div className="absolute top-2 left-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                        <span className="text-[10px] font-medium tracking-wide text-white/90">{p.status || "Completed"}</span>
                      </div>
                    </div>
                    <div className="p-3 flex flex-col gap-1.5 flex-1">
                      <div className="text-[13px] font-medium leading-none text-white truncate">{p.title}</div>
                      <div className="text-[11.5px] leading-snug text-zinc-500 line-clamp-1">{p.description}</div>
                      <div className="mt-2 flex items-center gap-1.5">
                        {p.website && (
                          <button onClick={(e) => { e.stopPropagation(); onOpenBrowser?.(p.website); }} className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-300 hover:text-white transition">
                            Live <ExternalLink size={10} className="opacity-60" />
                          </button>
                        )}
                        {p.website && p.github && <span className="text-zinc-700 text-[11px]">·</span>}
                        {p.github && (
                          <button onClick={(e) => { e.stopPropagation(); onOpenBrowser?.(p.github); }} className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 hover:text-zinc-200 transition">
                            Code <Github size={10} className="opacity-60" />
                          </button>
                        )}
                        <span className="ml-auto text-[10px] text-zinc-600 hidden group-hover:inline">↗ open</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="p-2 sm:p-3">
              <div className="rounded-xl overflow-hidden border border-white/[0.05] divide-y divide-white/[0.05] bg-[#151518]">
                {list.map((p) => (
                  <div
                    key={p.slug}
                    onClick={() => setSelected(p.slug)}
                    onDoubleClick={() => onOpenBrowser?.(p.website || p.github)}
                    className={`flex items-center gap-3 px-3 py-2.5 hover:bg-white/[0.03] cursor-pointer transition ${selected === p.slug ? "bg-white/[0.04]" : ""}`}
                  >
                    <img src={p.image} alt="" className="w-8 h-8 rounded-md object-cover bg-[#0a0a0c] border border-white/5 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] leading-none font-medium text-white truncate">{p.title}</div>
                      <div className="text-[11px] text-zinc-500 truncate mt-1">{p.description}</div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <span className="text-[10px] text-zinc-500">{p.status}</span>
                      <span className="w-px h-3 bg-white/10" />
                      {p.website && <button onClick={(e) => { e.stopPropagation(); onOpenBrowser?.(p.website); }} className="text-[11px] text-zinc-400 hover:text-white">Live</button>}
                      {p.github && <button onClick={(e) => { e.stopPropagation(); onOpenBrowser?.(p.github); }} className="text-[11px] text-zinc-500 hover:text-zinc-300">Code</button>}
                    </div>
                    <ExternalLink size={12} className="text-zinc-600 shrink-0 hidden sm:block" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
