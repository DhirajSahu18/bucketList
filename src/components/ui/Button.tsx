"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "dark" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 rounded-sm uppercase disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brand-yellow text-brand-black hover:bg-yellow-300 active:scale-[0.98]",
    secondary:
      "bg-brand-black text-white hover:bg-gray-800 active:scale-[0.98]",
    outline:
      "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white active:scale-[0.98]",
    dark: "bg-brand-black text-brand-yellow hover:bg-gray-900 active:scale-[0.98]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClassName}>
      {children}
    </button>
  );
}
