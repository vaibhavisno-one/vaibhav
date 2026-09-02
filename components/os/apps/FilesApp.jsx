"use client";
import { useState, useEffect } from "react";
import { Folder, Box, Cpu, ExternalLink, Github } from "lucide-react";

export default function FilesApp({ onOpenBrowser }) {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);

  useEffect(() => { fetch("/api/projects").then((r) => r.json()).then((d) => setProjects(Array.isArray(d) ? d : [])).catch(() => {}); }, []);

  const list = filter === "all" ? projects : projects.filter((p) => (p.status || "").toLowerCase().includes(filter));

  return (
    <div className="h-full flex bg-[#f6f6f6] dark:bg-[#2a2a2a] text-zinc-800 dark:text-zinc-100 select-text">
      <aside className="w-[200px] shrink-0 bg-[#ebebeb] dark:bg-[#212121] border-r border-black/10 dark:border-white/10 p-3 flex flex-col gap-1 text-[13px]">
        <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider px-2 mt-1">Places</div>
        {[
          { id: "all", label: "All Projects", icon: Folder },
          { id: "completed", label: "Completed", icon: Box },
          { id: "production", label: "In Production", icon: Cpu },
        ].map((i) => (
          <button key={i.id} onClick={() => setFilter(i.id)} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-left ${filter === i.id ? "bg-[#4a90e2] text-white" : "hover:bg-black/5 dark:hover:bg-white/10"}`}>
            <i.icon size={14} /> {i.label}
          </button>
        ))}
        <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider px-2 mt-4">Views</div>
        <button onClick={() => setView("grid")} className={`px-2 py-1.5 rounded-md text-left ${view === "grid" ? "bg-zinc-800 text-white dark:bg-white dark:text-zinc-900" : "hover:bg-black/5"}`}>Grid</button>
        <button onClick={() => setView("list")} className={`px-2 py-1.5 rounded-md text-left ${view === "list" ? "bg-zinc-800 text-white dark:bg-white dark:text-zinc-900" : "hover:bg-black/5"}`}>List</button>
        <div className="mt-auto text-[11px] text-zinc-500 px-2">{projects.length} projects</div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#242424]">
        <div className="h-10 flex items-center gap-2 px-3 border-b border-black/10 dark:border-white/10 bg-[#f6f6f6] dark:bg-[#2a2a2a]">
          <span className="text-sm font-medium">Home / Projects</span>
          <span className="ml-auto text-xs text-zinc-500">{list.length} items</span>
        </div>

        <div className={view === "grid" ? "p-4 grid grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto flex-1" : "flex-1 overflow-auto divide-y divide-black/5 dark:divide-white/5"}>
          {list.map((p) => view === "grid" ? (
            <div key={p.slug} onDoubleClick={() => onOpenBrowser?.(p.website || p.github)} onClick={() => setSelected(p.slug)} className={`group border rounded-xl overflow-hidden cursor-pointer bg-white dark:bg-zinc-800 ${selected === p.slug ? "ring-2 ring-[#4a90e2]" : "border-black/10 dark:border-white/10 hover:shadow-md"} transition-all`}>
              <div className="aspect-[16/9] bg-zinc-100 dark:bg-zinc-700 overflow-hidden relative">
                <img src={p.image || "/projects/kassandra.png"} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                <div className="absolute top-2 left-2 text-[10px] font-bold tracking-wider px-2 py-1 rounded-full bg-black/70 text-white">{p.status || "Completed"}</div>
              </div>
              <div className="p-3">
                <div className="font-semibold text-[13px] leading-tight truncate">{p.title}</div>
                <div className="text-[12px] text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-snug mt-1">{p.description}</div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {(p.technologies || []).slice(0, 3).map((t) => <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-700 border border-black/5">{t}</span>)}
                </div>
                <div className="flex gap-2 mt-3">
                  {p.website && <button onClick={() => onOpenBrowser?.(p.website)} className="text-xs px-3 py-1 rounded-full bg-[#4a90e2] text-white flex items-center gap-1"><ExternalLink size={10} /> Live</button>}
                  {p.github && <button onClick={() => onOpenBrowser?.(p.github)} className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 flex items-center gap-1"><Github size={10} /> Code</button>}
                </div>
              </div>
            </div>
          ) : (
            <div key={p.slug} onClick={() => setSelected(p.slug)} className={`flex items-center gap-3 px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer ${selected === p.slug ? "bg-[#4a90e2]/10" : ""}`}>
              <img src={p.image} alt="" className="w-10 h-10 rounded-md object-cover border border-black/10" />
              <div className="min-w-0 flex-1">
                <div className="font-medium text-sm truncate">{p.title}</div>
                <div className="text-xs text-zinc-500 truncate">{p.description}</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700">{p.status}</span>
              <button onClick={() => onOpenBrowser?.(p.website || p.github)} className="p-1.5 rounded-md hover:bg-black/10"><ExternalLink size={14} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
