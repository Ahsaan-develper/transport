import { ButtonLink } from "@/components/common/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-asphalt px-4 text-center text-offwhite">
      <p className="font-heading text-8xl font-bold text-safety">404</p>
      <h1 className="font-heading text-4xl font-bold uppercase sm:text-5xl">Wrong exit</h1>
      <p className="max-w-md text-concrete">
        The page you are looking for does not exist or has moved.
      </p>
      <ButtonLink href="/transport" size="lg">
        Back to home
      </ButtonLink>
    </main>
  );
}
