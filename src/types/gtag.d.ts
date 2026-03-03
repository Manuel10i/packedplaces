interface Window {
  gtag?: (
    command: "event" | "config" | "set",
    targetOrName: string,
    params?: Record<string, string | number>,
  ) => void;
}
