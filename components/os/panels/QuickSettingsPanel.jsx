"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Bluetooth, Volume2, Sun, Moon, Battery, Monitor, Lock, Power, Plane, BellOff, Laptop } from "lucide-react";
import { sounds, setMasterVolume } from "@/lib/os/sounds";

export default function QuickSettingsPanel({ settings, setSettings, onShutdown, onLock, volume, setVolume, brightness, setBrightness, onOpenApp, showToast, onClose }) {
  const [powerExpanded, setPowerExpanded] = useState(false);
  const [wifiOn, setWifiOn] = useState(true);
  const [btOn, setBtOn] = useState(true);
  const [airdropOn, setAirdropOn] = useState(false);
  const [focusOn, setFocusOn] = useState(false);
  const [stageOn, setStageOn] = useState(settings.theme === "dark");
  const [mirrorOn, setMirrorOn] = useState(false);
  const [dndOn, setDndOn] = useState(false);
  const [airplaneOn, setAirplaneOn] = useState(false);

  const toggleTheme = () => {
    // dark only — keep dark
    setSettings(s => ({ ...s, theme: "dark" }));
    setStageOn(true);
    showToast?.("Dark mode — Always on • OLED");
  };
  const handleWifi = () => { try{ sounds.toggle(volume);}catch{} setWifiOn(v=>!v); showToast?.(wifiOn ? "Wi-Fi — Off" : "Wi-Fi — Connected to Home 5G"); };
  const handleBt = () => { try{ sounds.toggle(volume);}catch{} setBtOn(v=>!v); showToast?.(btOn ? "Bluetooth — Off" : "Bluetooth — On • Boult Audio connected"); };
  const handleAirdrop = () => { try{ sounds.click(volume);}catch{} setAirdropOn(v=>!v); showToast?.(airdropOn ? "AirDrop — Off" : "AirDrop — Contacts Only"); };
  const handleFocus = () => { try{ sounds.toggle(volume);}catch{} setFocusOn(v=>!v); showToast?.(focusOn ? "Focus — Off" : "Focus — Work mode On"); };
  const handleStage = () => { try{ sounds.toggle(volume);}catch{} toggleTheme(); };
  const handleMirror = () => { try{ sounds.click(volume);}catch{} setMirrorOn(v=>!v); showToast?.(mirrorOn ? "Screen Mirroring — Off" : "Screen Mirroring — Searching…"); };
  const handleDnd = () => { try{ sounds.click(volume);}catch{} setDndOn(v=>!v); showToast?.(dndOn ? "Notifications — On" : "Do Not Disturb — On"); };
  const handleAirplane = () => { try{ sounds.toggle(volume);}catch{} setAirplaneOn(v=>!v); showToast?.(airplaneOn ? "Airplane Mode — Off" : "Airplane Mode — On"); };

  return (
    <motion.div
      initial={{ y: -12, opacity: 0, scale: 0.97 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -12, opacity: 0, scale: 0.97 }}
      transition={{ type: "spring", damping: 24, stiffness: 380 }}
      className="absolute top-7 right-2 w-[380px] bg-[#1c1c1f]/90 backdrop-blur-2xl rounded-[18px] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] border border-white/10 overflow-hidden z-40"
      style={{ WebkitBackdropFilter: "blur(24px)" }}
    >
      <div className="p-3 space-y-3">
        {/* Top row */}
        <div className="flex items-center gap-2">
          <button onClick={()=> showToast?.("Battery 100% • Charging • 4h 12m remaining")} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/10 text-xs font-medium text-white hover:bg-white/15">
            <Battery size={14} /> 100%
          </button>
          <div className="ml-auto flex items-center gap-1.5">
            <button onClick={()=>{ showToast?.("Display • 1920×1080 • 60Hz"); onOpenApp?.("settings"); }} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center text-white" title="Display settings"><Monitor size={14} /></button>
            <button onClick={toggleTheme} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center text-white" title="Dark only — always on"><Moon size={14}/></button>
            <button onClick={()=>{ onLock(); showToast?.("Locked"); }} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center text-white" title="Lock"><Lock size={14} /></button>
            <button onClick={() => setPowerExpanded(e=>!e)} className={`w-7 h-7 rounded-full flex items-center justify-center ${powerExpanded?"bg-[#ff3b30] text-white":"bg-white/10 hover:bg-white/15 text-white"}`} title="Power"><Power size={14} /></button>
          </div>
        </div>

        {powerExpanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bg-[#2a2a2e] rounded-2xl p-2.5 border border-white/10 space-y-1 overflow-hidden">
            <div className="text-xs font-semibold text-white px-2 py-1">Power</div>
            <button onClick={onShutdown} className="w-full text-left text-[13px] px-3 py-2 hover:bg-white/10 rounded-xl text-zinc-300">Shut Down…</button>
            <button onClick={()=> window.location.reload()} className="w-full text-left text-[13px] px-3 py-2 hover:bg-white/10 rounded-xl text-zinc-300">Restart…</button>
            <button onClick={()=>{ onLock(); showToast?.("Sleep • Screen off"); }} className="w-full text-left text-[13px] px-3 py-2 hover:bg-white/10 rounded-xl text-zinc-300">Sleep</button>
            <div className="h-px bg-white/10 my-1" />
            <button onClick={onLock} className="w-full text-left text-[13px] px-3 py-2 hover:bg-white/10 rounded-xl text-zinc-300">Lock Screen</button>
          </motion.div>
        )}

        {/* Sliders - functional */}
        <div className="space-y-2.5">
          <div className="bg-[#2a2a2e] rounded-2xl p-3 border border-white/5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white"><Volume2 size={14} /></div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wide">Sound • {volume}% — microinteraction</div>
                <input type="range" min={0} max={100} value={volume} onChange={e=>{ const v=Number(e.target.value); setVolume(v); setMasterVolume(v); if(v>0) try{ sounds.pop(v);}catch{} showToast?.(`Volume ${v}%`); }} className="w-full accent-[#0a84ff] h-1 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="bg-[#2a2a2e] rounded-2xl p-3 border border-white/5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white"><Sun size={14} /></div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wide">Display • {brightness}%</div>
                <input type="range" min={75} max={130} value={brightness} onChange={e=>{ setBrightness(Number(e.target.value)); showToast?.(`Brightness ${e.target.value}%`); }} className="w-full accent-[#0a84ff] h-1 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid - all buttons functional */}
        <div className="grid grid-cols-2 gap-2.5">
          <motion.button onClick={handleWifi} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 * 0.04 }} className={`flex items-center gap-3 p-3 rounded-2xl border shadow-sm text-left ${wifiOn ? "bg-[#0a84ff] border-[#0a84ff] text-white" : "bg-[#2a2a2e] border-white/5 text-white"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${wifiOn ? "bg-white/20" : "bg-white/10"}`}><Wifi size={14} /></div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold leading-none">Wi-Fi</div>
              <div className="text-[11px] opacity-70 truncate">{wifiOn ? "Home 5G" : "Off"}</div>
            </div>
          </motion.button>
          <motion.button onClick={handleBt} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }} className={`flex items-center gap-3 p-3 rounded-2xl border shadow-sm text-left ${btOn ? "bg-[#0a84ff] border-[#0a84ff] text-white" : "bg-[#2a2a2e] border-white/5 text-white"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${btOn ? "bg-white/20" : "bg-white/10"}`}><Bluetooth size={14} /></div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold leading-none">Bluetooth</div>
              <div className="text-[11px] opacity-70 truncate">{btOn ? "On • Boult" : "Off"}</div>
            </div>
          </motion.button>
          <motion.button onClick={handleAirdrop} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className={`flex items-center gap-3 p-3 rounded-2xl border shadow-sm text-left ${airdropOn ? "bg-[#0a84ff] border-[#0a84ff] text-white" : "bg-[#2a2a2e] border-white/5 text-white"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${airdropOn ? "bg-white/20" : "bg-white/10"}`}><Laptop size={14} /></div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold leading-none">AirDrop</div>
              <div className="text-[11px] opacity-70 truncate">{airdropOn ? "Everyone" : "Contacts Only"}</div>
            </div>
          </motion.button>
          <motion.button onClick={handleFocus} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className={`flex items-center gap-3 p-3 rounded-2xl border shadow-sm text-left ${focusOn ? "bg-[#0a84ff] border-[#0a84ff] text-white" : "bg-[#2a2a2e] border-white/5 text-white"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${focusOn ? "bg-white/20" : "bg-white/10"}`}><Moon size={14} /></div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold leading-none">Focus</div>
              <div className="text-[11px] opacity-70 truncate">{focusOn ? "Work" : "Off"}</div>
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <motion.button onClick={handleStage} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12 }} className={`flex items-center gap-2 px-3 py-2.5 rounded-full text-xs font-medium border shadow-sm ${stageOn ? "bg-[#0a84ff] border-[#0a84ff] text-white" : "bg-[#2a2a2e] border-white/5 text-white"}`}>
            <Monitor size={14} /> Stage Mgr
          </motion.button>
          <motion.button onClick={handleMirror} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className={`flex items-center gap-2 px-3 py-2.5 rounded-full text-xs font-medium border shadow-sm ${mirrorOn ? "bg-[#0a84ff] border-[#0a84ff] text-white" : "bg-[#2a2a2e] border-white/5 text-white"}`}>
            <Monitor size={14} /> {mirrorOn ? "Mirroring…" : "Mirroring"}
          </motion.button>
          <motion.button onClick={handleDnd} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18 }} className={`flex items-center gap-2 px-3 py-2.5 rounded-full text-xs font-medium border shadow-sm ${dndOn ? "bg-[#0a84ff] border-[#0a84ff] text-white" : "bg-[#2a2a2e] border-white/5 text-white"}`}>
            <BellOff size={14} /> {dndOn ? "DND On" : "DND Off"}
          </motion.button>
          <motion.button onClick={handleAirplane} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.21 }} className={`flex items-center gap-2 px-3 py-2.5 rounded-full text-xs font-medium border shadow-sm ${airplaneOn ? "bg-[#0a84ff] border-[#0a84ff] text-white" : "bg-[#2a2a2e] border-white/5 text-white"}`}>
            <Plane size={14} /> {airplaneOn ? "On" : "Airplane"}
          </motion.button>
        </div>

        <div className="flex gap-2">
          <button onClick={()=>{ onOpenApp?.("contact"); onClose?.(); showToast?.("Opening Mail"); }} className="flex-1 bg-[#2a2a2e] rounded-2xl p-3 border border-white/5 flex items-center gap-2.5 hover:bg-white/5 transition">
            <img src="/yorolovo.jpeg" alt="" className="w-8 h-8 rounded-full object-cover" />
            <div className="flex-1 min-w-0 text-left">
              <div className="text-xs font-semibold text-white truncate">Vaibhav Kumar</div>
              <div className="text-[11px] text-white/50">Vaibhav ID • View profile</div>
            </div>
          </button>
          <button onClick={()=>{ onOpenApp?.("settings"); showToast?.("Opening Settings"); }} className="px-4 rounded-2xl bg-[#2a2a2e] border border-white/5 text-xs font-medium text-white hover:bg-white/5">Edit</button>
        </div>
      </div>
    </motion.div>
  );
}
