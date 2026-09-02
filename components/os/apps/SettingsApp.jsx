"use client";
import { Moon, Sparkles } from "lucide-react";
import AppIcon from "../AppIcon";

export default function SettingsApp({ settings, setSettings, wallpapers, wallpaperIdx, setWallpaperIdx }) {
  const { iconSize, dockSize, brightness, blurDesktop } = settings;
  const update = (k, v) => setSettings((s) => ({ ...s, [k]: v }));

  return (
    <div className="h-full flex bg-[#0f0f12] text-zinc-100">
      <div className="w-[200px] shrink-0 bg-[#17171a] border-r border-white/[0.06] p-3 space-y-1 text-sm">
        <div className="px-2 py-2 mb-2">
          <div className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">Settings</div>
          <div className="text-xs text-zinc-600 mt-0.5">Dark mode only</div>
        </div>
        {["Appearance", "Desktop", "Dock", "About"].map((t, i) => (
          <div key={t} className={`px-3 py-2 rounded-xl flex items-center gap-2 border text-[13px] ${i === 0 ? "bg-[#0a84ff] border-[#0a84ff] text-white shadow" : "bg-white/[0.04] border-white/[0.06] text-zinc-400"}`}>{t}</div>
        ))}
        <div className="mt-4 p-3 rounded-2xl bg-[#0f0f12] border border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs font-medium text-white"><Sparkles size={12} className="text-violet-400"/> Vaibhav OS</div>
          <div className="text-[11px] text-zinc-500 mt-1">Dark-only • OLED friendly</div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6 space-y-6 bg-[#0f0f12]">
        <section>
          <h3 className="font-semibold mb-3 text-white text-[13px] tracking-tight">Appearance — Dark Only</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl border bg-[#1a1a1e] border-white/[0.06] flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#0a84ff] flex items-center justify-center text-white"><Moon size={16} /></span>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">Dark Style</div>
                <div className="text-xs text-zinc-500">Locked — Always on</div>
              </div>
              <span className="ml-auto w-10 h-6 rounded-full p-0.5 flex justify-end bg-[#0a84ff]"><span className="w-5 h-5 rounded-full bg-white shadow" /></span>
            </div>
            <div className="p-4 rounded-2xl border bg-[#1a1a1e] border-white/[0.06]">
              <div className="text-xs font-semibold mb-2 text-zinc-400">Brightness — Brighter</div>
              <input type="range" min={80} max={130} value={brightness} onChange={(e) => update("brightness", Number(e.target.value))} className="w-full accent-[#0a84ff] h-1" />
              <div className="text-xs text-zinc-500 mt-1">{brightness}% • default 105</div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold mb-3 text-white text-[13px]">Wallpaper</h3>
          <div className="grid grid-cols-3 gap-3">
            {wallpapers.map((w, i) => (
              <button key={w.id} onClick={() => setWallpaperIdx(i)} className={`relative aspect-[16/9] rounded-2xl overflow-hidden border-2 ${i === wallpaperIdx ? "border-[#0a84ff] ring-2 ring-[#0a84ff]/30" : "border-white/10"}`}>
                {w.gradient ? <div style={{ background: w.gradient }} className="w-full h-full" /> : <img src={w.url} alt={w.name} className="w-full h-full object-cover" />}
                <span className="absolute bottom-1.5 left-1.5 text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-white border border-white/10">{w.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-semibold mb-3 text-white text-[13px]">Dock & Icons</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl border bg-[#1a1a1e] border-white/[0.06]">
              <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium text-white">Icon Size</span><span className="text-xs text-zinc-500">{iconSize}px</span></div>
              <input type="range" min={28} max={56} value={iconSize} onChange={(e) => update("iconSize", Number(e.target.value))} className="w-full accent-[#0a84ff] h-1" />
              <div className="flex items-center gap-2 mt-3">
                <AppIcon appId="terminal" size={iconSize * 0.7} />
                <AppIcon appId="files" size={iconSize * 0.7} />
                <AppIcon appId="browser" size={iconSize * 0.7} />
              </div>
            </div>

            <div className="p-4 rounded-2xl border bg-[#1a1a1e] border-white/[0.06]">
              <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium text-white">Dock Size</span><span className="text-xs text-zinc-500">{dockSize}px</span></div>
              <input type="range" min={48} max={72} value={dockSize} onChange={(e) => update("dockSize", Number(e.target.value))} className="w-full accent-[#0a84ff] h-1" />
            </div>

            <label className="flex items-center gap-3 p-4 rounded-2xl border cursor-pointer bg-[#1a1a1e] border-white/[0.06]">
              <input type="checkbox" checked={blurDesktop} onChange={(e) => update("blurDesktop", e.target.checked)} className="w-4 h-4 accent-[#0a84ff]" />
              <span className="text-sm font-medium text-zinc-200">Blur desktop when overview / lock screen</span>
            </label>
          </div>
        </section>

        <section className="p-4 rounded-2xl border bg-[#1a1a1e] border-white/[0.06]">
          <h3 className="font-semibold mb-1 text-white">About Vaibhav OS</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">Dark-only OS • Built with Next.js 16, Framer Motion, Tailwind 4. Fullscreen enforced — press Esc 3× or Power Off to exit. Global search: Ctrl+K. Right-click desktop to change wallpaper.</p>
        </section>
      </div>
    </div>
  );
}
