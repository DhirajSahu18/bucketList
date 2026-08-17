"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = getWhatsAppLink("Hi Aryan & Kashshish, I'm exploring trips on TheBucketList.co and would like to ask a quick question.");

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#1c1917]/95 backdrop-blur-md border-b border-[#FAF7F2]/10 text-[#faf7f2]">
      {/* Top Brand Yellow Hairline Accent */}
      <div className="h-0.5 w-full bg-[#FACC15]" />

      <div className="section-padding py-3.5">
        <div className="container-wide flex items-center justify-between">
          {/* Main Logo: Clean Transparent Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 sm:h-12 w-48 sm:w-60 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/logo_header_clean.png"
                alt="TheBucketList.co Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest font-medium">
            <Link href="/trips" className="text-[#faf7f2]/85 hover:text-[#FACC15] transition-colors flex items-center gap-1.5">
              <span>Group Trips</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/destinations" className="text-[#faf7f2]/85 hover:text-[#FACC15] transition-colors">
              Destinations
            </Link>
            <Link href="/private-trips" className="text-[#faf7f2]/85 hover:text-[#FACC15] transition-colors">
              Private Trips
            </Link>
            <Link href="/about" className="text-[#faf7f2]/85 hover:text-[#FACC15] transition-colors">
              Our Story
            </Link>
          </nav>

          {/* Editorial WhatsApp Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("click_trip_whatsapp", { source: "navbar" })}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] font-mono text-xs font-bold rounded-sm shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-[#1c1917] animate-pulse" />
              <span>WhatsApp Us (&lt;2h reply)</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#faf7f2] font-mono text-xs hover:text-[#FACC15] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "CLOSE [×]" : "MENU [≡]"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1c1917] border-t border-[#FAF7F2]/10 px-6 py-6 space-y-4 font-mono text-xs uppercase tracking-wider">
          <Link
            href="/trips"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#faf7f2] hover:text-[#FACC15] py-2.5 border-b border-white/10 font-bold"
          >
            Group Trips &rarr;
          </Link>
          <Link
            href="/destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#faf7f2] hover:text-[#FACC15] py-2.5 border-b border-white/10"
          >
            Destinations &rarr;
          </Link>
          <Link
            href="/private-trips"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#faf7f2] hover:text-[#FACC15] py-2.5 border-b border-white/10"
          >
            Private Trips &rarr;
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#faf7f2] hover:text-[#FACC15] py-2.5 border-b border-white/10"
          >
            Our Story &rarr;
          </Link>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3.5 bg-[#FACC15] text-[#1c1917] font-bold rounded-sm shadow-md text-xs tracking-wider"
            >
              WhatsApp Aryan & Kashshish &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
