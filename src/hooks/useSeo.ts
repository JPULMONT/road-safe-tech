import { useEffect } from "react";

const DEFAULT_TITLE = "Carstore | Tecnología para Flotas en México";

interface SeoParams {
  title?: string;
  description?: string;
  ogType?: string;
}

function setMetaTag(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    el.content = content;
    document.head.appendChild(el);
  }
}

export function useSeo({ title, description, ogType = "website" }: SeoParams) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMetaTag("description", description);
    if (title) setMetaTag("og:title", title, "property");
    if (description) setMetaTag("og:description", description, "property");
    setMetaTag("og:type", ogType, "property");

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, ogType]);
}
