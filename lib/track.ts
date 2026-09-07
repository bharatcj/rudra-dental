type TrackParams = Record<string, string>;

type TrackWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (command: string, name: string, params?: TrackParams) => void;
};

export function track(event: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as TrackWindow;

  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...params });
  }

  if (typeof w.gtag === "function") {
    w.gtag("event", event, params);
  }
}

export function contactTarget(href: string) {
  if (href.startsWith("tel:")) return "phone";
  if (href.includes("wa.me")) return "whatsapp";
  if (href.includes("g.co") || href.includes("google.com/maps")) return "maps";
  return "other";
}
