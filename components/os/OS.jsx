"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WALLPAPERS, getWallpaperStyle } from "@/lib/os/wallpapers";
import { APP_DEFS, getApp } from "@/lib/os/appDefs";
import AppIcon from "./AppIcon";
import TopBar from "./TopBar";
import Dock from "./Dock";
import Window from "./Window";
import AppLauncher from "./Overview";
import NotificationsPanel from "./panels/CalendarPanel";
import QuickSettingsPanel from "./panels/QuickSettingsPanel";
import QuickSearch from "./GlobalSearch";
import WallpaperMenu from "./WallpaperMenu";
import BootScreen from "./screens/BootScreen";
import LockScreen from "./screens/LockScreen";
import ShutdownScreen from "./screens/ShutdownScreen";

// Apps
import TerminalApp from "./apps/TerminalApp";
import FilesApp from "./apps/FilesApp";
import BrowserApp from "./apps/BrowserApp";
import SpotifyApp from "./apps/SpotifyApp";
import PhotosApp from "./apps/PhotosApp";
import NotesApp from "./apps/NotesApp";
import ContactApp from "./apps/ContactApp";
import SettingsApp from "./apps/SettingsApp";

const APP_COMPONENTS = {
  terminal: TerminalApp,
  files: FilesApp,
  browser: BrowserApp,
  music: SpotifyApp,
  gallery: PhotosApp,
  notes: NotesApp,
  contact: ContactApp,
  settings: SettingsApp,
};

function renderAppContent(appId, payload, helpers) {
  const norm = appId;
  const Comp = APP_COMPONENTS[norm] || APP_COMPONENTS[appId];
  if (!Comp) return <div className="p-6 text-sm text-zinc-500">App not found: {appId}</div>;
  if (norm === "files") return <FilesApp onOpenBrowser={(url) => helpers.openBrowser(url)} />;
  if (norm === "browser") return <BrowserApp initialUrl={payload?.url} />;
  if (norm === "terminal") return <TerminalApp onOpenApp={helpers.openApp} onOpenBrowser={helpers.openBrowser} onWallpaper={(idx)=> helpers.setWallpaperIdx(idx)} wallpapers={WALLPAPERS} />;
  if (norm === "notes") return <NotesApp onOpenBrowser={(url) => helpers.openBrowser(url)} />;
  if (norm === "settings") return <SettingsApp settings={helpers.settings} setSettings={helpers.setSettings} wallpapers={WALLPAPERS} wallpaperIdx={helpers.wallpaperIdx} setWallpaperIdx={helpers.setWallpaperIdx} />;
  return <Comp onOpenApp={helpers.openApp} />;
}

