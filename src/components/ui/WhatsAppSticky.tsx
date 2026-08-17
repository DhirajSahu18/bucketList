"use client";

import { useState, useEffect } from "react";
import { getWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppSticky() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
      <a
        href={getWhatsAppLink("Hi Aryan & Kashshish, I'm interested in an upcoming trip.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_sticky_whatsapp")}
        className="group relative flex items-center gap-3 bg-[#128c7e] hover:bg-[#0e6c61] text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FACC15]"></span>
        </span>
        <div className="text-left font-mono">
          <span className="block text-xs font-bold text-white leading-tight">Chat on WhatsApp</span>
          <span className="block text-[10px] text-[#FACC15]">Replies &lt;2 hours</span>
        </div>
      </a>
    </div>
  );
}
