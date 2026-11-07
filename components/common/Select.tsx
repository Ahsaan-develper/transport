import { forwardRef, useId } from "react";
import type { SelectHTMLAttributes } from "react";
import type { SelectOption } from "@/data/types";
import { FormField, fieldClasses } from "./FormField";
import { cn } from "./cn";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: readonly SelectOption[];
  placeholder?: string;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, placeholder = "Select an option", error, className, required, ...rest },
  ref
) {
  const id = useId();
  return (
    <FormField id={id} label={label} error={error} required={required}>
      <select
        ref={ref}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses(Boolean(error)), className)}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
});
