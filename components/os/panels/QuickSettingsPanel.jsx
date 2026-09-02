"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Bluetooth, Volume2, Sun, Moon, Battery, Monitor, Lock, Power, Plane, BellOff, Laptop } from "lucide-react";

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
    const next = settings.theme === "dark" ? "light" : "dark";
    setSettings(s => ({ ...s, theme: next }));
    setStageOn(next === "dark");
    showToast?.(next === "dark" ? "Dark mode — On" : "Light mode — On");
  };
  const handleWifi = () => { setWifiOn(v=>!v); showToast?.(wifiOn ? "Wi-Fi — Off" : "Wi-Fi — Connected to Home 5G"); };
  const handleBt = () => { setBtOn(v=>!v); showToast?.(btOn ? "Bluetooth — Off" : "Bluetooth — On • Boult Audio connected"); };
  const handleAirdrop = () => { setAirdropOn(v=>!v); showToast?.(airdropOn ? "AirDrop — Off" : "AirDrop — Contacts Only"); };
  const handleFocus = () => { setFocusOn(v=>!v); showToast?.(focusOn ? "Focus — Off" : "Focus — Work mode On"); };
  const handleStage = () => { toggleTheme(); };
  const handleMirror = () => { setMirrorOn(v=>!v); showToast?.(mirrorOn ? "Screen Mirroring — Off" : "Screen Mirroring — Searching…"); };
  const handleDnd = () => { setDndOn(v=>!v); showToast?.(dndOn ? "Notifications — On" : "Do Not Disturb — On"); };
  const handleAirplane = () => { setAirplaneOn(v=>!v); showToast?.(airplaneOn ? "Airplane Mode — Off" : "Airplane Mode — On"); };

  return (
    <motion.div
      initial={{ y: -12, opacity: 0, scale: 0.97 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -12, opacity: 0, scale: 0.97 }}
      transition={{ type: "spring", damping: 24, stiffness: 380 }}
      className="absolute top-7 right-2 w-[380px] bg-white/85 dark:bg-[#2c2c2e]/85 backdrop-blur-2xl rounded-[18px] shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_0_1px_rgba(0,0,0,0.06)] border border-white/50 dark:border-white/10 overflow-hidden z-40"
      style={{ WebkitBackdropFilter: "blur(24px)" }}
    >
      <div className="p-3 space-y-3">
        {/* Top row */}
        <div className="flex items-center gap-2">
          <button onClick={()=> showToast?.("Battery 100% • Charging • 4h 12m remaining")} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-xs font-medium text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/15">
            <Battery size={14} /> 100%
          </button>
          <div className="ml-auto flex items-center gap-1.5">
            <button onClick={()=>{ showToast?.("Display • 1920×1080 • 60Hz"); onOpenApp?.("settings"); }} className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center" title="Display settings"><Monitor size={14} /></button>
            <button onClick={toggleTheme} className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center" title="Toggle theme">{settings.theme==="dark"?<Sun size={14}/>:<Moon size={14}/>}</button>
            <button onClick={()=>{ onLock(); showToast?.("Locked"); }} className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center" title="Lock"><Lock size={14} /></button>
            <button onClick={() => setPowerExpanded(e=>!e)} className={`w-7 h-7 rounded-full flex items-center justify-center ${powerExpanded?"bg-[#ff3b30] text-white":"bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15"}`} title="Power"><Power size={14} /></button>
          </div>
        </div>

        {powerExpanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bg-white dark:bg-[#3a3a3c] rounded-2xl p-2.5 border border-black/5 dark:border-white/5 space-y-1 overflow-hidden">
            <div className="text-xs font-semibold text-black dark:text-white px-2 py-1">Power</div>
            <button onClick={onShutdown} className="w-full text-left text-[13px] px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl">Shut Down…</button>
            <button onClick={()=> window.location.reload()} className="w-full text-left text-[13px] px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl">Restart…</button>
            <button onClick={()=>{ onLock(); showToast?.("Sleep • Screen off"); }} className="w-full text-left text-[13px] px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl">Sleep</button>
            <div className="h-px bg-black/5 dark:bg-white/10 my-1" />
            <button onClick={onLock} className="w-full text-left text-[13px] px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl">Lock Screen</button>
          </motion.div>
        )}

        {/* Sliders - functional */}
        <div className="space-y-2.5">
          <div className="bg-white dark:bg-[#3a3a3c] rounded-2xl p-3 border border-black/5 dark:border-white/5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center"><Volume2 size={14} /></div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-black/50 dark:text-white/50 uppercase tracking-wide">Sound • {volume}%</div>
                <input type="range" min={0} max={100} value={volume} onChange={e=>{ setVolume(Number(e.target.value)); showToast?.(`Volume ${e.target.value}%`); }} className="w-full accent-[#007aff] h-1 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#3a3a3c] rounded-2xl p-3 border border-black/5 dark:border-white/5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center"><Sun size={14} /></div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-black/50 dark:text-white/50 uppercase tracking-wide">Display • {brightness}%</div>
                <input type="range" min={0} max={100} value={brightness} onChange={e=>{ setBrightness(Number(e.target.value)); showToast?.(`Brightness ${e.target.value}%`); }} className="w-full accent-[#007aff] h-1 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid - all buttons functional */}
        <div className="grid grid-cols-2 gap-2.5">
          <motion.button onClick={handleWifi} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 * 0.04 }} className={`flex items-center gap-3 p-3 rounded-2xl border shadow-sm text-left ${wifiOn ? "bg-[#007aff] border-[#007aff] text-white" : "bg-white dark:bg-[#3a3a3c] border-black/5 dark:border-white/5 text-black dark:text-white"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${wifiOn ? "bg-white/20" : "bg-black/5 dark:bg-white/10"}`}><Wifi size={14} /></div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold leading-none">Wi-Fi</div>
              <div className="text-[11px] opacity-70 truncate">{wifiOn ? "Home 5G" : "Off"}</div>
            </div>
          </motion.button>
          <motion.button onClick={handleBt} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }} className={`flex items-center gap-3 p-3 rounded-2xl border shadow-sm text-left ${btOn ? "bg-[#007aff] border-[#007aff] text-white" : "bg-white dark:bg-[#3a3a3c] border-black/5 dark:border-white/5 text-black dark:text-white"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${btOn ? "bg-white/20" : "bg-black/5 dark:bg-white/10"}`}><Bluetooth size={14} /></div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold leading-none">Bluetooth</div>
              <div className="text-[11px] opacity-70 truncate">{btOn ? "On • Boult" : "Off"}</div>
            </div>
          </motion.button>
          <motion.button onClick={handleAirdrop} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className={`flex items-center gap-3 p-3 rounded-2xl border shadow-sm text-left ${airdropOn ? "bg-[#007aff] border-[#007aff] text-white" : "bg-white dark:bg-[#3a3a3c] border-black/5 dark:border-white/5 text-black dark:text-white"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${airdropOn ? "bg-white/20" : "bg-black/5 dark:bg-white/10"}`}><Laptop size={14} /></div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold leading-none">AirDrop</div>
              <div className="text-[11px] opacity-70 truncate">{airdropOn ? "Everyone" : "Contacts Only"}</div>
            </div>
          </motion.button>
          <motion.button onClick={handleFocus} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className={`flex items-center gap-3 p-3 rounded-2xl border shadow-sm text-left ${focusOn ? "bg-[#007aff] border-[#007aff] text-white" : "bg-white dark:bg-[#3a3a3c] border-black/5 dark:border-white/5 text-black dark:text-white"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${focusOn ? "bg-white/20" : "bg-black/5 dark:bg-white/10"}`}><Moon size={14} /></div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold leading-none">Focus</div>
              <div className="text-[11px] opacity-70 truncate">{focusOn ? "Work" : "Off"}</div>
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <motion.button onClick={handleStage} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12 }} className={`flex items-center gap-2 px-3 py-2.5 rounded-full text-xs font-medium border shadow-sm ${stageOn ? "bg-[#007aff] border-[#007aff] text-white" : "bg-white dark:bg-[#3a3a3c] border-black/5 dark:border-white/5 text-black dark:text-white"}`}>
            <Monitor size={14} /> Stage Mgr
          </motion.button>
          <motion.button onClick={handleMirror} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className={`flex items-center gap-2 px-3 py-2.5 rounded-full text-xs font-medium border shadow-sm ${mirrorOn ? "bg-[#007aff] border-[#007aff] text-white" : "bg-white dark:bg-[#3a3a3c] border-black/5 dark:border-white/5 text-black dark:text-white"}`}>
            <Monitor size={14} /> {mirrorOn ? "Mirroring…" : "Mirroring"}
          </motion.button>
          <motion.button onClick={handleDnd} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18 }} className={`flex items-center gap-2 px-3 py-2.5 rounded-full text-xs font-medium border shadow-sm ${dndOn ? "bg-[#007aff] border-[#007aff] text-white" : "bg-white dark:bg-[#3a3a3c] border-black/5 dark:border-white/5 text-black dark:text-white"}`}>
            <BellOff size={14} /> {dndOn ? "DND On" : "DND Off"}
          </motion.button>
          <motion.button onClick={handleAirplane} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.21 }} className={`flex items-center gap-2 px-3 py-2.5 rounded-full text-xs font-medium border shadow-sm ${airplaneOn ? "bg-[#007aff] border-[#007aff] text-white" : "bg-white dark:bg-[#3a3a3c] border-black/5 dark:border-white/5 text-black dark:text-white"}`}>
            <Plane size={14} /> {airplaneOn ? "On" : "Airplane"}
          </motion.button>
        </div>

        <div className="flex gap-2">
          <button onClick={()=>{ onOpenApp?.("contact"); onClose?.(); showToast?.("Opening Mail"); }} className="flex-1 bg-white dark:bg-[#3a3a3c] rounded-2xl p-3 border border-black/5 dark:border-white/5 flex items-center gap-2.5 hover:bg-black/5 dark:hover:bg-white/5 transition">
            <img src="/yorolovo.jpeg" alt="" className="w-8 h-8 rounded-full object-cover" />
            <div className="flex-1 min-w-0 text-left">
              <div className="text-xs font-semibold text-black dark:text-white truncate">Vaibhav Kumar</div>
              <div className="text-[11px] text-black/50 dark:text-white/50">Vaibhav ID • View profile</div>
            </div>
          </button>
          <button onClick={()=>{ onOpenApp?.("settings"); showToast?.("Opening Settings"); }} className="px-4 rounded-2xl bg-white dark:bg-[#3a3a3c] border border-black/5 dark:border-white/5 text-xs font-medium text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5">Edit</button>
        </div>
      </div>
    </motion.div>
  );
}
