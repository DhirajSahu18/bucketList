import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppSticky } from "@/components/ui/WhatsAppSticky";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import { Analytics } from "@/components/seo/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TheBucketList.co — Founder-Led Group & Private Trips Across India",
    template: "%s | TheBucketList.co",
  },
  description:
    "Two founders. Five years of trips. Zero outsourced groups. Small-group journeys across India — from the Himalayas to the coast. Personally led by experienced trip leaders.",
  metadataBase: new URL("https://thebucketlist.co"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thebucketlist.co",
    siteName: "TheBucketList.co",
    title: "TheBucketList.co — Founder-Led Group & Private Trips Across India",
    description:
      "Two founders. Five years of trips. Zero outsourced groups. Small-group journeys across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheBucketList.co — Founder-Led Trips Across India",
    description:
      "Small-group journeys personally led by experienced trip leaders.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${displayFont.variable}`}>
      <body className="font-body">
        <OrganizationSchema />
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
