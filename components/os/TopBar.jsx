"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Wifi, Battery, Volume2, VolumeX, Volume1 } from "lucide-react";
import { sounds, setMasterVolume } from "@/lib/os/sounds";

export default function TopBar({ timeStr, activeApp = "Projects", overviewOpen, calendarOpen, quickOpen, onOverview, onCalendar, onQuick, onSearch, onVosMenu, onBattery, onWifi, showToast, onOpenApp, onShutdown, onLock, volume = 78, setVolume }) {
  const [vosOpen, setVosOpen] = useState(false);
  const [showVol, setShowVol] = useState(false);
  const [localVol, setLocalVol] = useState(volume);
  const datePart = new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  const timePart = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  useEffect(() => { setLocalVol(volume); setMasterVolume(volume); }, [volume]);
  const commitVol = (v) => {
    setLocalVol(v);
    setMasterVolume(v);
    setVolume?.(v);
    if (v === 0) sounds.click(0);
    else sounds.toggle(v);
    showToast?.(`Volume ${v}%`);
  };

  const VolIcon = localVol === 0 ? VolumeX : localVol < 40 ? Volume1 : Volume2;

  return (
    <div className="relative z-30 h-7 bg-[#1e1e1e]/85 backdrop-blur-xl border-b border-white/10 flex items-center px-2.5 text-[13px] text-white shrink-0 select-none" style={{ WebkitBackdropFilter: "blur(20px)", backdropFilter: "blur(20px)" }}>
      {/* Left: Vaibhav OS logo + App menu */}
      <div className="flex items-center gap-1">
        <button
          onClick={(e) => { e.stopPropagation(); sounds.click(localVol); setVosOpen(v=>!v); onVosMenu?.(); if(!vosOpen) showToast?.("Vaibhav OS • v1.0"); }}
          className={`w-7 h-6 flex items-center justify-center rounded-[6px] hover:bg-white/10 transition ${vosOpen ? "bg-white/15" : ""}`}
          aria-label="Vaibhav OS menu"
        >
          <span className="w-5 h-5 rounded-[5px] bg-white text-black flex items-center justify-center text-[11px] font-black leading-none">V</span>
        </button>
        <span className="font-semibold text-[13px] tracking-tight ml-1 hidden sm:inline">{activeApp}</span>
      </div>

      {/* Center: Calendar */}
      <div className="flex-1 flex justify-center">
        <button onClick={(e)=>{e.stopPropagation(); sounds.click(localVol); onCalendar(e);}} className={`px-2.5 py-0.5 rounded-full text-[12.5px] font-medium hover:bg-white/10 ${calendarOpen ? "bg-white/15" : ""}`} title="Calendar & Notifications">
          <span className="hidden sm:inline">{datePart}  {timePart}</span>
          <span className="sm:hidden">{timePart}</span>
        </button>
      </div>

      {/* Right: controls */}
      <div className="flex items-center gap-0.5">
        <button onClick={(e)=>{e.stopPropagation(); sounds.click(localVol); onSearch(e);}} className={`w-6 h-6 flex items-center justify-center rounded-full ${quickOpen ? "" : "hover:bg-white/10"}`} title="Quick Search • Ctrl+K">
          <Search size={13} />
        </button>

        {/* Volume — hover bar in topbar */}
        <div className="relative flex items-center" onMouseEnter={() => setShowVol(true)} onMouseLeave={() => setShowVol(false)}>
          <button
            onClick={(e) => { e.stopPropagation(); sounds.click(localVol); setShowVol(v=>!v); }}
            className={`w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition ${showVol ? "bg-white/15" : ""}`}
            title={`Volume ${localVol}% — click to show bar`}
          >
            <VolIcon size={13} />
          </button>
          <AnimatePresence>
            {showVol && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: -4, x: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -4 }}
                transition={{ type: "spring", damping: 24, stiffness: 380 }}
                onClick={e => e.stopPropagation()}
                className="absolute right-0 top-7 w-52 bg-[#1c1c1f]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.45)] p-3 flex items-center gap-3"
              >
                <VolIcon size={14} className="text-white/80 shrink-0" />
                <div className="flex-1">
                  <div className="text-[10px] font-semibold tracking-widest text-white/50 uppercase">Sound • {localVol}%</div>
                  <input type="range" min={0} max={100} value={localVol} onChange={e=> commitVol(Number(e.target.value))} onInput={e=> { const v=Number(e.target.value); setLocalVol(v); setMasterVolume(v); }} className="w-full accent-white h-1 cursor-pointer" />
                </div>
                <button onClick={() => commitVol(localVol===0?78:0)} className="text-[11px] px-2 py-1 rounded-full bg-white/10 hover:bg-white/15 text-white">{localVol===0?"Unmute":"Mute"}</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button onClick={(e)=>{e.stopPropagation(); sounds.click(localVol); onQuick?.(e);}} className={`flex items-center gap-1.5 ml-1 px-2.5 py-1 rounded-full ${quickOpen ? "bg-white/20" : "hover:bg-white/10"}`} title="Quick Settings • Battery & Network">
          <span className="flex items-center gap-1">
            <Battery size={13} />
            <span className="text-[11px] font-medium">100%</span>
          </span>
          <span className="w-px h-3 bg-white/15 mx-1 hidden sm:block" />
          <Wifi size={13} className="" />
          <span className="hidden sm:flex items-center gap-1 text-[11px] font-medium ml-1">
            <VolIcon size={12} className="opacity-80" /> {localVol}%
          </span>
        </button>

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
              <button onClick={(e)=>{e.stopPropagation(); sounds.success(localVol); setVosOpen(false); showToast?.("Vaibhav OS v1.0 • Build 2026.08 • by Vaibhav Kumar • Next.js 16 + Framer Motion");}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">About Vaibhav OS</button>
              <div className="h-px bg-white/10 my-1 mx-2" />
              <button onClick={(e)=>{e.stopPropagation(); sounds.click(localVol); setVosOpen(false); onOpenApp?.("settings"); showToast?.("Opening Settings");}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Settings…</button>
              <div className="h-px bg-white/10 my-1 mx-2" />
              <button onClick={(e)=>{e.stopPropagation(); sounds.click(localVol); setVosOpen(false); onLock?.(); showToast?.("Sleep • Screen locked");}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Sleep</button>
              <button onClick={(e)=>{e.stopPropagation(); sounds.click(localVol); setVosOpen(false); showToast?.("Restarting Vaibhav OS…"); setTimeout(()=> window.location.reload(), 600);}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Restart…</button>
              <button onClick={(e)=>{e.stopPropagation(); sounds.click(localVol); setVosOpen(false); onShutdown?.();}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Shut Down…</button>
              <div className="h-px bg-white/10 my-1 mx-2" />
              <button onClick={(e)=>{e.stopPropagation(); sounds.click(localVol); setVosOpen(false); onLock?.();}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Lock Screen</button>
              <button onClick={(e)=>{e.stopPropagation(); sounds.click(localVol); setVosOpen(false); onLock?.(); showToast?.("Logged out • Vaibhav Kumar");}} className="w-full text-left px-3 py-1.5 hover:bg-[#0a84ff] hover:text-white">Log Out Vaibhav Kumar…</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
