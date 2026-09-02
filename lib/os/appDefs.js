export const APP_DEFS = [
  { id: "files", name: "Files", icon: "files", color: "#2563eb", desc: "Browse projects & explorer" },
  { id: "browser", name: "Browser", icon: "browser", color: "#0ea5e9", desc: "Web browser" },
  { id: "terminal", name: "Terminal", icon: "terminal", color: "#1a1a1a", desc: "Command line" },
  { id: "music", name: "Music", icon: "music", color: "#7c3aed", desc: "Now playing • Spotify" },
  { id: "gallery", name: "Gallery", icon: "gallery", color: "#f59e0b", desc: "Images & media" },
  { id: "notes", name: "Blogs", icon: "blogs", color: "#eab308", desc: "My blogs & notes" },
  { id: "contact", name: "Mail", icon: "mail", color: "#0ea5e9", desc: "Get in touch" },
  { id: "settings", name: "Settings", icon: "settings", color: "#6b7280", desc: "Vaibhav OS settings" },
];

export const DOCK_ORDER = ["files","browser","terminal","music","gallery","notes","contact","settings"];

export function getApp(id) {
  return APP_DEFS.find((a) => a.id === id);
}
