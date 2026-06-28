import { describe, it, expect } from "vitest";
import robots from "@/app/robots";

describe("robots", () => {
  it("allows all user agents", () => {
    expect(robots().rules).toEqual({ userAgent: "*", allow: "/" });
  });

  it("points to the sitemap that actually exists", () => {
    expect(robots().sitemap).toBe("https://packedplaces.com/sitemap.xml");
  });

  it("sets the canonical host", () => {
    expect(robots().host).toBe("https://packedplaces.com");
  });
});
