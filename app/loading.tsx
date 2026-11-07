import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-asphalt text-offwhite"
    >
      <Loader2 className="h-10 w-10 animate-spin text-safety" aria-hidden="true" />
      <p className="font-heading text-xl font-semibold uppercase tracking-widest">Loading</p>
    </div>
  );
}
