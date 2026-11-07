// Frontend-only stand-in for a network request.
export function mockSubmit<T>(payload: T, delayMs = 900): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(payload), delayMs);
  });
}
