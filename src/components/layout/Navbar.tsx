"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = getWhatsAppLink("Hi! I'd like to know more about upcoming trips with Bucketlist.");

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#1c1917]/95 backdrop-blur-md border-b border-[#FAF7F2]/15 text-[#faf7f2]">
      {/* Top Brand Yellow Hairline Accent */}
      <div className="h-0.5 w-full bg-[#FACC15]" />

      <div className="section-padding py-3.5">
        <div className="container-wide flex items-center justify-between">
          {/* Main Logo: Clean Transparent Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative h-8 sm:h-12 w-40 sm:w-60 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/logo_header_clean.png"
                alt="Bucketlist Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-sans uppercase tracking-widest font-extrabold">
            <Link href="/trips" className="text-[#faf7f2] hover:text-[#FACC15] transition-colors flex items-center gap-1.5">
              <span>Community Trips</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/destinations" className="text-[#faf7f2] hover:text-[#FACC15] transition-colors">
              Destinations
            </Link>
            <Link href="/private-trips" className="text-[#faf7f2] hover:text-[#FACC15] transition-colors">
              Private Trips
            </Link>
            <Link href="/about" className="text-[#faf7f2] hover:text-[#FACC15] transition-colors">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] font-sans text-xs font-extrabold rounded-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-[#1c1917] animate-pulse" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#faf7f2] font-sans text-xs hover:text-[#FACC15] transition-colors font-extrabold shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "CLOSE [×]" : "MENU [≡]"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1c1917] border-t border-[#FAF7F2]/15 px-6 py-6 space-y-4 font-sans text-xs uppercase tracking-wider">
          <Link
            href="/trips"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#faf7f2] hover:text-[#FACC15] py-3 border-b border-white/10 font-bold"
          >
            Community Trips
          </Link>
          <Link
            href="/destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#faf7f2] hover:text-[#FACC15] py-3 border-b border-white/10 font-bold"
          >
            Destinations
          </Link>
          <Link
            href="/private-trips"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#faf7f2] hover:text-[#FACC15] py-3 border-b border-white/10 font-bold"
          >
            Private Trips
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#faf7f2] hover:text-[#FACC15] py-3 border-b border-white/10 font-bold"
          >
            Our Story
          </Link>
          <div className="pt-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3.5 bg-[#FACC15] text-[#1c1917] font-extrabold rounded-sm shadow-md text-xs tracking-wider uppercase"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