export default function OS() {
  const [bootPhase, setBootPhase] = useState("boot");
  const [desktopReady, setDesktopReady] = useState(false);
  const [time, setTime] = useState(new Date());
  const [wallpaperIdx, setWallpaperIdx] = useState(0);
  const [settings, setSettings] = useState({ theme: "dark", iconSize: 48, dockSize: 51, brightness: 100, blurDesktop: true });
  const [volume, setVolume] = useState(55);
  const [brightness, setBrightness] = useState(45);

  const [windows, setWindows] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [nextZ, setNextZ] = useState(10);
  const [activeId, setActiveId] = useState(null);

  const [launcherOpen, setLauncherOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [controlOpen, setControlOpen] = useState(false);
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);
  const [quickSearchQuery, setQuickSearchQuery] = useState("");
  const [launcherQuery, setLauncherQuery] = useState("");
  const [wallpaperMenu, setWallpaperMenu] = useState(null);
  const [dockHover, setDockHover] = useState(false);
  const [dockHidden, setDockHidden] = useState(false);
  const dockRef = useRef(null);

  const [password, setPassword] = useState("");
  const [pwVisible, setPwVisible] = useState(false);
  const [failed] = useState(false);
  const [escCount, setEscCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [toast, setToast] = useState(null);
  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  }, []);

  const desktopRef = useRef(null);
  const containerRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (bootPhase === "boot") {
      const t = setTimeout(() => setBootPhase("lock"), 2400);
      return () => clearTimeout(t);
    }
    if (bootPhase === "desktop" && !desktopReady) {
      const t = setTimeout(() => setDesktopReady(true), 300);
      return () => clearTimeout(t);
    }
  }, [bootPhase, desktopReady]);

  const requestFs = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen?.().catch(() => {});
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  useEffect(() => {
    if (bootPhase === "desktop") {
      const t = setTimeout(() => requestFs(), 400);
      return () => clearTimeout(t);
    }
  }, [bootPhase, requestFs]);

  useEffect(() => {
    if (bootPhase !== "desktop" && bootPhase !== "shutdown") return;
    if (bootPhase === "desktop" && !document.fullscreenElement && desktopReady) {
      const t = setTimeout(() => {
        if (bootPhase === "desktop" && !document.fullscreenElement) requestFs();
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isFullscreen, bootPhase, desktopReady, requestFs]);

  useEffect(() => {
    let timer;
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (quickSearchOpen) { setQuickSearchOpen(false); return; }
        if (launcherOpen) { setLauncherOpen(false); return; }
        if (notificationOpen) { setNotificationOpen(false); return; }
        if (controlOpen) { setControlOpen(false); return; }
        if (wallpaperMenu) { setWallpaperMenu(null); return; }
        setEscCount((c) => {
          const nc = c + 1;
          if (nc >= 3) {
            setBootPhase("shutdown");
            setTimeout(() => document.exitFullscreen?.().catch(() => {}), 800);
            return 0;
          }
          clearTimeout(timer);
          timer = setTimeout(() => setEscCount(0), 1200);
          return nc;
        });
        if (document.fullscreenElement && bootPhase === "desktop") e.preventDefault();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setQuickSearchOpen((o) => !o);
      }
      if ((e.metaKey && e.key === " ") || (e.metaKey && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        setQuickSearchOpen((o) => !o);
      }
      if (e.key === "F4" || (e.altKey && e.key === "F3")) {
        e.preventDefault();
        setLauncherOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [quickSearchOpen, launcherOpen, notificationOpen, controlOpen, wallpaperMenu, bootPhase]);

  const wallpaper = WALLPAPERS[wallpaperIdx];
  const wallpaperStyle = getWallpaperStyle(wallpaper);

  const openApp = useCallback((appId, opts = {}) => {
    const norm = appId;
    setWindows((ws) => {
      const existing = ws.find((w) => w.appId === norm || w.appId === appId);
      if (existing) {
        setActiveId(existing.id);
        setNextZ((z) => z + 1);
        return ws.map((w) => (w.id === existing.id ? { ...w, isMinimized: false, z: nextZ } : w));
      }
      const def = getApp(norm) || getApp(appId) || { name: appId };
      const idx = nextId;
      const w = 900, h = 560;
      const vw = window.innerWidth, vh = window.innerHeight;
      const x = Math.max(12, (vw - w) / 2 + (Math.random() * 80 - 40));
      const y = Math.max(24 + 12, (vh - h) / 2 + (Math.random() * 40 - 20));
      const nw = { id: idx, appId: norm, title: def?.name || norm, x, y, w, h, z: nextZ, isMinimized: false, isMaximized: false, prev: null, payload: opts };
      setActiveId(idx);
      setNextZ((z) => z + 1);
      setNextId((n) => n + 1);
      setLauncherOpen(false);
      return [...ws, nw];
    });
  }, [nextId, nextZ]);

  const openBrowser = useCallback((url) => {
    openApp("browser", { url });
    setWindows((ws) => ws.map((w) => (w.appId === "browser" ? { ...w, payload: { url } } : w)));
  }, [openApp]);

  const closeWindow = (id) => setWindows((ws) => ws.filter((w) => w.id !== id));
  const minimizeWindow = (id) => setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)));
  const maximizeWindow = (id) =>
    setWindows((ws) => ws.map((w) => {
      if (w.id !== id) return w;
      if (w.isMaximized) {
        const p = w.prev || { x: 100, y: 80, w: 900, h: 560 };
        return { ...w, isMaximized: false, x: p.x, y: p.y, w: p.w, h: p.h, prev: null };
      }
      return { ...w, isMaximized: true, prev: { x: w.x, y: w.y, w: w.w, h: w.h }, x: 0, y: 28, w: window.innerWidth, h: window.innerHeight - 28 };
    }));
  const focusWindow = (id) => {
    setActiveId(id);
    setNextZ((z) => {
      setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, z } : w)));
      return z + 1;
    });
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!dragRef.current) return;
      const { id, type, startX, startY, orig } = dragRef.current;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      setWindows((ws) => ws.map((w) => {
        if (w.id !== id) return w;
        if (type === "move") {
          if (w.isMaximized) return w;
          // allow window to sink under dock - only clamp to viewport, not dock
          return { ...w, x: orig.x + dx, y: Math.max(28, orig.y + dy) };
        }
        let nx = orig.x, ny = orig.y, nw = orig.w, nh = orig.h;
        if (type.includes("e")) nw = Math.max(360, orig.w + dx);
        if (type.includes("s")) nh = Math.max(260, orig.h + dy);
        if (type.includes("w")) { nw = Math.max(360, orig.w - dx); nx = orig.x + dx; }
        if (type.includes("n")) { nh = Math.max(260, orig.h - dy); ny = orig.y + dy; }
        if (nx < 0) { nw += nx; nx = 0; }
        if (ny < 28) { nh += ny - 28; ny = 28; }
        // allow resize to go under dock - clamp only to viewport bottom
        if (ny + nh > window.innerHeight) nh = Math.max(260, window.innerHeight - ny);
        if (nx + nw > window.innerWidth) nw = window.innerWidth - nx;
        return { ...w, x: nx, y: ny, w: nw, h: nh, isMaximized: false };
      }));
    };
    const onUp = () => (dragRef.current = null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, []);

  const anyMaximized = useMemo(() => windows.some((w) => !w.isMinimized && w.isMaximized), [windows]);

  // Auto-hide dock: check if any window's bottom edge overlaps the dock zone
  useEffect(() => {
    const DOCK_HEIGHT = settings.dockSize + 24; // dock + padding
    const viewportH = window.innerHeight;
    const dockTop = viewportH - DOCK_HEIGHT;
    const overlaps = windows.some((w) => {
      if (w.isMinimized) return false;
      if (w.isMaximized) return true;
      return (w.y + w.h) > dockTop;
    });
    setDockHidden(overlaps && !dockHover);
  }, [windows, dockHover, settings.dockSize]);
  const activeAppName = useMemo(() => {
    const win = windows.find((w) => w.id === activeId && !w.isMinimized);
    if (!win) return "Files";
    const def = getApp(win.appId);
    return def?.name || win.title;
  }, [windows, activeId]);

  const handleAppLauncher = (e) => {
    e?.stopPropagation();
    if (notificationOpen) setNotificationOpen(false);
    if (controlOpen) setControlOpen(false);
    setLauncherOpen((o) => !o);
  };
  const handleNotification = (e) => { e?.stopPropagation(); setControlOpen(false); setLauncherOpen(false); setNotificationOpen((v) => !v); };
  const handleControl = (e) => { e?.stopPropagation(); setNotificationOpen(false); setLauncherOpen(false); setControlOpen((v) => !v); };
  const handleSearch = (e) => { e?.stopPropagation(); setQuickSearchOpen(true); };
  const onDesktopContext = (e) => { e.preventDefault(); setWallpaperMenu({ x: e.clientX, y: e.clientY }); };
  const cycleWallpaper = () => { setWallpaperIdx((i) => (i + 1) % WALLPAPERS.length); setWallpaperMenu(null); };
  const doShutdown = () => {
    setBootPhase("shutdown");
    setNotificationOpen(false); setControlOpen(false); setLauncherOpen(false);
    setTimeout(() => document.exitFullscreen?.().catch(() => {}), 900);
  };
  const doLock = () => { setBootPhase("lock"); setPassword(""); };
  const unlock = (e) => { e?.preventDefault(); setBootPhase("desktop"); setPassword(""); setTimeout(() => requestFs(), 100); };

  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/api/projects").then((r) => r.json()).then((d) => setProjects(Array.isArray(d) ? d : [])).catch(() => {});
    fetch("/api/blogs").then((r) => r.json()).then((d) => setBlogs(Array.isArray(d) ? d : [])).catch(() => {});
  }, []);

  const timeStr = time.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "2-digit" }) + " " + time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });

  if (bootPhase === "boot") return <BootScreen containerRef={containerRef} />;
  if (bootPhase === "lock") return <LockScreen containerRef={containerRef} wallpaperStyle={wallpaperStyle} settings={settings} timeStr={timeStr} password={password} setPassword={setPassword} pwVisible={pwVisible} setPwVisible={setPwVisible} failed={failed} onUnlock={unlock} />;
  if (bootPhase === "shutdown") return <ShutdownScreen containerRef={containerRef} onReboot={() => { setBootPhase("boot"); setWindows([]); }} />;

  return (
    <div
      ref={containerRef}
      className={`w-screen h-screen relative overflow-hidden flex flex-col select-none ${settings.theme === "light" ? "bg-[#e8e8ed]" : "bg-[#1a1a1e]"}`}
      style={{ filter: `brightness(${brightness}%)` }}
      onContextMenu={onDesktopContext}
      onClick={() => { setNotificationOpen(false); setControlOpen(false); setWallpaperMenu(null); }}
    >
      <motion.div key={wallpaperIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="absolute inset-0" style={wallpaperStyle} />
      <div className="absolute inset-0 bg-black/[0.04] pointer-events-none" />

      <TopBar
        timeStr={timeStr}
        activeApp={activeAppName}
        overviewOpen={launcherOpen}
        calendarOpen={notificationOpen}
        quickOpen={controlOpen}
        onOverview={handleAppLauncher}
        onCalendar={handleNotification}
        onQuick={handleControl}
        onSearch={handleSearch}
        onBattery={() => { showToast("Battery 100% • Charging • 4h 12m left"); setControlOpen(true); }}
        onWifi={() => handleControl()}
        showToast={showToast}
      />

      <AnimatePresence>
        {controlOpen && (
          <motion.div key="control" onClick={(e) => e.stopPropagation()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <QuickSettingsPanel settings={settings} setSettings={setSettings} onShutdown={doShutdown} onLock={doLock} volume={volume} setVolume={setVolume} brightness={brightness} setBrightness={setBrightness} onOpenApp={openApp} showToast={showToast} onClose={() => setControlOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {notificationOpen && (
          <motion.div key="notification" onClick={(e) => e.stopPropagation()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <NotificationsPanel onClose={() => setNotificationOpen(false)} onOpenApp={openApp} showToast={showToast} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {launcherOpen && (
          <AppLauncher windows={windows} onFocus={focusWindow} onClose={closeWindow} onOpenApp={openApp} query={launcherQuery} setQuery={setLauncherQuery} onExit={() => setLauncherOpen(false)} />
        )}
      </AnimatePresence>

      <div ref={desktopRef} className="relative flex-1 overflow-hidden" onClick={() => { setNotificationOpen(false); setControlOpen(false); }}>
        <div className="absolute inset-0" />
        <AnimatePresence>
          {windows.map((w) => !w.isMinimized && (
            <motion.div
              key={w.id}
              layout
              initial={{ opacity: 0, scale: 0.88, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.86, y: 10, transition: { duration: 0.18 } }}
              transition={{ type: "spring", damping: 26, stiffness: 380 }}
            >
              <Window
                win={w}
                isActive={activeId === w.id}
                onFocus={focusWindow}
                onClose={closeWindow}
                onMinimize={minimizeWindow}
                onMaximize={maximizeWindow}
                onDragStart={(e, win) => {
                  focusWindow(win.id);
                  dragRef.current = { id: win.id, type: "move", startX: e.clientX, startY: e.clientY, orig: { x: win.x, y: win.y, w: win.w, h: win.h } };
                }}
                onResizeStart={(e, win, dir) => {
                  dragRef.current = { id: win.id, type: dir, startX: e.clientX, startY: e.clientY, orig: { x: win.x, y: win.y, w: win.w, h: win.h } };
                }}
              >
                {renderAppContent(w.appId, w.payload, { openApp, openBrowser, settings, setSettings, wallpaperIdx, setWallpaperIdx })}
              </Window>
            </motion.div>
          ))}
        </AnimatePresence>

      </div>

      {/* Dock - auto-hides when a window overlaps, no beam */}
      <motion.div
        ref={dockRef}
        className="absolute bottom-0 left-0 right-0 z-[100] flex justify-center pb-2 pointer-events-none"
        animate={{ y: dockHidden ? 120 : 0, opacity: dockHidden ? 0 : 1 }}
        transition={{ type: "spring", damping: 32, stiffness: 340 }}
        onMouseEnter={() => setDockHover(true)}
        onMouseLeave={() => setDockHover(false)}
        style={{ pointerEvents: "auto" }}
      >
        <Dock settings={settings} windows={windows} activeId={activeId} onOpenApp={openApp} onOverview={handleAppLauncher} overviewOpen={launcherOpen} anyMaximized={false} />
      </motion.div>

      <WallpaperMenu pos={wallpaperMenu} onClose={() => setWallpaperMenu(null)} onCycle={cycleWallpaper} onOpenSettings={() => openApp("settings")} onOpenTerminal={() => openApp("terminal")} />

      <AnimatePresence>
        {quickSearchOpen && (
          <QuickSearch
            query={quickSearchQuery}
            setQuery={setQuickSearchQuery}
            onClose={() => setQuickSearchOpen(false)}
            onOpenApp={openApp}
            projects={projects}
            blogs={blogs}
            onOpenProject={(slug) => openBrowser(projects.find((p) => p.slug === slug)?.website || projects.find((p) => p.slug === slug)?.github)}
            onOpenBlog={() => openApp("notes")}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {escCount > 0 && (
          <motion.div initial={{ opacity: 0, y: -8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.96 }} className="absolute top-8 left-1/2 -translate-x-1/2 z-30 bg-black/70 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
            Press Esc {3 - escCount} more time{3 - escCount !== 1 ? "s" : ""} to exit fullscreen / shutdown
          </motion.div>
        )}
      </AnimatePresence>
      {/* global toast - confirms every action */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 12, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/85 backdrop-blur text-white text-xs px-4 py-2 rounded-full border border-white/15 shadow-xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
