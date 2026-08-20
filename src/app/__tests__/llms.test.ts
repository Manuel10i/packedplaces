import { describe, it, expect } from "vitest";
import { GET } from "@/app/llms.txt/route";
import { guides } from "@/lib/guides";

describe("llms.txt", () => {
  it("is served as plain text", async () => {
    const res = GET();
    expect(res.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
    const body = await res.text();
    expect(body.startsWith("# PackedPlaces")).toBe(true);
  });

  it("links the core hubs and the sitemap", async () => {
    const body = await GET().text();
    for (const path of [
      "/map",
      "/best-time",
      "/least-crowded",
      "/crowd-index",
      "/sitemap.xml",
    ]) {
      expect(body).toContain(`https://packedplaces.com${path}`);
    }
  });

  it("lists every guide from the registry", async () => {
    const body = await GET().text();
    for (const guide of guides) {
      expect(body).toContain(`https://packedplaces.com/guides/${guide.slug}`);
    }
  });

  it("uses no em-dash or en-dash", async () => {
    const body = await GET().text();
    expect(body).not.toMatch(/[–—]/);
  });
});
