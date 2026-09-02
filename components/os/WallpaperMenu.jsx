"use client";
import { motion } from "framer-motion";
import { Image as PhotoIcon, Settings, Terminal } from "lucide-react";

export default function WallpaperMenu({ pos, onClose, onCycle, onOpenSettings, onOpenTerminal }) {
  if (!pos) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: -4 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -4 }}
      transition={{ type: "spring", damping: 24, stiffness: 380 }}
      onClick={(e) => e.stopPropagation()}
      style={{ left: pos.x, top: pos.y }}
      className="absolute z-40 w-56 bg-white/90 dark:bg-[#2c2c2e]/90 backdrop-blur-xl rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.08)] border border-white/60 dark:border-white/10 overflow-hidden py-1.5"
    >
      <button onClick={onCycle} className="w-full text-left px-3 py-1.5 hover:bg-[#007aff] hover:text-white text-[13px] text-black dark:text-white flex items-center gap-2.5 mx-1 rounded-md w-[calc(100%-8px)]"><PhotoIcon size={14} /> Change Wallpaper</button>
      <button onClick={() => { onClose(); onOpenSettings(); }} className="w-full text-left px-3 py-1.5 hover:bg-[#007aff] hover:text-white text-[13px] text-black dark:text-white flex items-center gap-2.5 mx-1 rounded-md w-[calc(100%-8px)]"><Settings size={14} /> Change Desktop…</button>
      <button onClick={() => { onClose(); onOpenTerminal(); }} className="w-full text-left px-3 py-1.5 hover:bg-[#007aff] hover:text-white text-[13px] text-black dark:text-white flex items-center gap-2.5 mx-1 rounded-md w-[calc(100%-8px)]"><Terminal size={14} /> Open Terminal</button>
      <div className="h-px bg-black/5 dark:bg-white/10 my-1 mx-2" />
      <button onClick={onClose} className="w-full text-left px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/10 text-[13px] text-black/50 dark:text-white/60 mx-1 rounded-md w-[calc(100%-8px)]">Cancel</button>
    </motion.div>
  );
}
