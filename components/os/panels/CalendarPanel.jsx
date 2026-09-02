"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function NotificationsPanel({ onClose, onOpenApp, showToast }) {
  const [now, setNow] = useState(new Date());
  const [track, setTrack] = useState(null);
  const [selected, setSelected] = useState(new Date().getDate());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    fetch("/api/spotify").then((r) => r.json()).then((d) => setTrack(d)).catch(() => {});
  }, []);

  const month = now.getMonth();
  const year = now.getFullYear();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
  const monthName = now.toLocaleString("en-US", { month: "long" });
  const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  const dateStr = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  const cells = [];
  for (let i = 0; i < 35; i++) {
    let d, isCurrent = false, isToday = false;
    if (i < firstDay) d = daysInPrev - firstDay + 1 + i;
    else if (i < firstDay + daysInMonth) { d = i - firstDay + 1; isCurrent = true; isToday = d === now.getDate(); }
    else d = i - firstDay - daysInMonth + 1;
    cells.push({ d, isCurrent, isToday });
  }

  return (
    <motion.div
      initial={{ x: 420, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 420, opacity: 0 }}
      transition={{ type: "spring", damping: 28, stiffness: 320 }}
      className="absolute top-7 right-2 w-[360px] max-h-[calc(100vh-48px)] bg-[#1c1c1f]/90 backdrop-blur-2xl rounded-[18px] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] border border-white/10 overflow-hidden flex flex-col z-40"
      style={{ WebkitBackdropFilter: "blur(24px)" }}
    >
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-semibold tracking-widest text-white/50 uppercase">Notifications</div>
          <button onClick={()=> showToast?.(`Today is ${dateStr}`)} className="text-[13px] font-medium text-white hover:underline text-left">{dateStr}</button>
        </div>
        <button onClick={onClose} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center">
          <X size={12} className="text-white/70" />
        </button>
      </div>

      <div className="flex-1 overflow-auto px-3 pb-3 space-y-3 scrollbar-thin">
        <motion.button onClick={()=> showToast?.(`It's ${timeStr} • Vaibhav OS`)} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }} className="w-full bg-gradient-to-br from-[#007aff] to-[#5ac8fa] rounded-2xl p-4 text-white shadow-lg relative overflow-hidden text-left">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/15 rounded-full blur-2xl" />
          <div className="relative z-10">
            <div className="text-3xl font-extralight tracking-tight">{timeStr}</div>
            <div className="text-xs font-medium opacity-90 mt-1">{dateStr} • Click to copy time</div>
          </div>
        </motion.button>

        {track && (
          <motion.button onClick={()=> { onOpenApp?.("music"); showToast?.("Opening Music"); }} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 }} className="w-full bg-[#2c2c2e] rounded-2xl p-3 flex items-center gap-3 shadow-sm border border-white/5 text-left">
            <img src={track.albumImageUrl || "https://via.placeholder.com/40"} alt="" className="w-11 h-11 rounded-lg object-cover shadow-sm" />
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold truncate text-white">{track.title || "Not Playing"}</div>
              <div className="text-xs text-white/60 truncate">{track.artist || "Spotify"} • Tap to open Music</div>
            </div>
            <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
              <span className="text-[10px]">▶</span>
            </div>
          </motion.button>
        )}

        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-[#2c2c2e] rounded-2xl p-3 shadow-sm border border-white/5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">{monthName} {year}</span>
            <div className="flex gap-1">
              <button onClick={()=> showToast?.("Previous month")} className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-white"><ChevronLeft size={13} /></button>
              <button onClick={()=> showToast?.("Next month")} className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-white"><ChevronRight size={13} /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 mt-2 text-center text-[10px] font-medium text-white/40">
            {dayNames.map(d => <div key={d} className="py-1">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1 mt-1">
            {cells.map((c, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=> { if(c.isCurrent){ setSelected(c.d); showToast?.(`${monthName} ${c.d}, ${year} selected`);} else showToast?.(c.isCurrent ? `Selected ${c.d}` : `Outside current month`); }}
                className={`h-7 flex items-center justify-center text-xs rounded-full transition ${c.d===selected && c.isCurrent ? "bg-[#007aff] text-white font-semibold shadow" : c.isToday ? "bg-[#007aff]/20 text-[#007aff] font-semibold" : c.isCurrent ? "text-white hover:bg-white/10" : "text-white/20"}`}
              >
                {c.d}
              </motion.button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="font-medium text-white">Today</span>
            <button onClick={()=> showToast?.("No events today")} className="text-white/40 hover:text-white hover:underline">No events • Add…</button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
