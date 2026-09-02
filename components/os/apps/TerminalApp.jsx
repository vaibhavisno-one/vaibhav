"use client";
import { useState, useEffect, useRef } from "react";

function formatLastLogin() {
  const d = new Date();
  const s = d.toLocaleString("en-US", { month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true });
  return `Last login: ${s} on pts/0`;
}

const HELP_LINE = "help  whoami  ls  projects  blogs  resume  open <app>  browser <query>  wallpaper [0-3]  clear";
const TRY_LINE = "Try: help • whoami • resume • open app • browser query";

function Linkified({ text, onOpenBrowser, onOpenApp }) {
  // Split by URLs, emails, and file paths
  const pattern = /(https?:\/\/[^\s]+|\/Resume\.pdf|kumar1305vaibhav@gmail\.com|github\.com\/[^\s]+|linkedin\.com\/[^\s]+)/gi;
  const parts = [];
  let lastIndex = 0;
  let m;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > lastIndex) parts.push({ t: text.slice(lastIndex, m.index), link: false });
    parts.push({ t: m[0], link: true });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push({ t: text.slice(lastIndex), link: false });

  if (parts.every(p=> !p.link)) return <span>{text}</span>;

  return (
    <span>
      {parts.map((p,i)=> p.link ? (
        <button
          key={i}
          onClick={(e)=>{
            e.stopPropagation();
            const raw = p.t;
            if (raw.includes("Resume.pdf") || raw === "/Resume.pdf") {
              onOpenBrowser?.("/Resume.pdf");
            } else if (raw.includes("kumar1305vaibhav@gmail.com")) {
              window.open("mailto:kumar1305vaibhav@gmail.com","_blank");
            } else if (raw.startsWith("http")) {
              onOpenBrowser?.(raw);
            } else if (raw.startsWith("github.com") || raw.startsWith("linkedin.com")) {
              const url = `https://${raw}`;
              onOpenBrowser?.(url);
            } else {
              onOpenBrowser?.(raw);
            }
          }}
          className="text-[#60a5fa] hover:text-[#93c5fd] underline underline-offset-2 decoration-[#60a5fa]/50 hover:decoration-[#60a5fa] cursor-pointer"
        >
          {p.t}
        </button>
      ) : (
        <span key={i}>{p.t}</span>
      ))}
    </span>
  );
}

