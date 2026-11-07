import type { ReactNode } from "react";
import { cn } from "./cn";

export function fieldClasses(hasError: boolean): string {
  return cn(
    "block w-full rounded-sm border bg-asphalt px-3 py-3 text-base text-offwhite placeholder:text-concrete focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-safety",
    hasError ? "border-signal" : "border-road"
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export function FormField({ id, label, error, required, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-offwhite">
        {label}
        {required ? (
          <span className="text-safety" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-signal">
          {error}
        </p>
      ) : null}
    </div>
  );
}
