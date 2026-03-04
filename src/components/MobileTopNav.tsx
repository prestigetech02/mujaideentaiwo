"use client";

import { useState, useEffect, useCallback } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const validTabIds = new Set(navItems.map((item) => item.id));

function getTabFromHash(): string {
  if (typeof window === "undefined") return "about";
  const hash = window.location.hash.slice(1).toLowerCase();
  return validTabIds.has(hash) ? hash : "about";
}

export default function MobileTopNav() {
  const [activeTab, setActiveTab] = useState("about");
  const [hasHydratedTabs, setHasHydratedTabs] = useState(false);

  useEffect(() => {
    setActiveTab(getTabFromHash());
    setHasHydratedTabs(true);
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const setActiveTabAndHash = useCallback((id: string) => {
    setActiveTab(id);
    window.history.replaceState(null, "", "#" + id);
  }, []);

  if (!hasHydratedTabs) {
    return null;
  }

  return (
    <div className="md:hidden sticky top-0 z-10 px-4 pt-4 pb-4 bg-black/70 backdrop-blur-sm">
      <nav className="glass-panel rounded-3xl flex items-center justify-center gap-1 overflow-x-auto tech-scroll-hide px-3 py-2.5">
        {navItems.map((item) => (
          <button
            type="button"
            key={item.id}
            data-torch="button"
            className={`shrink-0 px-2.5 py-2 text-[12px] font-medium transition ${
              item.id === activeTab
                ? "text-brand-primary"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveTabAndHash(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