export default function TerminalApp({ onOpenApp, onOpenBrowser, onWallpaper, wallpapers }) {
  const [history, setHistory] = useState(() => []);
  const [input, setInput] = useState("");
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const [loginLine] = useState(() => formatLastLogin());

  useEffect(() => {
    fetch("/api/projects").then(r=>r.json()).then(d=> setProjects(Array.isArray(d)?d:[])).catch(()=>{});
    fetch("/api/blogs").then(r=>r.json()).then(d=> setBlogs(Array.isArray(d)?d:[])).catch(()=>{});
  }, []);
  useEffect(()=>{ bottomRef.current?.scrollIntoView({behavior:"smooth"}); },[history]);

  const pushIn = (raw) => setHistory(h=> [...h, { type:"in", text: raw }]);
  const pushOut = (text) => setHistory(h=> [...h, { type:"out", text }]);

  const run = (raw) => {
    const cmdLine = raw.trim();
    if(!cmdLine) return;
    const parts = cmdLine.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    pushIn(cmdLine);
    let out = "";
    let hideOut = false;
    switch(cmd) {
      case "help":
        out = HELP_LINE;
        setTimeout(()=> pushOut(TRY_LINE), 0);
        break;
      case "whoami":
        out = "vaibhav kumar — full stack developer\nReact • Next.js • Node • MongoDB • PostgreSQL\nVaibhav OS • pts/0";
        break;
      case "resume":
        out = `Resume — Vaibhav Kumar
Role: Full Stack Developer • Open Source • MVP Builder
File: /Resume.pdf  — click to open
Email: kumar1305vaibhav@gmail.com
GitHub: https://github.com/vaibhavisno-one
LinkedIn: https://www.linkedin.com/in/vaibhav-kumar-b2a1662b6/
Tip: click any link above to open`;
        break;
      case "ls":
        if(args[0]==="projects") out = projects.map(p=>p.slug).join("  ");
        else if(args[0]==="blogs") out = blogs.map(b=>b.slug).join("  ");
        else out = "Desktop  Documents  Downloads  Projects  Blogs  README.md  Resume.pdf";
        break;
      case "projects":
        out = projects.length ? projects.map((p,i)=> `${String(i+1).padStart(2," ")}. ${p.title} — ${p.description.slice(0,60)}`).join("\n") : "Loading projects…";
        break;
      case "blogs":
        out = blogs.length ? blogs.map((b,i)=> `${String(i+1).padStart(2," ")}. ${b.title}`).join("\n") : "Loading blogs…";
        break;
      case "open": {
        if(!args[0]) out = "usage: open <app>\nApps: files, browser, terminal, music, gallery, blogs, contact, settings";
        else {
          const app = args[0].toLowerCase();
          const map = { files:"files", finder:"files", browser:"browser", safari:"browser", terminal:"terminal", music:"music", gallery:"gallery", photos:"gallery", notes:"notes", blogs:"notes", contact:"contact", mail:"contact", settings:"settings", resume:"browser" };
          const target = map[app] || app;
          if(target==="browser" && app==="resume") {
            onOpenBrowser?.("/Resume.pdf");
            out = "Opening Resume.pdf …";
          } else if(["files","browser","terminal","music","gallery","notes","contact","settings"].includes(target)) {
            onOpenApp?.(target);
            out = `Opening ${target}…`;
          } else out = `open: unknown app '${app}'\nTry: files browser terminal music gallery blogs contact settings resume`;
        }
        break;
      }
      case "browser": {
        if(!args.length) out = "usage: browser <query>\nExample: browser vaibhav kumar projects";
        else {
          const q = args.join(" ");
          let url;
          if(q.includes(".") && !q.includes(" ")) url = q.startsWith("http")? q : `https://${q}`;
          else url = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
          onOpenBrowser?.(url);
          out = `Browser → ${q}`;
        }
        break;
      }
      case "wallpaper": {
        if(!args[0]) {
          const list = (wallpapers||[]).map((w,i)=> `${i}: ${w.name}`).join("\n");
          out = `Current wallpaper index • usage: wallpaper [0-${(wallpapers?.length||4)-1}]\n${list}`;
        } else {
          const idx = parseInt(args[0],10);
          if(isNaN(idx) || idx<0 || idx>= (wallpapers?.length||0)) out = `wallpaper: index out of range [0-${(wallpapers?.length||1)-1}]`;
          else {
            onWallpaper?.(idx);
            out = `Wallpaper → ${idx}: ${(wallpapers[idx]||{}).name || idx}`;
          }
        }
        break;
      }
      case "clear":
        setHistory([]);
        hideOut = true;
        break;
      default:
        out = `zsh: command not found: ${cmd}\n${TRY_LINE}`;
    }
    if(!hideOut && out) pushOut(out);
  };

  return (
    <div className="h-full flex flex-col bg-[#111111] text-[#e6e6e6] terminal-font text-[13.5px] leading-[1.45] select-text" onClick={()=> inputRef.current?.focus()}>
      <div className="flex-1 overflow-auto px-4 py-3">
        <div className="text-[#9ca3af] text-[13px]">{loginLine}</div>
        <div className="mt-0.5 text-[13px]">
          <span className="text-[#34d399] font-medium">vaibhav@fedora</span>
          <span className="text-[#9ca3af]"> ~ — type </span>
          <button onClick={()=> { setInput("help"); inputRef.current?.focus(); }} className="text-[#60a5fa] hover:underline">help</button>
        </div>

        <div className="mt-3 space-y-1.5">
          {history.map((h,i)=> (
            <div key={i}>
              {h.type==="in" ? (
                <div className="flex gap-2">
                  <span className="text-[#34d399] shrink-0">→</span>
                  <span className="text-[#60a5fa] shrink-0">~</span>
                  <span className="text-[#e6e6e6] whitespace-pre-wrap">{h.text}</span>
                </div>
              ) : (
                <div className={`whitespace-pre-wrap break-words ${h.text.startsWith("Try:") || h.text.includes("Wallpaper →") || h.text.startsWith("Browser →") || h.text.startsWith("Opening") ? "text-[#9ca3af] text-[12.5px]" : h.text.includes("help  whoami") ? "text-[#d1d5db] text-[13px] leading-[1.6]" : "text-[#d1d5db] text-[13px]"}`}>
                  <Linkified text={h.text} onOpenBrowser={onOpenBrowser} onOpenApp={onOpenApp} />
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {history.length===0 && (
          <div className="mt-1">
            <div className="flex gap-2 text-[#9ca3af] text-[12.5px]">
              <span className="text-[#34d399]">→</span><span className="text-[#60a5fa]">~</span><span className="opacity-60">try &apos;help&apos; or &apos;resume&apos;</span>
            </div>
            <div className="text-[#6b7280] text-[12px] mt-1">Try: help • whoami • resume • open app • browser query</div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 px-4 py-2.5 border-t border-white/5 bg-[#0a0a0a]">
        <span className="text-[#34d399] shrink-0 text-[14px] leading-none">→</span>
        <span className="text-[#60a5fa] shrink-0 text-[14px] leading-none">~</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e=> setInput(e.target.value)}
          onKeyDown={e=> {
            if(e.key==="Enter"){ const v=input; setInput(""); run(v); }
            if(e.key==="Tab"){ e.preventDefault(); if(!input) {setInput("help");} }
          }}
          className="flex-1 bg-transparent outline-none text-[#e6e6e6] placeholder:text-white/25 caret-white"
          placeholder="help  •  resume"
          spellCheck={false}
          autoComplete="off"
          autoFocus
        />
      </div>
    </div>
  );
}
