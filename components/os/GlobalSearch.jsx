"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Folder, FileText, Terminal, Command } from "lucide-react";
import { APP_DEFS } from "@/lib/os/appDefs";
import AppIcon from "./AppIcon";

export default function QuickSearch({ query, setQuery, onClose, onOpenApp, projects, blogs, onOpenProject, onOpenBlog }) {
  const q = query.toLowerCase().trim();
  const results = [];
  if (q) {
    APP_DEFS.forEach((a) => { 
      const alias = (a.alias || "").toLowerCase();
      if (a.name.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || alias.includes(q)) 
        results.push({ type: "app", label: a.name, sub: a.desc, id: a.id }); 
    });
    projects.forEach((p) => { if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) results.push({ type: "project", label: p.title, sub: p.description, slug: p.slug }); });
    blogs.forEach((b) => { if (b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)) results.push({ type: "blog", label: b.title, sub: b.description, slug: b.slug }); });
    if ("whoami".includes(q) || "about".includes(q)) results.push({ type: "command", label: "whoami", sub: "About Vaibhav" });
    if ("contact".includes(q) || "mail".includes(q)) results.push({ type: "command", label: "Contact", sub: "Open Mail" });
  }
  const sliced = results.slice(0, 8);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 bg-black/20 backdrop-blur-[2px] flex items-start justify-center pt-[18vh] p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, y: -12, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: -8, opacity: 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 380 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[640px] bg-white/90 dark:bg-[#2c2c2e]/90 backdrop-blur-2xl rounded-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.08)] border border-white/60 dark:border-white/10 overflow-hidden"
        style={{ WebkitBackdropFilter: "blur(24px)" }}
      >
        {/* Search field - Vaibhav OS Quick Search */}
        <div className="flex items-center gap-3 px-4 h-[56px] border-b border-black/5 dark:border-white/5">
          <Search size={20} className="text-black/25 dark:text-white/40 ml-1" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Quick Search — Vaibhav OS"
            className="flex-1 bg-transparent outline-none text-[17px] placeholder:text-black/30 dark:placeholder:text-white/40 text-black dark:text-white font-normal"
          />
          <div className="flex items-center gap-2">
            {query && (
              <button onClick={() => setQuery("")} className="w-5 h-5 rounded-full bg-black/10 dark:bg-white/15 hover:bg-black/15 dark:hover:bg-white/20 flex items-center justify-center">
                <X size={12} className="text-black/60 dark:text-white/70" />
              </button>
            )}
            <span className="hidden sm:flex items-center gap-1 text-[11px] px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/5 text-black/40 dark:text-white/40">
              <Command size={10} />K
            </span>
          </div>
        </div>

        <div className="max-h-[420px] overflow-auto">
          <AnimatePresence mode="wait">
            {!q ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-2">
                <div className="px-3 pt-2 pb-1 text-[11px] font-semibold tracking-widest text-black/40 dark:text-white/40 uppercase">Suggested</div>
                <div className="space-y-0.5">
                  {[
                    { id: "files", label: "Files", sub: "Browse projects", icon: "files" },
                    { id: "browser", label: "Browser", sub: "Open Browser", icon: "browser" },
                    { id: "terminal", label: "Terminal", sub: "Open Terminal", icon: "terminal" },
                    { id: "notes", label: "Notes", sub: "View blogs", icon: "notes" },
                  ].map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => { onOpenApp(item.id); onClose(); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#007aff] hover:text-white group text-left"
                    >
                      <AppIcon appId={item.id} size={28} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-medium group-hover:text-white text-black dark:text-white">{item.label}</div>
                        <div className="text-xs group-hover:text-white/70 text-black/50 dark:text-white/50 truncate">{item.sub}</div>
                      </div>
                      <span className="text-xs text-black/20 dark:text-white/20 group-hover:text-white/50">↩</span>
                    </motion.button>
                  ))}
                </div>
                <div className="mt-3 px-3 py-2.5 mx-2 bg-black/[0.02] dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5">
                  <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed">
                    <span className="font-medium text-black/70 dark:text-white/70">Tip:</span> Press <span className="px-1 py-0.5 rounded bg-white dark:bg-white/10 border text-[11px]">⌘ Space</span> or <span className="px-1 py-0.5 rounded bg-white dark:bg-white/10 border text-[11px]">Ctrl K</span> anytime • Type “kassandra” or “docker” to find projects & blogs
                  </p>
                </div>
              </motion.div>
            ) : sliced.length === 0 ? (
              <motion.div key="no-results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-center">
                <div className="text-sm text-black/50 dark:text-white/50">No results for “{query}”</div>
                <div className="text-xs text-black/30 dark:text-white/30 mt-1">Try searching for apps, projects or blogs</div>
              </motion.div>
            ) : (
              <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-1.5 space-y-0.5">
                <div className="px-3 py-1 text-[11px] font-semibold tracking-widest text-black/30 dark:text-white/30 uppercase">Top Hit</div>
                {sliced.map((r, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    onClick={() => {
                      if (r.type === "app") onOpenApp(r.id);
                      else if (r.type === "project") onOpenProject(r.slug);
                      else if (r.type === "blog") onOpenBlog(r.slug);
                      else if (r.type === "command" && r.label === "whoami") onOpenApp("terminal");
                      else if (r.type === "command" && r.label === "Contact") onOpenApp("contact");
                      onClose();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#007aff] hover:text-white group text-left"
                  >
                    <div className={`w-8 h-8 rounded-[7px] flex items-center justify-center shrink-0 ${r.type === "app" ? "bg-white dark:bg-white/10 border border-black/5 group-hover:bg-white/20" : r.type === "project" ? "bg-[#007aff] text-white group-hover:bg-white group-hover:text-[#007aff]" : r.type === "blog" ? "bg-[#ffcc02] text-black" : "bg-[#1c1c1e] text-[#30d158]"}`}>
                      {r.type === "app" ? <AppIcon appId={r.id} size={18} /> : r.type === "project" ? <Folder size={14} /> : r.type === "blog" ? <FileText size={14} /> : <Terminal size={14} />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] font-medium truncate group-hover:text-white text-black dark:text-white">{r.label}</div>
                      <div className="text-xs truncate group-hover:text-white/70 text-black/50 dark:text-white/50">{r.sub}</div>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-white/20 capitalize text-black/40 dark:text-white/40 group-hover:text-white/70">{r.type}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="px-3 py-2 border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-between text-[11px] text-black/40 dark:text-white/40">
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px]">↵</span> to open
            <span className="hidden sm:inline-flex items-center gap-1"><span className="w-5 h-5 rounded bg-white dark:bg-white/10 border flex items-center justify-center text-[10px]">↑</span><span className="w-5 h-5 rounded bg-white dark:bg-white/10 border flex items-center justify-center text-[10px]">↓</span> to navigate</span>
          </span>
          <span>{sliced.length > 0 ? `${sliced.length} results` : `${APP_DEFS.length} apps`}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
