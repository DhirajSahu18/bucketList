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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Brand Column with clean transparent logo */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative h-12 sm:h-14 w-52 sm:w-64">
                <Image
                  src="/images/logo_header_clean.png"
                  alt="TheBucketList.co Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="font-serif text-lg text-[#FACC15] font-semibold leading-tight pt-1">
                Two founders. Five years of trips. Zero outsourced groups.
              </p>

              <p className="text-xs text-[#e6ded1]/80 max-w-sm leading-relaxed font-sans">
                {siteSettings.footerDescription}
              </p>

              <div className="inline-flex items-center gap-2 pt-2 text-xs font-mono text-[#FAF7F2]">
                <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
                <span>47 trips &middot; 312 travellers &middot; 4 focus regions</span>
              </div>
            </div>

            {/* Explore Links */}
            <div className="md:col-span-2 space-y-3 font-mono text-xs">
              <span className="text-[#FACC15] uppercase tracking-wider block font-bold border-b border-[#FAF7F2]/10 pb-1">Explore</span>
              <ul className="space-y-2.5 text-[#e6ded1]/80">
                <li><Link href="/trips" className="hover:text-[#FACC15] transition-colors">Group Trips</Link></li>
                <li><Link href="/destinations" className="hover:text-[#FACC15] transition-colors">Destinations</Link></li>
                <li><Link href="/destinations/spiti" className="hover:text-[#FACC15] transition-colors">Spiti Guide</Link></li>
                <li><Link href="/private-trips" className="hover:text-[#FACC15] transition-colors">Private Trips</Link></li>
                <li><Link href="/about" className="hover:text-[#FACC15] transition-colors">Our Story</Link></li>
              </ul>
            </div>

            {/* Trust & Legal Policies */}
            <div className="md:col-span-2 space-y-3 font-mono text-xs">
              <span className="text-[#FACC15] uppercase tracking-wider block font-bold border-b border-[#FAF7F2]/10 pb-1">Trust & Legal</span>
              <ul className="space-y-2.5 text-[#e6ded1]/80">
                <li><Link href="/refund-policy" className="hover:text-[#FACC15] transition-colors">Refund & Cancellation</Link></li>
                <li><Link href="/cancellation-policy" className="hover:text-[#FACC15] transition-colors">Cancellation Terms</Link></li>
                <li><span className="text-[#FACC15] font-bold">Replies &lt;2h on WhatsApp</span></li>
                <li><span className="text-gray-400">GST Invoice Provided</span></li>
              </ul>
            </div>

            {/* Direct Founder Contact */}
            <div className="md:col-span-3 space-y-3 font-mono text-xs">
              <span className="text-[#FACC15] uppercase tracking-wider block font-bold border-b border-[#FAF7F2]/10 pb-1">Direct Founder Contact</span>
              <p className="text-gray-300 font-semibold">Aryan & Kashshish</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] rounded-sm text-xs font-bold transition-all shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#1c1917]" />
                <span>Chat on WhatsApp &rarr;</span>
              </a>
              <p className="text-[11px] text-gray-400">Email: {siteSettings.email}</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-4">
            <p>&copy; {new Date().getFullYear()} TheBucketList.co &middot; All Rights Reserved.</p>
            <p className="text-[#FACC15]">Built with documentary precision for real travellers.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
