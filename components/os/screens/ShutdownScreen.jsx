"use client";

export default function ShutdownScreen({ containerRef, onReboot }) {
  return (
    <div ref={containerRef} className="w-screen h-screen bg-black flex flex-col items-center justify-center text-white">
      <div className="w-14 h-14 rounded-[14px] bg-white flex items-center justify-center mb-6">
        <span className="text-[28px] font-black text-black leading-none">V</span>
      </div>
      <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-[spin_0.8s_linear_infinite] mb-4" />
      <p className="text-sm text-white/70">Shutting down Vaibhav OS…</p>
      <button onClick={onReboot} className="mt-6 px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200">Reboot</button>
    </div>
  );
}
