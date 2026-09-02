"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { APP_DEFS } from "@/lib/os/appDefs";
import AppIcon from "./AppIcon";
import { getApp } from "@/lib/os/appDefs";

export default function AppLauncher({ windows, onFocus, onClose, onOpenApp, query, setQuery, onExit }) {
  const [page, setPage] = useState(0);
  const filteredApps = APP_DEFS.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()) || a.desc.toLowerCase().includes(query.toLowerCase()) || (a.alias && a.alias.toLowerCase().includes(query.toLowerCase())));
  const visibleWindows = windows.filter((w) => !w.isMinimized);
  const isMissionControl = visibleWindows.length > 0 && !query;

  const pageSize = 20;
  const pages = Math.ceil(filteredApps.length / pageSize);
  const pagedApps = filteredApps.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
      transition={{ type: "spring", damping: 28, stiffness: 300 }}
      className="absolute inset-0 bg-[#0a0a0f]/75 backdrop-blur-[30px] z-30 flex flex-col pt-6"
      style={{ WebkitBackdropFilter: "blur(30px)" }}
      onClick={onExit}
    >
      <button onClick={onExit} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/70">
        <X size={16} />
      </button>
      <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 }} className="h-10 flex items-center justify-center px-4" onClick={(e)=> e.stopPropagation()}>
        <div className="flex items-center gap-2 w-full max-w-[360px] bg-white/10 backdrop-blur rounded-full px-4 py-2 border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <Search size={14} className="text-white/40" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={(e)=> e.stopPropagation()}
            placeholder="Search Vaibhav OS"
            className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-white/40 text-white text-center"
          />
          {query && (
            <button onClick={(e)=>{e.stopPropagation(); setQuery("");}} className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
              <X size={10} className="text-white" />
            </button>
          )}
        </div>
      </motion.div>

      <div className="flex-1 overflow-auto" onClick={(e)=> e.stopPropagation()}>
        <AnimatePresence>
          {isMissionControl && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="max-w-6xl mx-auto px-8 pt-6" onClick={(e)=> e.stopPropagation()}>
              <div className="text-center mb-4">
                <h2 className="text-xs font-semibold tracking-widest text-white/50 uppercase">Vaibhav OS • {visibleWindows.length} open windows • click to focus</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {visibleWindows.map((w, i) => (
                  <motion.button
                    key={w.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.06, type: "spring", damping: 20, stiffness: 260 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e)=>{e.stopPropagation(); onFocus(w.id); onExit(); }}
                    className="relative bg-[#1a1a1e] rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] h-[200px] group text-left"
                  >
                    <div className="h-7 bg-[#1c1c1f] flex items-center px-3 gap-2 border-b border-white/5">
                      <span className="w-6 h-6 rounded-md bg-[#2563eb] text-white flex items-center justify-center text-[9px] font-black">V</span>
                      <span className="text-[11px] font-medium text-white/70 truncate">{w.title}</span>
                    </div>
                     <div className="p-3">
                      <div className="h-24 rounded-xl bg-[#0f0f12] border border-white/5 flex items-center justify-center">
                        <span className="text-xs text-white/30">{getApp(w.appId)?.name}</span>
                      </div>
                      <div className="mt-2 text-xs font-medium text-white truncate">{w.title}</div>
                      <div className="text-[11px] text-white/40">{getApp(w.appId)?.desc}</div>
                    </div>
                    <motion.span initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center" onClick={(e) => { e.stopPropagation(); onClose(w.id); }}>
                      <X size={12} />
                    </motion.span>
                  </motion.button>
                ))}
              </div>
              <div className="h-px bg-white/5 my-6" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-5xl mx-auto px-8 pb-10" onClick={(e)=> e.stopPropagation()}>
          <motion.div layout className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6 md:gap-8">
            <AnimatePresence>
              {pagedApps.map((a, i) => (
                <motion.button
                  key={a.id}
                  layout
                  initial={{ opacity: 0, scale: 0.6, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.02, type: "spring", damping: 18, stiffness: 320 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => { onOpenApp(a.id); onExit(); }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <motion.div className="w-[68px] h-[68px] md:w-[72px] md:h-[72px] rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.45)] overflow-hidden bg-white border border-white/10">
                    <AppIcon appId={a.id} size={68} />
                  </motion.div>
                  <span className="text-[11px] leading-tight text-white text-center font-medium drop-shadow px-1 py-0.5 rounded-md group-hover:bg-white/10">{a.name}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: Math.max(1, pages) }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} className={`transition-all ${i === page ? "w-6 h-1.5 rounded-full bg-white shadow" : "w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/60"}`} />
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <span className="text-[11px] text-white/30">Press ESC to exit • Click an app to open</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
