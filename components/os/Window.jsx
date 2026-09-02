"use client";
import { useState } from "react";
import { X, Minus, Square } from "lucide-react";
import AppIcon from "./AppIcon";

export default function Window({ win, isActive, onFocus, onClose, onMinimize, onMaximize, onDragStart, onResizeStart, children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={(e) => { e.stopPropagation(); onFocus(win.id); }}
      className={`absolute rounded-[12px] overflow-hidden flex flex-col border ${isActive ? "border-white/15 shadow-[0_18px_50px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)]" : "border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)] opacity-[0.98]"}`}
      style={{
        left: win.isMaximized ? 0 : win.x,
        top: win.isMaximized ? 28 : win.y,
        width: win.w,
        height: win.h,
        zIndex: win.z,
        background: "#ffffff",
        transition: win.isMaximized ? "all 200ms cubic-bezier(0.2,0,0,1)" : "box-shadow 150ms, opacity 150ms",
      }}
    >
      {/* Vaibhav OS title bar — custom controls on right, not mac traffic lights */}
      <div
        className="h-9 bg-[#f8f8f8] dark:bg-[#2f2f2f] flex items-center px-3 gap-2 shrink-0 border-b border-black/10 dark:border-white/5 select-none"
        onMouseDown={(e) => {
          if (win.isMaximized) return;
          onFocus(win.id);
          onDragStart(e, win);
        }}
        onDoubleClick={() => onMaximize(win.id)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Left: per-app icon + title */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="shrink-0 flex items-center justify-center">
            <AppIcon appId={win.appId} size={20} />
          </span>
          <span className="text-[13px] font-medium text-[#2b2b2b] dark:text-white/85 truncate tracking-tight">{win.title}</span>
        </div>

        {/* Right: custom window controls — monochrome, not colored circles */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onMinimize(win.id)}
            className="w-7 h-7 rounded-md hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition"
            aria-label="Minimize"
            title="Minimize"
          >
            <Minus size={13} strokeWidth={1.8} />
          </button>
          <button
            onClick={() => onMaximize(win.id)}
            className="w-7 h-7 rounded-md hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition"
            aria-label="Maximize"
            title={win.isMaximized ? "Restore" : "Maximize"}
          >
            <Square size={11} strokeWidth={1.8} />
          </button>
          <button
            onClick={() => onClose(win.id)}
            className="w-7 h-7 rounded-md hover:bg-[#ff3b30] hover:text-white flex items-center justify-center text-black/60 dark:text-white/60 transition"
            aria-label="Close"
            title="Close"
          >
            <X size={13} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden bg-white dark:bg-[#1e1e1e] relative">{children}</div>

      {!win.isMaximized && (
        <>
          <div className="absolute top-0 left-0 right-0 h-1 cursor-n-resize" onMouseDown={(e) => onResizeStart(e, win, "n")} />
          <div className="absolute bottom-0 left-0 right-0 h-1 cursor-s-resize" onMouseDown={(e) => onResizeStart(e, win, "s")} />
          <div className="absolute top-0 bottom-0 left-0 w-1 cursor-w-resize" onMouseDown={(e) => onResizeStart(e, win, "w")} />
          <div className="absolute top-0 bottom-0 right-0 w-1 cursor-e-resize" onMouseDown={(e) => onResizeStart(e, win, "e")} />
          <div className="absolute top-0 left-0 w-3 h-3 cursor-nw-resize" onMouseDown={(e) => onResizeStart(e, win, "nw")} />
          <div className="absolute top-0 right-0 w-3 h-3 cursor-ne-resize" onMouseDown={(e) => onResizeStart(e, win, "ne")} />
          <div className="absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize" onMouseDown={(e) => onResizeStart(e, win, "sw")} />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 cursor-se-resize opacity-40 hover:opacity-80" onMouseDown={(e) => onResizeStart(e, win, "se")}>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-black/20 dark:border-white/20 rounded-br" />
          </div>
        </>
      )}
    </div>
  );
}
