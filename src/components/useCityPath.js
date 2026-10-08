"use client";

import { usePathname } from "next/navigation";

// Returns a function that adds "/location/<city>" to internal links
// when the visitor is on a city page.
export default function useCityPath() {
  const pathname = usePathname();
  const match = pathname.match(/^\/location\/([^/]+)/);
  const prefix = match ? `/location/${match[1]}` : "";

  return (href) => {
    const isInternal = href.startsWith("/") && !href.startsWith("/location");
    return isInternal ? `${prefix}${href}` : href;
  };
}