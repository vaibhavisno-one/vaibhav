export const WALLPAPERS = [
  { id: 0, name: "horse", url: "/wallpapers/horse.jpg" },
  { id: 1, name: "onepiece", url: "/wallpapers/onepiece.jpg" },
  { id: 2, name: "tony", url: "/wallpapers/tony.jpg" },
  { id: 3, name: "Walter", url: "/wallpapers/walter.jpg" },
];

export function getWallpaperStyle(wp) {
  if (wp.gradient) return { background: wp.gradient };
  return { backgroundImage: `url(${wp.url})`, backgroundSize: "cover", backgroundPosition: "center" };
}
