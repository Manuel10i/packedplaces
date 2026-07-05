import { describe, it, expect } from "vitest";
import en from "@/messages/en.json";
import de from "@/messages/de.json";
import es from "@/messages/es.json";
import fr from "@/messages/fr.json";

/** Recursively collect dot-separated key paths of all leaf values. */
function keyPaths(obj: Record<string, unknown>, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return value !== null && typeof value === "object" && !Array.isArray(value)
      ? keyPaths(value as Record<string, unknown>, path)
      : [path];
  });
}

const enKeys = new Set(keyPaths(en));

const locales: Array<[string, Record<string, unknown>]> = [
  ["de", de],
  ["es", es],
  ["fr", fr],
];

describe("message catalogue parity", () => {
  it("en has at least one key", () => {
    expect(enKeys.size).toBeGreaterThan(0);
  });

  it.each(locales)("%s has exactly the same keys as en", (locale, messages) => {
    const localeKeys = new Set(keyPaths(messages));
    const missing = [...enKeys].filter((k) => !localeKeys.has(k));
    const extra = [...localeKeys].filter((k) => !enKeys.has(k));

    expect(
      missing,
      `${locale}.json is missing keys present in en.json: ${missing.join(", ")}`,
    ).toEqual([]);
    expect(
      extra,
      `${locale}.json has extra keys not present in en.json: ${extra.join(", ")}`,
    ).toEqual([]);
  });
});
