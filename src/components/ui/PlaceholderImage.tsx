"use client";

import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
}

/**
 * A styled placeholder for missing images during development.
 * Replace with actual images in production.
 */
export function PlaceholderImage({
  label = "Image",
  className,
  aspect = "video",
}: PlaceholderImageProps) {
  const aspects = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-brand-gray to-brand-offwhite flex items-center justify-center overflow-hidden",
        aspects[aspect],
        className
      )}
    >
      <div className="text-center px-4">
        <svg
          className="w-8 h-8 mx-auto text-gray-300 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-xs text-gray-400 font-medium">{label}</p>
      </div>
    </div>
  );
}
