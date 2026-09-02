"use client";
import { useState } from "react";

export default function ContactApp() {
  const [subject, setSubject] = useState("Project inquiry");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [tab, setTab] = useState("contacts");

  const send = (e) => {
    e?.preventDefault();
    const to = "kumar1305vaibhav@gmail.com";
    const subj = encodeURIComponent(subject || "Project inquiry");
    const body = encodeURIComponent(`${message}\n\n—\nFrom: ${from || "your@email.com"}`);
    window.open(`mailto:${to}?subject=${subj}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(()=> setSent(false), 2500);
  };

  return (
    <div className="h-full flex bg-[#1c1c1e] text-[#e6e6e6] overflow-hidden">
      {/* Sidebar - Matches image */}
      <div className="w-[200px] shrink-0 bg-[#151515] border-r border-white/5 flex flex-col p-2 gap-0.5">
        <button onClick={()=> setTab("contacts")} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium text-left ${tab==="contacts" ? "bg-[#0a84ff] text-white" : "text-white/70 hover:bg-white/5 hover:text-white"}`}>
          <span className="text-[11px]">👥</span> Contacts
        </button>
        <button onClick={()=> setTab("starred")} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-left ${tab==="starred" ? "bg-[#0a84ff] text-white" : "text-white/70 hover:bg-white/5 hover:text-white"}`}>
          <span className="text-yellow-400 text-[11px]">★</span> Starred
        </button>

        <div className="mt-4 mx-1 p-3 rounded-xl bg-white/[0.04] border border-white/5">
          <div className="text-[12px] font-semibold text-white mb-2">Reach me</div>
          <div className="space-y-1.5 text-[12px]">
            <a href="mailto:kumar1305vaibhav@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white truncate">
              <span className="text-[10px]">✉️</span> <span className="truncate">kumar1305vaibhav@gmail.com</span>
            </a>
            <a href="https://github.com/vaibhavisno-one" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white">
              <span className="text-[10px]">↗</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-kumar-b2a1662b6/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white">
              <span className="text-[10px]">🔗</span> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Main - Mail compose like image */}
      <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
        {/* To / Subject / From rows */}
        <div className="px-4 py-3 space-y-0 border-b border-white/5 bg-[#1e1e1e]">
          <div className="flex items-center gap-3 py-2 border-b border-white/5">
            <span className="text-xs font-semibold text-white/40 w-14 shrink-0">To:</span>
            <span className="text-[13px] text-white/90">Vaibhav Kumar &lt;kumar1305vaibhav@gmail.com&gt;</span>
          </div>
          <div className="flex items-center gap-3 py-2 border-b border-white/5">
            <span className="text-xs font-semibold text-white/40 w-14 shrink-0">Subject:</span>
            <input value={subject} onChange={e=> setSubject(e.target.value)} placeholder="Project inquiry" className="flex-1 bg-transparent outline-none text-[13px] text-white placeholder:text-white/30" />
          </div>
          <div className="flex items-center gap-3 py-2">
            <span className="text-xs font-semibold text-white/40 w-14 shrink-0">From:</span>
            <input value={from} onChange={e=> setFrom(e.target.value)} placeholder="your@email.com" className="flex-1 bg-transparent outline-none text-[13px] text-white placeholder:text-white/40" />
          </div>
        </div>

        {/* Message area */}
        <div className="flex-1 p-3 bg-[#1e1e1e]">
          <textarea
            value={message}
            onChange={e=> setMessage(e.target.value)}
            placeholder="Hi Vaibhav, I'd love to talk about..."
            className="w-full h-full min-h-[280px] bg-[#2a2a2a] border border-white/5 rounded-xl p-4 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-white/10 resize-none"
          />
        </div>

        {/* Send bar */}
        <div className="px-4 py-3 bg-[#1e1e1e] border-t border-white/5 flex items-center gap-3">
          <button onClick={send} className="px-5 py-1.5 rounded-full bg-[#0a84ff] hover:bg-[#0582ff] text-white text-[13px] font-medium flex items-center gap-1.5 transition active:scale-95">
            Send <span className="text-[11px]">✉️</span>
          </button>
          {sent && <span className="text-xs text-[#34d399]">Opening mail client…</span>}
          <span className="ml-auto text-[11px] text-white/20 hidden sm:inline">Vaibhav OS Mail • Secure</span>
        </div>
      </div>
    </div>
  );
}
