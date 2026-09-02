"use client";
import { useState, useEffect } from "react";
import { Globe, ChevronLeft, ChevronRight, RotateCcw, Search, X } from "lucide-react";

export default function BrowserApp({ initialUrl }) {
  const [tabs, setTabs] = useState([{ id: 1, url: initialUrl || "https://vaibhav.is-a.dev", title: "New Tab" }]);
  const [activeId, setActiveId] = useState(1);
  const [input, setInput] = useState(initialUrl || "");
  const active = tabs.find((t) => t.id === activeId);

  const navigate = (url) => {
    let u = url.trim();
    if (!/^https?:\/\//i.test(u)) {
      if (u.includes(".") && !u.includes(" ")) u = "https://" + u;
      else u = `https://www.google.com/search?q=${encodeURIComponent(u)}+vaibhav+kumar+portfolio`;
    }
    setTabs((ts) => ts.map((t) => (t.id === activeId ? { ...t, url: u } : t)));
    setInput(u);
  };

  const addTab = () => {
    const id = Date.now();
    setTabs((ts) => [...ts, { id, url: "https://www.google.com", title: "New Tab" }]);
    setActiveId(id);
    setInput("https://www.google.com");
  };

  const closeTab = (id) => {
    const next = tabs.filter((t) => t.id !== id);
    if (next.length === 0) {
      const nid = Date.now();
      setTabs([{ id: nid, url: "https://www.google.com", title: "New Tab" }]);
      setActiveId(nid);
    } else {
      setTabs(next);
      if (id === activeId) setActiveId(next[0].id);
    }
  };

  useEffect(() => { setInput(active?.url || ""); }, [activeId]);

  return (
    <div className="h-full flex flex-col bg-[#202124] text-white">
      <div className="flex items-center gap-1 px-2 py-1.5 bg-[#35363a] border-b border-black/20">
        <div className="flex items-center gap-1 flex-1 overflow-x-auto">
          {tabs.map((t) => (
            <div
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`group flex items-center gap-2 px-3 py-1.5 rounded-t-lg text-xs shrink-0 max-w-[180px] border-t border-x cursor-pointer ${t.id === activeId ? "bg-[#202124] border-white/10 text-white" : "bg-[#2d2e30] border-transparent text-white/70 hover:text-white"}`}
            >
              <Globe size={12} className="shrink-0" />
              <span className="truncate max-w-[120px]">{t.url.replace(/^https?:\/\//, "").slice(0, 28)}</span>
              <button onClick={(e) => { e.stopPropagation(); closeTab(t.id); }} className="ml-1 p-0.5 rounded-full hover:bg-white/10 opacity-60 group-hover:opacity-100">
                <X size={12} />
              </button>
            </div>
          ))}
          <button onClick={addTab} className="ml-1 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 shrink-0"><span className="text-lg leading-none -mt-1">+</span></button>
        </div>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 bg-[#202124] border-b border-white/5">
        <button className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center"><ChevronLeft size={16} /></button>
        <button className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center opacity-40"><ChevronRight size={16} /></button>
        <button onClick={() => navigate(active.url)} className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center"><RotateCcw size={14} /></button>
        <div className="flex-1 flex items-center gap-2 bg-[#303134] rounded-full px-3 py-1.5 border border-white/5 focus-within:border-white/15">
          <Search size={14} className="text-white/50 shrink-0" />
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && navigate(input)} placeholder="Search Google or type a URL" className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/40" />
          {input && <button onClick={() => setInput("")} className="text-white/40 hover:text-white"><X size={14} /></button>}
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shrink-0 border-2 border-white/10" />
      </div>

      <div className="flex-1 bg-white relative overflow-hidden">
        {active && <iframe key={active.id + "-" + active.url} src={active.url} className="w-full h-full border-0" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" loading="lazy" />}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur pointer-events-none">
          If site refuses to embed, <button onClick={() => window.open(active.url, "_blank")} className="underline pointer-events-auto">open in new window</button>
        </div>
      </div>
    </div>
  );
}
