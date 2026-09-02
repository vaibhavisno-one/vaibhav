"use client";
import { Moon, Sun } from "lucide-react";
import AppIcon from "../AppIcon";

export default function SettingsApp({ settings, setSettings, wallpapers, wallpaperIdx, setWallpaperIdx }) {
  const { theme, iconSize, dockSize, brightness, blurDesktop } = settings;
  const update = (k, v) => setSettings((s) => ({ ...s, [k]: v }));

  return (
    <div className="h-full flex bg-[#f0f0f0] dark:bg-[#1e1e1e] text-zinc-800 dark:text-zinc-100">
      <div className="w-[180px] shrink-0 bg-[#e8e8e8] dark:bg-[#252525] border-r border-black/10 dark:border-white/10 p-3 space-y-1 text-sm">
        {["Appearance", "Desktop", "Dock", "About"].map((t, i) => (
          <div key={t} className={`px-3 py-2 rounded-lg flex items-center gap-2 ${i === 0 ? "bg-[#4a90e2] text-white" : "hover:bg-black/5 dark:hover:bg-white/10"}`}>{t}</div>
        ))}
      </div>

      <div className="flex-1 overflow-auto p-6 space-y-6">
        <section>
          <h3 className="font-semibold mb-3">Appearance</h3>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => update("theme", theme === "dark" ? "light" : "dark")} className={`p-4 rounded-xl border flex items-center gap-3 ${theme === "dark" ? "bg-zinc-900 text-white border-zinc-700" : "bg-white border-black/10"}`}>
              {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />} <span className="text-sm font-medium">{theme === "dark" ? "Dark Style" : "Light Style"}</span>
              <span className={`ml-auto w-10 h-6 rounded-full p-0.5 flex ${theme === "dark" ? "justify-end bg-[#4a90e2]" : "justify-start bg-zinc-300"}`}><span className="w-5 h-5 rounded-full bg-white shadow" /></span>
            </button>
            <div className={`p-4 rounded-xl border ${theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-white border-black/10"}`}>
              <div className="text-xs font-semibold mb-2">Brightness</div>
              <input type="range" min={70} max={120} value={brightness} onChange={(e) => update("brightness", Number(e.target.value))} className="w-full slider" />
              <div className="text-xs text-zinc-500 mt-1">{brightness}%</div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold mb-3">Wallpaper</h3>
          <div className="grid grid-cols-3 gap-3">
            {wallpapers.map((w, i) => (
              <button key={w.id} onClick={() => setWallpaperIdx(i)} className={`relative aspect-[16/9] rounded-xl overflow-hidden border-2 ${i === wallpaperIdx ? "border-[#4a90e2] ring-2 ring-[#4a90e2]/30" : "border-black/10 dark:border-white/10"}`}>
                {w.gradient ? <div style={{ background: w.gradient }} className="w-full h-full" /> : <img src={w.url} alt={w.name} className="w-full h-full object-cover" />}
                <span className="absolute bottom-1 left-1 text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-white">{w.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-semibold mb-3">Dock & Icons</h3>
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border ${theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-white border-black/10"}`}>
              <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">Icon Size</span><span className="text-xs text-zinc-500">{iconSize}px</span></div>
              <input type="range" min={28} max={56} value={iconSize} onChange={(e) => update("iconSize", Number(e.target.value))} className="w-full slider" />
              <div className="flex items-center gap-2 mt-3">
                <AppIcon appId="terminal" size={iconSize * 0.7} />
                <AppIcon appId="files" size={iconSize * 0.7} />
                <AppIcon appId="browser" size={iconSize * 0.7} />
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-white border-black/10"}`}>
              <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">Dock Size</span><span className="text-xs text-zinc-500">{dockSize}px</span></div>
              <input type="range" min={48} max={72} value={dockSize} onChange={(e) => update("dockSize", Number(e.target.value))} className="w-full slider" />
            </div>

            <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer ${theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-white border-black/10"}`}>
              <input type="checkbox" checked={blurDesktop} onChange={(e) => update("blurDesktop", e.target.checked)} className="w-4 h-4" />
              <span className="text-sm font-medium">Blur desktop when overview / lock screen</span>
            </label>
          </div>
        </section>

        <section className={`p-4 rounded-xl border ${theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-white border-black/10"}`}>
          <h3 className="font-semibold mb-1">About Vaibhav OS</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">Fedora Workstation 40 inspired • GNOME 46 shell • Built with Next.js 16, Framer Motion, Tailwind 4. Fullscreen enforced — press Esc 3× or Power Off to exit. Global search: Ctrl+K. Right-click desktop to change wallpaper.</p>
        </section>
      </div>
    </div>
  );
}
