"use client";
import { useState, useEffect } from "react";
import { Image as PhotoIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotosApp() {
  const [photos, setPhotos] = useState([]);
  const [active, setActive] = useState(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => { fetch("/api/photos").then((r) => r.json()).then((d) => setPhotos(d.photos || [])).catch(() => {}); }, []);

  const openAt = (i) => { setIdx(i); setActive(photos[i]); };

  return (
    <div className="h-full flex flex-col bg-[#1c1c1e] text-white">
      <div className="h-10 flex items-center gap-2 px-3 border-b border-white/10 bg-[#2a2a2a]">
        <PhotoIcon size={16} className="text-white/70" />
        <span className="text-sm font-medium">Photos</span>
        <span className="text-xs text-white/40 ml-2">{photos.length} images</span>
      </div>

      <div className="flex-1 overflow-auto p-3">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {photos.map((src, i) => (
            <button key={src + i} onClick={() => openAt(i)} className="group aspect-square rounded-xl overflow-hidden bg-zinc-800 border border-white/10 hover:border-white/20 relative">
              <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-[1.04] transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
          {photos.length === 0 && <div className="col-span-3 text-sm text-white/50 p-8 text-center">No images found yet. Add files to /public.</div>}
        </div>
      </div>

      {active && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur flex flex-col z-10">
          <div className="h-12 flex items-center justify-between px-4 border-b border-white/10 bg-black/40">
            <span className="text-sm truncate text-white">{active}</span>
            <button onClick={() => setActive(null)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center"><X size={16} /></button>
          </div>
          <div className="flex-1 relative flex items-center justify-center p-6">
            <button onClick={() => { const ni = (idx - 1 + photos.length) % photos.length; setIdx(ni); setActive(photos[ni]); }} className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><ChevronLeft size={20} /></button>
            <img src={active} alt="" className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/10 object-contain" />
            <button onClick={() => { const ni = (idx + 1) % photos.length; setIdx(ni); setActive(photos[ni]); }} className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><ChevronRight size={20} /></button>
          </div>
          <div className="p-3 flex items-center justify-center gap-2 overflow-x-auto border-t border-white/10 bg-black/20">
            {photos.map((p, i) => (
              <button key={p + i} onClick={() => openAt(i)} className={`w-12 h-12 rounded-md overflow-hidden border-2 shrink-0 ${i === idx ? "border-white" : "border-transparent opacity-60 hover:opacity-100"}`}>
                <img src={p} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
