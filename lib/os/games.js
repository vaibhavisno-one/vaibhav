export const GAMES = [
  {
    slug: "bridge-horror-house",
    title: "Bridge Horror House",
    tagline: "Find the 3 brass keys and escape — you are not alone in here.",
    genre: "Horror · First-person",
    controls: "WASD move · Mouse look · F torch · E interact",
    players: "Solo",
    src: "/games/bridge-horror-house/index.html",
    cover: "/games/covers/bridge-horror-house.svg",
    accent: "#C9A84C",
  },
];

export function getGame(slug) {
  return GAMES.find((g) => g.slug === slug);
}
