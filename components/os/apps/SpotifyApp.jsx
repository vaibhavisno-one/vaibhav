"use client";
import { useState, useEffect, useCallback } from "react";
import { Music, RotateCcw, Play, SkipBack, SkipForward, ExternalLink } from "lucide-react";

export default function SpotifyApp() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTrack = useCallback(async () => {
    try { const r = await fetch("/api/spotify"); const d = await r.json(); setTrack(d); } catch {} finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchTrack(); const id = setInterval(fetchTrack, 30000); return () => clearInterval(id); }, [fetchTrack]);

  const embedUrl = track?.songUrl ? track.songUrl.replace("open.spotify.com/track/", "open.spotify.com/embed/track/") : null;

  return (
    <div className="h-full flex flex-col bg-[#0a0a0a] text-white">
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center text-black"><Music size={22} /></div>
            <div>
              <h2 className="text-xl font-bold leading-none">Spotify</h2>
              <p className="text-xs text-white/50">Now Playing — Vaibhav</p>
            </div>
            <button onClick={fetchTrack} className="ml-auto text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 flex items-center gap-1"><RotateCcw size={12} /> Refresh</button>
          </div>

          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-48 bg-white/5 rounded-xl" />
              <div className="h-4 bg-white/5 rounded w-1/2" />
            </div>
          ) : track ? (
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 p-4 flex gap-4">
                <img src={track.albumImageUrl || "https://via.placeholder.com/120"} alt={track.title} className="w-28 h-28 rounded-md object-cover shadow-lg border border-white/10" />
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="text-xs font-bold tracking-widest text-[#1DB954] uppercase mb-1">{track.isPlaying ? "● Now Playing" : "Last Played"}</div>
                  <div className="font-bold text-lg leading-tight truncate">{track.title || "Not Playing"}</div>
                  <div className="text-sm text-white/60 truncate">by {track.artist || "Unknown"}</div>
                  {track.album && <div className="text-xs text-white/40 truncate mt-1">Album: {track.album}</div>}
                  <div className="flex items-center gap-2 mt-3">
                    <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition"><Play size={14} fill="black" /></button>
                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15"><SkipBack size={14} /></button>
                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15"><SkipForward size={14} /></button>
                  </div>
                </div>
              </div>

              {track.songUrl && <a href={track.songUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-[#1DB954] text-black font-semibold hover:brightness-110"><ExternalLink size={14} /> Open in Spotify</a>}

              {embedUrl && (
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                  <iframe src={embedUrl} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="w-full" />
                </div>
              )}

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
                <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#1DB954]" /> About this integration</h3>
                <p className="text-xs text-white/60 leading-relaxed">This pulls your last played / currently playing track via Spotify Web API using refresh token. Endpoint <code>/api/spotify</code> caches for 30s and falls back to recently played when nothing is playing.</p>
              </div>
            </div>
          ) : (
            <div className="text-sm text-white/50">No track data available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
