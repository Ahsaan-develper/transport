import { forwardRef, useId } from "react";
import type { TextareaHTMLAttributes } from "react";
import { FormField, fieldClasses } from "./FormField";
import { cn } from "./cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, className, required, ...rest },
  ref
) {
  const id = useId();
  return (
    <FormField id={id} label={label} error={error} required={required}>
      <textarea
        ref={ref}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses(Boolean(error)), "min-h-28 resize-y", className)}
        {...rest}
      />
    </FormField>
  );
});
