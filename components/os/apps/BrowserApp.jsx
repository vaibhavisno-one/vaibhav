"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { Globe, ChevronLeft, ChevronRight, RotateCw, Search, X, Plus, Lock, ShieldCheck, Copy, ExternalLink, FileText, AlertTriangle } from "lucide-react";

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  if (h < 21) return "Good evening";
  return "Good night";
}

const BLOCKED_HOSTS = ["github.com", "google.com", "www.google.com", "accounts.google.com"];

function isPdfUrl(u) {
  try {
    const url = new URL(u);
    return url.pathname.toLowerCase().endsWith(".pdf");
  } catch {
    return u.toLowerCase().endsWith(".pdf") || u.includes("Resume.pdf");
  }
}

function hostOf(u) {
  try { return new URL(u).hostname.replace(/^www\./, "").toLowerCase(); } catch { return ""; }
}

export default function BrowserApp({ initialUrl }) {
  const initialIsNewTab = !initialUrl || initialUrl === "https://www.google.com" || initialUrl === "https://www.google.com/";
  const [tabs, setTabs] = useState(() => [{ id: 1, url: initialIsNewTab ? "" : initialUrl, title: "New Tab" }]);
  const [activeId, setActiveId] = useState(1);
  const [input, setInput] = useState(initialIsNewTab ? "" : initialUrl || "");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);
  const iframeRef = useRef(null);
  const newTabInputRef = useRef(null);
  const active = tabs.find((t) => t.id === activeId);

  const isNewTab = !active?.url;
  const isSearch = active?.url?.startsWith("search:");
  const searchQuery = isSearch ? decodeURIComponent(active.url.slice(7)) : "";
  const isPdf = !isNewTab && !isSearch && isPdfUrl(active.url || "");
  const host = useMemo(() => (!active?.url || isSearch ? "new tab" : hostOf(active.url) || "new tab"), [active?.url, isSearch]);
  const isBlockedHost = useMemo(() => {
    if (isNewTab || isSearch || isPdf) return false;
    const h = hostOf(active.url);
    return BLOCKED_HOSTS.some((b) => h === b || h.endsWith("." + b));
  }, [active?.url, isNewTab, isSearch, isPdf, host]);

  const greeting = useMemo(() => getGreeting(), []);
  const timeStr = useMemo(() => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }), []);

  const navigate = (raw) => {
    let u = raw.trim();
    if (!u) return;
    // search query without dot -> internal search page (no google iframe)
    const isSearchQuery = !/^https?:\/\//i.test(u) && (!u.includes(".") || u.includes(" "));
    if (isSearchQuery) {
      const q = u;
      const pseudo = `search:${encodeURIComponent(q)}`;
      setTabs((ts) => ts.map((t) => (t.id === activeId ? { ...t, url: pseudo } : t)));
      setInput(q);
      setEmbedFailed(false);
      setIsLoading(false);
      return;
    }
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    setIsLoading(true);
    setEmbedFailed(false);
    setTabs((ts) => ts.map((t) => (t.id === activeId ? { ...t, url: u } : t)));
    setInput(u);
    setTimeout(() => setIsLoading(false), 900);
  };

  useEffect(() => { setInput(isSearch ? searchQuery : active?.url || ""); setEmbedFailed(false); }, [activeId]);
  useEffect(() => {
    if (initialUrl && initialUrl !== active?.url) {
      // external trigger from Projects -> internal only
      const isSearchTrigger = !initialUrl.includes(".") || initialUrl.startsWith("search:");
      if (isSearchTrigger && !initialUrl.startsWith("http")) {
        navigate(initialUrl);
      } else {
        setTabs((ts) => ts.map((t) => (t.id === activeId ? { ...t, url: initialUrl } : t)));
        setInput(initialUrl);
        setEmbedFailed(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialUrl]);

  const addTab = () => {
    const id = Date.now();
    setTabs((ts) => [...ts, { id, url: "", title: "New Tab" }]);
    setActiveId(id);
    setInput("");
    setEmbedFailed(false);
    setTimeout(() => newTabInputRef.current?.focus(), 50);
  };

  const closeTab = (id) => {
    const next = tabs.filter((t) => t.id !== id);
    if (next.length === 0) {
      const nid = Date.now();
      setTabs([{ id: nid, url: "", title: "New Tab" }]);
      setActiveId(nid);
      setInput("");
    } else {
      setTabs(next);
      if (id === activeId) setActiveId(next[next.length - 1].id);
    }
    setEmbedFailed(false);
  };

  const handleCopy = async (text) => {
    try { await navigator.clipboard.writeText(text || active?.url || ""); setCopied(true); setTimeout(() => setCopied(false), 1400); } catch {}
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    // detect X-Frame-Options block by trying to access contentDocument
    try {
      const doc = iframeRef.current?.contentDocument;
      // if blocked, doc is null or access throws. For same-origin PDFs it succeeds, for cross-origin blocked it throws or is null.
      // Cross-origin allowed sites will have doc == null without throw, so we can't rely. Use blocked host list + fallback timer.
      if (isBlockedHost) setEmbedFailed(true);
      else if (doc && doc.body && doc.body.innerHTML.includes("refused to connect")) setEmbedFailed(true);
    } catch {
      setEmbedFailed(true);
    }
  };

  // Fallback: if host is known blocked, mark failed immediately
  useEffect(() => { if (isBlockedHost) setEmbedFailed(true); else setEmbedFailed(false); }, [isBlockedHost]);

  return (
    <div className="h-full flex flex-col bg-[#0f0f12] text-zinc-100 selection:bg-[#0a84ff]/30">
      {/* Tabs */}
      <div className="h-[42px] flex items-center gap-1 px-2 bg-[#17171a] border-b border-white/[0.06] shrink-0">
        <div className="flex items-center gap-1 flex-1 min-w-0 overflow-x-auto scrollbar-none">
          {tabs.map((t) => {
            const isActive = t.id === activeId;
            let label = "New Tab";
            if (t.url) {
              if (t.url.startsWith("search:")) label = `Search: ${decodeURIComponent(t.url.slice(7)).slice(0,18)}`;
              else try { label = new URL(t.url).hostname.replace(/^www\./, "").slice(0, 22); } catch { label = t.url.slice(0, 22); }
            }
            return (
              <div key={t.id} onClick={() => setActiveId(t.id)} className={`group flex items-center gap-2 px-3 h-[30px] rounded-full text-[12.5px] shrink-0 max-w-[200px] border cursor-pointer transition ${isActive ? "bg-[#2a2a2e] border-white/[0.08] text-white" : "bg-[#1e1e21] border-transparent text-zinc-400 hover:bg-[#242428] hover:text-zinc-200"}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${isActive ? "bg-[#0a84ff] text-white" : "bg-white/10 text-zinc-400"}`}>{label[0]?.toUpperCase() || "N"}</span>
                <span className="truncate max-w-[128px] tracking-tight">{label}</span>
                <button onClick={(e) => { e.stopPropagation(); closeTab(t.id); }} className="ml-0.5 w-5 h-5 rounded-full hover:bg-white/10 flex items-center justify-center shrink-0 text-zinc-400 hover:text-white transition"><X size={12} /></button>
              </div>
            );
          })}
          <button onClick={addTab} className="ml-1 w-7 h-7 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/[0.06] flex items-center justify-center shrink-0 transition"><Plus size={14} className="text-zinc-300" /></button>
        </div>
      </div>

      {/* Address bar */}
      <div className="h-[48px] flex items-center gap-2 px-3 bg-[#1c1c1f] border-b border-white/[0.06] shrink-0">
        <button className="w-8 h-8 rounded-full hover:bg-white/[0.06] flex items-center justify-center text-zinc-500"><ChevronLeft size={16} /></button>
        <button className="w-8 h-8 rounded-full hover:bg-white/[0.06] flex items-center justify-center text-zinc-500"><ChevronRight size={16} /></button>
        <button onClick={() => active?.url && !isSearch && navigate(active.url)} className="w-8 h-8 rounded-full hover:bg-white/[0.06] flex items-center justify-center text-zinc-400"><RotateCw size={14} className={isLoading ? "animate-spin" : ""} /></button>
        <div className="flex-1 flex items-center gap-2 min-w-0 bg-[#0f0f12] rounded-full px-3 py-1.5 border border-white/[0.08] focus-within:border-[#0a84ff]/30 transition">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${host === "new tab" ? "bg-white/5 text-zinc-500" : host.includes("vaibhav") || isSearch ? "bg-emerald-500/15 text-emerald-400" : isPdf ? "bg-amber-500/15 text-amber-400" : "bg-white/5 text-zinc-400"}`}>{host === "new tab" ? <Globe size={12} /> : isSearch ? <Search size={12} /> : isPdf ? <FileText size={12} /> : host.includes("vaibhav") ? <ShieldCheck size={12} /> : <Lock size={12} />}</span>
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && navigate(input)} placeholder="Search or enter URL" className="flex-1 min-w-0 bg-transparent outline-none text-[13px] placeholder:text-zinc-600 text-zinc-100" spellCheck={false} />
          {input ? <button onClick={() => setInput("")} className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-zinc-500"><X size={13} /></button> : null}
          <button onClick={() => handleCopy()} className="hidden sm:flex w-7 h-7 rounded-full hover:bg-white/10 items-center justify-center text-zinc-500 hover:text-zinc-300" title={copied ? "Copied" : "Copy"}>{copied ? <span className="text-[10px] text-emerald-400 font-bold">✓</span> : <Copy size={13} />}</button>
        </div>
      </div>

      {isLoading && <div className="h-[2px] bg-[#0a84ff] animate-[browserLoad_1s_ease_infinite] shrink-0" />}

      {/* Content */}
      <div className="flex-1 bg-[#0f0f12] relative overflow-hidden flex flex-col">
        {isNewTab ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center">
            <div className="w-full max-w-[560px] flex flex-col items-center">
              <div className="text-[11px] tracking-widest font-semibold text-zinc-500 uppercase">{timeStr} • Vaibhav Browser</div>
              <h1 className="mt-3 text-[30px] sm:text-[34px] font-semibold tracking-tight text-white leading-none">{greeting}</h1>
              <p className="mt-2 text-[14px] text-zinc-400">Welcome — browse anything here</p>
              <p className="mt-6 text-[12px] text-zinc-500">Use the address bar above to enter a URL</p>
              <p className="mt-3 max-w-[420px] text-[11px] text-zinc-600 leading-relaxed">
                Why browser here? <span className="text-zinc-400">Live</span> & <span className="text-zinc-400">Code</span> from Projects open here — stays in OS, no popups.
              </p>
            </div>
          </div>
        ) : isSearch ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#0f0f12]">
            <div className="max-w-[520px] w-full">
              <p className="text-sm text-zinc-500">Can’t open search inside</p>
              <p className="mt-2 text-xs text-zinc-600 break-all">{`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`}</p>
              <a href={`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#0a84ff] hover:underline">
                Forward link → google.com/search?q={searchQuery} <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ) : isPdf ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#0f0f12]">
            <div className="max-w-[520px] w-full">
              <p className="text-sm text-zinc-500">Can’t preview PDF inside</p>
              <p className="mt-2 text-xs text-zinc-600 break-all">{active.url}</p>
              <a href={active.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#0a84ff] hover:underline">
                Forward link → {active.url} <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ) : isBlockedHost || embedFailed ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#0f0f12]">
            <div className="max-w-[520px] w-full">
              <p className="text-sm text-zinc-500">Can’t be opened inside</p>
              <p className="mt-2 text-xs text-zinc-600 break-all">{active.url}</p>
              <a href={active.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#0a84ff] hover:underline">
                Forward link → {host} <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ) : (
          <div className="flex-1 relative bg-[#0f0f12] overflow-hidden">
            <iframe
              ref={iframeRef}
              key={active.id + "-" + active.url}
              src={active.url}
              className="w-full h-full border-0 bg-[#0f0f12]"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
              onLoad={handleIframeLoad}
              onError={() => setEmbedFailed(true)}
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-[#1a1a1e] border border-white/10 text-zinc-300 text-xs px-3 py-2 rounded-full shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline text-zinc-400 text-[11px]">Internal browser</span>
              <button onClick={() => handleCopy()} className="px-2.5 py-1 rounded-full bg-white text-zinc-900 text-xs font-medium hover:bg-zinc-100 transition">Copy link</button>
            </div>
          </div>
        )}
      </div>

      <style>{`@keyframes browserLoad{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}} .scrollbar-none::-webkit-scrollbar{display:none} .scrollbar-none{scrollbar-width:none}`}</style>
    </div>
  );
}
