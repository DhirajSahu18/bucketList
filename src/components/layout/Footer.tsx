import Link from "next/link";
import Image from "next/image";
import { siteSettings } from "@/data/site-settings";
import { getWhatsAppLink } from "@/lib/utils";

export function Footer() {
  const whatsappUrl = getWhatsAppLink("Hi Aryan & Kashshish, I'm reaching out from the website footer.");

  return (
    <footer className="bg-[#1c1917] text-[#faf7f2] border-t border-[#FACC15]/30 pt-16 pb-12">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 mb-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-5 space-y-4">
              <div className="relative h-12 sm:h-14 w-52 sm:w-64">
                <Image
                  src="/images/logo_header_clean.png"
                  alt="TheBucketList.co Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="font-sans text-base sm:text-lg text-[#FACC15] font-extrabold leading-tight pt-1">
                Two founders. Five years of trips. Authentic community travel.
              </p>

              <p className="text-xs text-[#e6ded1]/80 max-w-sm leading-relaxed font-sans font-normal">
                {siteSettings.footerDescription}
              </p>

              <div className="inline-flex items-center gap-2 pt-1 text-xs font-sans text-[#FAF7F2] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
                <span>80+ journeys &middot; 1,200+ travellers &middot; Founder-Led</span>
              </div>
            </div>

            {/* Explore Links */}
            <div className="col-span-1 md:col-span-2 space-y-3 font-sans text-xs">
              <span className="text-[#FACC15] uppercase tracking-wider block font-extrabold border-b border-[#FAF7F2]/10 pb-1">Explore</span>
              <ul className="space-y-2.5 text-[#e6ded1]/80 font-medium">
                <li><Link href="/trips" className="hover:text-[#FACC15] transition-colors">Community Trips</Link></li>
                <li><Link href="/destinations" className="hover:text-[#FACC15] transition-colors">Destinations</Link></li>
                <li><Link href="/private-trips" className="hover:text-[#FACC15] transition-colors">Private Trips</Link></li>
                <li><Link href="/about" className="hover:text-[#FACC15] transition-colors">Our Story</Link></li>
              </ul>
            </div>

            {/* Trust & Legal Policies */}
            <div className="col-span-1 md:col-span-2 space-y-3 font-sans text-xs">
              <span className="text-[#FACC15] uppercase tracking-wider block font-extrabold border-b border-[#FAF7F2]/10 pb-1">Trust & Legal</span>
              <ul className="space-y-2.5 text-[#e6ded1]/80 font-medium">
                <li><Link href="/refund-policy" className="hover:text-[#FACC15] transition-colors">Refund Policy</Link></li>
                <li><Link href="/cancellation-policy" className="hover:text-[#FACC15] transition-colors">Cancellation Terms</Link></li>
                <li><span className="text-[#FACC15] font-bold">Replies &lt;2h</span></li>
                <li><span className="text-gray-400">GST Invoice</span></li>
              </ul>
            </div>

            {/* Direct Founder Contact */}
            <div className="col-span-2 md:col-span-3 space-y-3 font-sans text-xs">
              <span className="text-[#FACC15] uppercase tracking-wider block font-extrabold border-b border-[#FAF7F2]/10 pb-1">Direct Founder Contact</span>
              <p className="text-gray-300 font-extrabold">Aryan & Kashshish</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] rounded-xs text-xs font-extrabold transition-all shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#1c1917]" />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="text-[11px] text-gray-400 font-medium">Email: {siteSettings.email}</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-gray-400 gap-4">
            <p>&copy; {new Date().getFullYear()} TheBucketList.co &middot; All Rights Reserved.</p>
            <p className="text-[#FACC15] font-semibold">Planned properly for real community joiners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
