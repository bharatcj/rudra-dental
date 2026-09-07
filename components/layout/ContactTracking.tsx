"use client";

import { useEffect } from "react";
import { track, contactTarget } from "@/lib/track";

function areaOf(el: Element) {
  const marked = el.closest("[data-cta]");
  if (marked instanceof HTMLElement && marked.dataset.cta) return marked.dataset.cta;
  if (el.closest("[data-dock]")) return "mobile-dock";
  if (el.closest("[data-floating]")) return "floating-button";
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section[id]");
  if (section && section.id) return section.id;
  return "page";
}

export default function ContactTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const method = link.dataset.contact || contactTarget(href);
      if (method === "other") return;

      track("contact_click", {
        contact_method: method,
        contact_area: areaOf(link),
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
