"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHash() {
  if (typeof window === "undefined") return;
  const hash = window.location.hash;
  if (hash) {
    const id = hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToHash();
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => scrollToHash();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}
