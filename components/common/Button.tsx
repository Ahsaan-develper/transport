import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

export type ButtonVariant = "primary" | "outline" | "dark" | "outlineDark";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-heading font-semibold uppercase tracking-wider transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-safety text-asphalt hover:bg-signal focus-visible:outline-safety",
  outline:
    "border-2 border-offwhite/40 text-offwhite hover:border-safety hover:text-safety focus-visible:outline-safety",
  dark: "bg-asphalt text-offwhite hover:bg-steel focus-visible:outline-asphalt",
  outlineDark:
    "border-2 border-asphalt text-asphalt hover:bg-asphalt hover:text-safety focus-visible:outline-asphalt",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-lg",
};

function styles(variant: ButtonVariant, size: ButtonSize, className?: string): string {
  return cn(base, variants[variant], sizes[size], className);
}

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

interface ButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={styles(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends CommonProps {
  href: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  onClick,
  children,
}: ButtonLinkProps) {
  const classes = styles(variant, size, className);

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </a>
  );
}
