"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[#0057A8] text-white hover:bg-[#004590] focus-visible:ring-[#0057A8]",
  secondary:
    "bg-[#27AAE1] text-white hover:bg-[#1b95cc] focus-visible:ring-[#27AAE1]",
  outline:
    "border-2 border-[#0057A8] text-[#0057A8] hover:bg-[#0057A8] hover:text-white focus-visible:ring-[#0057A8]",
  ghost:
    "text-[#0057A8] hover:bg-blue-50 focus-visible:ring-[#0057A8]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  disabled,
  external,
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-200";

  const classes = cn(base, variants[variant], sizes[size], className, {
    "opacity-50 cursor-not-allowed pointer-events-none": disabled,
  });

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
