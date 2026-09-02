"use client";

export default function BootScreen({ containerRef }) {
  return (
    <div ref={containerRef} className="w-screen h-screen bg-[#0a0a0f] flex flex-col items-center justify-center relative overflow-hidden select-none">
      {/* Vaibhav OS logo — custom V */}
      <div className="flex flex-col items-center gap-8">
        <div className="w-20 h-20 rounded-[18px] bg-white flex items-center justify-center shadow-[0_8px_30px_rgba(255,255,255,0.12)] border border-white/10">
          <span className="text-[42px] font-black tracking-tighter text-black leading-none" style={{ fontFamily: "var(--font-inter)" }}>V</span>
          <span className="absolute mt-[28px] ml-[22px] w-2 h-2 rounded-full bg-[#0a84ff]" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-[13px] font-semibold tracking-[0.18em] uppercase">Vaibhav OS</p>
          <div className="w-40 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full animate-[bootProgress_2.2s_ease-in-out_forwards]" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <style>{`@keyframes bootProgress{0%{transform:translateX(-100%)}100%{transform:translateX(0)}}`}</style>
      <div className="absolute bottom-10 text-[11px] text-white/30 tracking-wide">Vaibhav OS • v1.0 • Vaibhav Kumar</div>
    </div>
  );
}
