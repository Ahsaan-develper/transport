"use client";

import { useEffect } from "react";
import { Button } from "@/components/common/Button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-asphalt px-4 text-center text-offwhite">
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-safety">
        Something went wrong
      </p>
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl">Road closed</h1>
      <p className="max-w-md text-concrete">
        An unexpected error occurred. Try again, and if it keeps happening, call our dispatch desk.
      </p>
      <Button size="lg" onClick={reset}>
        Try again
      </Button>
    </main>
  );
}
