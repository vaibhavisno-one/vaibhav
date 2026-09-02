"use client";
import { Eye, EyeOff } from "lucide-react";

export default function LockScreen({ containerRef, wallpaperStyle, settings, timeStr, password, setPassword, pwVisible, setPwVisible, failed, onUnlock }) {
  const now = new Date();
  const timeBig = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  const dateBig = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  return (
    <div ref={containerRef} className="w-screen h-screen relative overflow-hidden flex flex-col select-none" style={wallpaperStyle}>
      <div className={`absolute inset-0 bg-black/25 backdrop-blur-[20px] ${settings.blurDesktop ? "" : "backdrop-blur-[10px]"}`} />

      {/* Top time like Vaibhav OS lock? center huge */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-white">
        <div className="text-[72px] font-extralight tracking-tight leading-none drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">{timeBig}</div>
        <div className="text-[15px] font-normal mt-2 tracking-wide drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]">{dateBig}</div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] bg-zinc-800">
            <img src="/yorolovo.jpeg" alt="avatar" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
          </div>
          <div className="text-center">
            <div className="text-[15px] font-medium drop-shadow">Vaibhav Kumar</div>
            <div className="text-xs text-white/70 mt-0.5">Enter Password to Unlock</div>
          </div>

          <form onSubmit={onUnlock} className="relative w-[220px]">
            <input
              type={pwVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className={`w-full px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl border text-[13px] text-white placeholder:text-white/60 outline-none pr-9 text-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] ${failed ? "border-red-400" : "border-white/30 focus:border-white/50"}`}
            />
            <button type="button" onClick={() => setPwVisible((v) => !v)} className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
              {pwVisible ? <EyeOff size={12} className="text-white/80" /> : <Eye size={12} className="text-white/80" />}
            </button>
          </form>

          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-white/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>

          <p className="text-[11px] text-white/50 mt-2">Press Enter • Any password • Hint: vaibhav</p>
          {failed && <p className="text-xs text-red-300">Incorrect password</p>}
        </div>
      </div>

      <div className="relative z-10 h-10 flex items-center justify-center pb-4">
        <div className="flex items-center gap-3 text-white/60 text-xs">
          <span>Sleep</span><span className="w-1 h-1 rounded-full bg-white/40" /><span>Restart</span><span className="w-1 h-1 rounded-full bg-white/40" /><span>Shut Down</span>
        </div>
      </div>
    </div>
  );
}
