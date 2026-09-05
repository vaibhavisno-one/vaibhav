"use client";
import { useState, useRef, useCallback } from "react";
import {
  SunMedium,
  Image as ImageIcon,
  PanelBottom,
  Info,
  Moon,
  Leaf,
  Check,
} from "lucide-react";
import AppIcon from "../AppIcon";

const SECTIONS = [
  { id: "appearance", label: "Appearance", icon: SunMedium },
  { id: "wallpaper", label: "Wallpaper", icon: ImageIcon },
  { id: "dock", label: "Dock", icon: PanelBottom },
  { id: "about", label: "About", icon: Info },
];

function Slider({ value, min, max, onChange, format }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#78716C]">
          {format.label}
        </span>
        <span className="text-[11.5px] tabular-nums px-2 py-[3px] rounded-full bg-white/[0.05] border border-white/[0.07] text-[#CFC9BF]">
          {format.value(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 cursor-pointer appearance-none rounded-full bg-white/[0.08] accent-[#D6C5A8]"
        style={{ accentColor: "#D6C5A8" }}
      />
      {format.hint && (
        <p className="mt-1.5 text-[11px] text-[#5B5650]">{format.hint}</p>
      )}
    </div>
  );
}

export default function SettingsApp({
  settings,
  setSettings,
  wallpapers,
  wallpaperIdx,
  setWallpaperIdx,
  brightness = 100,
  setBrightness,
}) {
  const { iconSize, dockSize, blurDesktop } = settings;
  const update = (k, v) => setSettings((s) => ({ ...s, [k]: v }));
  const [active, setActive] = useState("appearance");
  const scrollRef = useRef(null);
  const sectionRefs = useRef({});

  const jump = useCallback((id) => {
    setActive(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onScroll = (e) => {
    const el = e.currentTarget;
    const top = el.scrollTop + 80;
    let current = "appearance";
    for (const s of SECTIONS) {
      const node = sectionRefs.current[s.id];
      if (node && node.offsetTop <= top) current = s.id;
    }
    setActive((prev) => (prev === current ? prev : current));
  };

  return (
    <div className="h-full flex bg-[#161614] text-[#EDE9E1] overflow-hidden select-text">
      {/* ——— Sidebar · calm tune ——— */}
      <aside className="w-[190px] shrink-0 hidden sm:flex flex-col bg-[#1A1A18]/80 border-r border-white/[0.06]">
        <div className="px-4 pt-5 pb-3">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#78716C]">
            Tune
          </p>
          <h2 className="mt-1 text-[15px] font-medium tracking-tight text-[#EDE9E1]">
            Settings
          </h2>
          <p className="mt-1 text-[11px] leading-relaxed text-[#78716C]">
            Small knobs,
            <br />
            softly tuned.
          </p>
        </div>

        <div className="px-3 space-y-1">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => jump(s.id)}
                className={`w-full group flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all duration-200 ${
                  isActive
                    ? "bg-[#EDE9E1] text-[#1C1C1A] shadow-[0_4px_16px_rgba(237,233,225,0.12)]"
                    : "text-[#A8A29E] hover:text-[#EDE9E1] hover:bg-white/[0.05]"
                }`}
              >
                <span
                  className={`w-7 h-7 grid place-items-center rounded-lg shrink-0 transition ${
                    isActive
                      ? "bg-[#1C1C1A]/10 text-[#1C1C1A]"
                      : "bg-white/[0.05] text-[#A8A29E] group-hover:text-[#EDE9E1]"
                  }`}
                >
                  <s.icon size={13} strokeWidth={1.8} />
                </span>
                <span className="flex-1 text-[12.5px] font-medium leading-none">
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-auto p-3">
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3">
            <div className="flex items-center gap-1.5 text-[#C9B99A]">
              <Leaf size={12} strokeWidth={1.8} />
              <span className="text-[11px] font-medium tracking-wide">Gentle only</span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-[#78716C]">
              Every knob here
              <br />
              does something real.
            </p>
          </div>
        </div>
      </aside>

      {/* ——— Content ——— */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex-1 min-w-0 overflow-y-auto scroll-smooth"
      >
        <div className="max-w-[600px] mx-auto px-4 sm:px-6 py-6 pb-10 space-y-8">
          {/* Mobile section pills */}
          <div className="sm:hidden flex items-center gap-1.5 overflow-x-auto pb-1">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => jump(s.id)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-[11.5px] font-medium transition ${
                  active === s.id
                    ? "bg-[#EDE9E1] text-[#1C1C1A]"
                    : "bg-white/[0.04] border border-white/[0.07] text-[#A8A29E]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Appearance */}
          <section
            ref={(n) => {
              sectionRefs.current.appearance = n;
            }}
            className="scroll-mt-4"
          >
            <h3 className="text-[14px] font-medium tracking-tight text-[#EDE9E1]">
              Appearance
            </h3>
            <p className="mt-0.5 text-[11.5px] text-[#78716C]">
              Light on the eyes, always.
            </p>
            <div className="mt-3 space-y-3">
              <div className="p-4 rounded-[20px] border border-white/[0.06] bg-[#1F1F1C] flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#D6C5A8]/12 border border-[#D6C5A8]/20 grid place-items-center text-[#D6C5A8] shrink-0">
                  <Moon size={16} strokeWidth={1.8} />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium text-[#EDE9E1]">Dark, always</div>
                  <div className="text-[11.5px] text-[#78716C] font-light">
                    One calm theme — easy at night, kind by day.
                  </div>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 text-[10.5px] font-medium px-2.5 py-1 rounded-full bg-emerald-200/10 border border-emerald-200/20 text-emerald-100/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" /> On
                </span>
              </div>
              <div className="p-4 rounded-[20px] border border-white/[0.06] bg-[#1F1F1C]">
                <Slider
                  value={brightness}
                  min={75}
                  max={130}
                  onChange={(v) => setBrightness?.(v)}
                  format={{
                    label: "Brightness",
                    value: (v) => `${v}%`,
                    hint: "Wraps the whole desktop in a softer or brighter light.",
                  }}
                />
              </div>
            </div>
          </section>

          {/* Wallpaper */}
          <section
            ref={(n) => {
              sectionRefs.current.wallpaper = n;
            }}
            className="scroll-mt-4"
          >
            <h3 className="text-[14px] font-medium tracking-tight text-[#EDE9E1]">
              Wallpaper
            </h3>
            <p className="mt-0.5 text-[11.5px] text-[#78716C]">
              Pick the view behind everything.
            </p>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {wallpapers.map((w, i) => {
                const isSel = i === wallpaperIdx;
                return (
                  <button
                    key={w.id || w.name || i}
                    onClick={() => setWallpaperIdx(i)}
                    className={`group relative aspect-[16/10] rounded-[18px] overflow-hidden border transition-all duration-300 hover:-translate-y-[2px] ${
                      isSel
                        ? "border-[#D6C5A8]/50 ring-1 ring-[#D6C5A8]/30 shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
                        : "border-white/[0.07] hover:border-[#D6C5A8]/25"
                    }`}
                  >
                    {w.gradient ? (
                      <div style={{ background: w.gradient }} className="w-full h-full" />
                    ) : (
                      <img
                        src={w.url}
                        alt={w.name}
                        loading="lazy"
                        className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 group-hover:scale-[1.04] transition-all duration-500"
                      />
                    )}
                    <span className="absolute bottom-1.5 left-1.5 text-[10px] font-medium px-2 py-[3px] rounded-full bg-black/45 backdrop-blur-md text-white/85 border border-white/15 capitalize">
                      {w.name}
                    </span>
                    {isSel && (
                      <span className="absolute top-1.5 right-1.5 w-5 h-5 grid place-items-center rounded-full bg-[#EDE9E1] text-[#1C1C1A]">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Dock */}
          <section
            ref={(n) => {
              sectionRefs.current.dock = n;
            }}
            className="scroll-mt-4"
          >
            <h3 className="text-[14px] font-medium tracking-tight text-[#EDE9E1]">
              Dock
            </h3>
            <p className="mt-0.5 text-[11.5px] text-[#78716C]">
              Size it to your hand.
            </p>
            <div className="mt-3 space-y-3">
              <div className="p-4 rounded-[20px] border border-white/[0.06] bg-[#1F1F1C]">
                <Slider
                  value={iconSize}
                  min={28}
                  max={56}
                  onChange={(v) => update("iconSize", v)}
                  format={{ label: "Icon size", value: (v) => `${v}px` }}
                />
                <div className="mt-3 flex items-center gap-2.5 rounded-2xl bg-black/25 border border-white/[0.06] px-3 py-2.5">
                  <AppIcon appId="terminal" size={iconSize * 0.62} />
                  <AppIcon appId="files" size={iconSize * 0.62} />
                  <AppIcon appId="browser" size={iconSize * 0.62} />
                  <span className="ml-auto text-[10.5px] text-[#5B5650]">Live preview</span>
                </div>
              </div>
              <div className="p-4 rounded-[20px] border border-white/[0.06] bg-[#1F1F1C]">
                <Slider
                  value={dockSize}
                  min={48}
                  max={72}
                  onChange={(v) => update("dockSize", v)}
                  format={{ label: "Dock size", value: (v) => `${v}px` }}
                />
              </div>
              <button
                onClick={() => update("blurDesktop", !blurDesktop)}
                className="w-full p-4 rounded-[20px] border border-white/[0.06] bg-[#1F1F1C] flex items-center gap-3 text-left hover:border-white/[0.1] transition"
              >
                <span className="flex-1 min-w-0">
                  <span className="block text-[13px] font-medium text-[#EDE9E1]">
                    Soften the lock screen
                  </span>
                  <span className="block text-[11.5px] text-[#78716C] font-light mt-0.5">
                    Extra blur behind the clock when locked.
                  </span>
                </span>
                <span
                  className={`w-10 h-[22px] rounded-full p-[3px] flex shrink-0 transition-colors duration-200 ${
                    blurDesktop ? "bg-[#D6C5A8] justify-end" : "bg-white/[0.1] justify-start"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-[#1C1C1A] shadow" />
                </span>
              </button>
            </div>
          </section>

          {/* About */}
          <section
            ref={(n) => {
              sectionRefs.current.about = n;
            }}
            className="scroll-mt-4"
          >
            <h3 className="text-[14px] font-medium tracking-tight text-[#EDE9E1]">
              About
            </h3>
            <div className="mt-3 p-5 rounded-[20px] border border-[#D6C5A8]/15 bg-[#1F1F1C] text-center">
              <div className="mx-auto w-11 h-11 rounded-2xl bg-[#EDE9E1] text-[#1C1C1A] grid place-items-center text-[16px] font-black">
                V
              </div>
              <p className="mt-3 text-[14px] font-medium text-[#EDE9E1]">Vaibhav OS</p>
              <p className="text-[11px] text-[#78716C]">v1.0 · Build 2026.08</p>
              <p className="mt-3 text-[12px] font-light leading-relaxed text-[#A8A29E]">
                A quiet little operating system for one portfolio — built with
                Next.js, Framer Motion and Tailwind. Dark-only, calm by default.
              </p>
              <p className="mt-4 text-[10.5px] text-[#5B5650]">
                — made slowly, with care —
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
