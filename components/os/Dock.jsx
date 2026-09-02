"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { APP_DEFS, DOCK_ORDER } from "@/lib/os/appDefs";
import AppIcon from "./AppIcon";

export default function Dock({ settings, windows, activeId, onOpenApp, onOverview, overviewOpen, anyMaximized }) {
  const [hovered, setHovered] = useState(null);
  const ordered = DOCK_ORDER.map(id => APP_DEFS.find(a=>a.id===id)).filter(Boolean);

  const getScale = (index) => {
    if (hovered === null) return 1;
    const dist = Math.abs(index - hovered);
    if (dist === 0) return 1.32;
    if (dist === 1) return 1.16;
    if (dist === 2) return 1.06;
    return 1;
  };

  return (
    <div className={`relative z-[60] flex justify-center pb-2 pt-2 ${anyMaximized ? "" : ""}`}>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 380 }}
        className="flex items-end gap-1.5 pl-2.5 pr-2.5 py-2 rounded-[16px] bg-[#8a8f98]/28 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.18)]"
        style={{ WebkitBackdropFilter: "blur(24px)", backdropFilter: "blur(24px)" }}
        onMouseLeave={() => setHovered(null)}
      >
        {ordered.map((app, i) => {
          const isOpen = windows.some((w) => w.appId === app.id);
          const isActive = windows.some((w) => w.appId === app.id && w.id === activeId && !w.isMinimized);
          const scale = getScale(i);
          const size = settings.iconSize * 0.82 * scale;
          return (
            <motion.button
              key={app.id}
              onMouseEnter={() => setHovered(i)}
              onClick={() => onOpenApp(app.id)}
              whileTap={{ scale: 0.88, y: 2 }}
              className="relative flex flex-col items-center justify-end group"
              style={{ width: size + 10, height: settings.dockSize }}
              title={app.name}
            >
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-[#0a0a0a] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition border border-white/10 shadow-lg">
                {app.name}
              </span>
              <motion.span
                animate={{ width: size, height: size, y: scale > 1 ? -4 : 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 400 }}
                className="flex items-center justify-center will-change-transform"
                style={{ width: size, height: size }}
              >
                <AppIcon appId={app.id} size={size} active={isActive} />
              </motion.span>
              <motion.span animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.5 }} className="mt-1 w-1 h-1 rounded-full bg-white" />
            </motion.button>
          );
        })}

        <div className="w-px h-9 bg-white/10 mx-1.5 self-center" />

        <motion.button
          whileTap={{ scale: 0.88 }}
          onMouseEnter={() => setHovered(ordered.length)}
          onClick={onOverview}
          className="relative flex flex-col items-center justify-end group"
          style={{ width: settings.iconSize * 0.82 + 10, height: settings.dockSize }}
          title="Search Apps"
        >
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-[#0a0a0a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition border border-white/10">Search Apps</span>
          <span className="flex items-center justify-center" style={{ width: settings.iconSize * 0.82, height: settings.iconSize * 0.82 }}>
            <AppIcon appId="search-apps" size={settings.iconSize * 0.82} active={overviewOpen} />
          </span>
          <span className="mt-1 w-1 h-1 rounded-full bg-transparent" />
        </motion.button>

      </motion.div>
    </div>
  );
}
