"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AssetMeta } from "@/types";
import { trackEvent } from "@/lib/analytics";

interface GallerySystemProps {
  images: string[];
  metadata?: AssetMeta[];
  tripName: string;
}

export function GallerySystem({ images, metadata, tripName }: GallerySystemProps) {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveModalIndex(index);
    trackEvent("open_gallery", { tripName, index });
  };

  const closeLightbox = useCallback(() => {
    setActiveModalIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setActiveModalIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setActiveModalIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div className="space-y-4">
      {/* Desktop Grid Layout (Hero + 2 Stacked) */}
      <div className="hidden md:grid grid-cols-12 gap-3 aspect-[21/9]">
        {/* Hero Image */}
        <div
          onClick={() => openLightbox(0)}
          className="col-span-8 relative rounded-sm overflow-hidden cursor-pointer group bg-[#1c1917]"
        >
          <Image
            src={images[0]}
            alt={`${tripName} hero visual`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#1c1917]/80 backdrop-blur-md text-[#FACC15] font-mono text-xs rounded">
            Click to view visual story ({images.length} photos)
          </div>
        </div>

        {/* Stacked Secondary Images */}
        <div className="col-span-4 grid grid-rows-2 gap-3">
          {images.slice(1, 3).map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx + 1)}
              className="relative rounded-sm overflow-hidden cursor-pointer group bg-[#1c1917]"
            >
              <Image
                src={img}
                alt={`${tripName} photo ${idx + 2}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Horizontal Carousel */}
      <div className="block md:hidden">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="snap-center shrink-0 w-[85%] relative aspect-[16/10] rounded-sm overflow-hidden bg-[#1c1917]"
            >
              <Image
                src={img}
                alt={`${tripName} photo ${idx + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 text-white font-mono text-[10px] rounded">
                {idx + 1} / {images.length}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#FACC15] font-mono text-xl p-2 z-10"
          >
            &times; Close
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-[#FACC15] text-3xl p-2 z-10"
          >
            &#8249;
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[70vh]">
              <Image
                src={images[activeModalIndex]}
                alt={`${tripName} enlarged view`}
                fill
                className="object-contain"
              />
            </div>

            {/* Asset Provenance & Caption */}
            <div className="mt-4 text-center text-xs font-mono text-[#e6ded1] space-y-1">
              <span>Photo {activeModalIndex + 1} of {images.length}</span>
              {metadata && metadata[activeModalIndex] && (
                <div className="text-[11px] text-[#FACC15]">
                  Source: {metadata[activeModalIndex].type.toUpperCase()} &middot; {metadata[activeModalIndex].source || "TheBucketList Archive"}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-[#FACC15] text-3xl p-2 z-10"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
