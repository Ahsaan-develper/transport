import { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import { FormField, fieldClasses } from "./FormField";
import { cn } from "./cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, className, required, ...rest },
  ref
) {
  const id = useId();
  return (
    <FormField id={id} label={label} error={error} required={required}>
      <input
        ref={ref}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses(Boolean(error)), className)}
        {...rest}
      />
    </FormField>
  );
});
