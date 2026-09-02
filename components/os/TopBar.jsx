"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Wifi, Battery, Volume2 } from "lucide-react";

export default function TopBar({ timeStr, activeApp = "Files", overviewOpen, calendarOpen, quickOpen, onOverview, onCalendar, onQuick, onSearch, onVosMenu, onBattery, onWifi, showToast, onOpenApp, onShutdown, onLock }) {
  const [vosOpen, setVosOpen] = useState(false);
  const datePart = new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  const timePart = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  return (
    <div className="relative z-30 h-7 bg-[#1e1e1e]/85 backdrop-blur-xl border-b border-white/10 flex items-center px-2.5 text-[13px] text-white shrink-0 select-none" style={{ WebkitBackdropFilter: "blur(20px)", backdropFilter: "blur(20px)" }}>
      {/* Left: Vaibhav OS logo + App menu */}
      <div className="flex items-center gap-1">
        <button
          onClick={(e) => { e.stopPropagation(); setVosOpen(v=>!v); onVosMenu?.(); if(!vosOpen) showToast?.("Vaibhav OS • v1.0"); }}
          className={`w-7 h-6 flex items-center justify-center rounded-[6px] hover:bg-white/10 transition ${vosOpen ? "bg-white/15" : ""}`}
          aria-label="Vaibhav OS menu"
        >
          <span className="w-5 h-5 rounded-[5px] bg-white text-black flex items-center justify-center text-[11px] font-black leading-none">V</span>
        </button>

        <span className="font-semibold text-[13px] tracking-tight ml-1 hidden sm:inline">{activeApp}</span>
      </div>

      {/* Center: Calendar & Notifications */}
      <div className="flex-1 flex justify-center">
        <button onClick={(e)=>{e.stopPropagation(); onCalendar(e);}} className={`px-2.5 py-0.5 rounded-full text-[12.5px] font-medium hover:bg-white/10 ${calendarOpen ? "bg-white/15" : ""}`} title="Calendar & Notifications">
          <span className="hidden sm:inline">{datePart}  {timePart}</span>
          <span className="sm:hidden">{timePart}</span>
        </button>
      </div>

      {/* Right: controls - combined battery+wifi like macOS */}
      <div className="flex items-center gap-0.5">
        <button onClick={(e)=>{e.stopPropagation(); onSearch(e);}} className={`w-6 h-6 flex items-center justify-center rounded-full ${quickOpen ? "" : "hover:bg-white/10"}`} title="Quick Search • Ctrl+K">
          <Search size={13} />
        </button>

        <button onClick={(e)=>{e.stopPropagation(); onQuick?.(e);}} className={`flex items-center gap-1.5 ml-1 px-2.5 py-1 rounded-full ${quickOpen ? "bg-white/20" : "hover:bg-white/10"}`} title="Quick Settings • Battery & Network">
          <span className="flex items-center gap-1">
            <Battery size={13} />
            <span className="text-[11px] font-medium">100%</span>
          </span>
          <span className="w-px h-3 bg-white/15 mx-1 hidden sm:block" />
          <Wifi size={13} className="" />
          <Volume2 size={13} className="hidden sm:inline" />
        </button>

        {/* Vaibhav OS menu dropdown - all functional */}
        <AnimatePresence>
          {vosOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -6 }}
              transition={{ type: "spring", damping: 24, stiffness: 380 }}
              className="absolute top-8 left-2 w-64 bg-[#2c2c2e]/95 backdrop-blur-2xl rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden py-1.5 text-[13px] z-50"
              onClick={() => setVosOpen(false)}
            >
              <button onClick={(e)=>{e.stopPropagation(); setVosOpen(false); showToast?.("Vaibhav OS v1.0 • Build 2026.08 • by Vaibhav Kumar • Next.js 16 + Framer Motion");}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">About Vaibhav OS</button>
              <div className="h-px bg-white/10 my-1 mx-2" />
              <button onClick={(e)=>{e.stopPropagation(); setVosOpen(false); onOpenApp?.("settings"); showToast?.("Opening Settings");}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Settings…</button>
              <div className="h-px bg-white/10 my-1 mx-2" />
              <button onClick={(e)=>{e.stopPropagation(); setVosOpen(false); onLock?.(); showToast?.("Sleep • Screen locked");}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Sleep</button>
              <button onClick={(e)=>{e.stopPropagation(); setVosOpen(false); showToast?.("Restarting Vaibhav OS…"); setTimeout(()=> window.location.reload(), 600);}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Restart…</button>
              <button onClick={(e)=>{e.stopPropagation(); setVosOpen(false); onShutdown?.();}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Shut Down…</button>
              <div className="h-px bg-white/10 my-1 mx-2" />
              <button onClick={(e)=>{e.stopPropagation(); setVosOpen(false); onLock?.();}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Lock Screen</button>
              <button onClick={(e)=>{e.stopPropagation(); setVosOpen(false); onLock?.(); showToast?.("Logged out • Vaibhav Kumar");}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Log Out Vaibhav Kumar…</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
