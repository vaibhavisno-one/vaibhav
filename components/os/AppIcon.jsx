"use client";
import { Terminal, Settings, AppWindow, Globe, Music2, Image as ImageIcon, FileText, Mail, LayoutGrid } from "lucide-react";

export default function AppIcon({ appId, size = 28, active = false }) {
  const id = appId;
  const s = { width: size, height: size };
  const ring = active ? "ring-2 ring-white/40" : "";

  switch (id) {
    case "files":
      return (
        <div style={s} className={`rounded-[10px] overflow-hidden shadow-sm border border-black/5 ${ring} bg-white flex items-center justify-center`}>
          <img src="/icons/files-icon.svg" alt="Files" style={{ width: size, height: size }} className="w-full h-full object-cover" draggable={false} />
        </div>
      );
    case "browser":
      return (
        <div style={s} className={`rounded-[10px] overflow-hidden shadow-sm border border-black/5 ${ring} bg-[#E0F2FE] flex items-center justify-center`}>
          <img src="/icons/browser-icon.svg" alt="Browser" style={{ width: size, height: size }} className="w-full h-full object-cover" draggable={false} />
        </div>
      );
    case "terminal":
      return (
        <div style={s} className={`rounded-[10px] overflow-hidden shadow-sm border border-black/5 ${ring} bg-white flex items-center justify-center`}>
          <img src="/icons/terminal-icon.svg" alt="Terminal" style={{ width: size, height: size }} className="w-full h-full object-cover" draggable={false} />
        </div>
      );
    case "music":
      return (
        <div style={s} className={`rounded-[10px] overflow-hidden shadow-sm border border-black/10 ${ring} bg-[#0a0a0a] flex items-center justify-center`}>
          <img src="/icons/music-icon.svg" alt="Music" style={{ width: size, height: size }} className="w-full h-full object-cover" draggable={false} />
        </div>
      );
    case "gallery":
      return (
        <div style={s} className={`rounded-[10px] overflow-hidden shadow-sm border border-black/5 ${ring} bg-[#7A0A0A] flex items-center justify-center`}>
          <img src="/icons/gallery-icon.svg" alt="Gallery" style={{ width: size, height: size }} className="w-full h-full object-cover" draggable={false} />
        </div>
      );
    case "notes":
    case "blogs":
      return (
        <div style={s} className={`rounded-[10px] overflow-hidden shadow-sm border border-black/5 ${ring} bg-[#FFFBEB] flex items-center justify-center`}>
          <img src="/icons/blogs-icon.svg" alt="Blogs" style={{ width: size, height: size }} className="w-full h-full object-cover" draggable={false} />
        </div>
      );
    case "contact":
    case "mail":
      return (
        <div style={s} className={`rounded-[10px] overflow-hidden shadow-sm border border-black/5 ${ring} bg-white flex items-center justify-center`}>
          <img src="/icons/mail-icon.svg" alt="Mail" style={{ width: size, height: size }} className="w-full h-full object-cover" draggable={false} />
        </div>
      );
    case "settings":
      return (
        <div style={s} className={`rounded-[10px] overflow-hidden shadow-sm border border-black/5 ${ring} bg-[#FFFBEB] flex items-center justify-center`}>
          <img src="/icons/settings-icon.svg" alt="Settings" style={{ width: size, height: size }} className="w-full h-full object-cover" draggable={false} />
        </div>
      );
    case "launcher":
    case "app-launcher":
    case "search-apps":
      return (
        <div style={s} className={`rounded-[10px] overflow-hidden shadow-sm border border-black/5 ${ring} bg-white flex items-center justify-center`}>
          <img src="/icons/search-apps-icon.svg" alt="Search Apps" style={{ width: size, height: size }} className="w-full h-full object-cover" draggable={false} />
        </div>
      );
    default:
      return (
        <div style={s} className={`rounded-[10px] bg-zinc-700 flex items-center justify-center ${ring}`}>
          <AppWindow size={size * 0.5} className="text-white" />
        </div>
      );
  }
}
