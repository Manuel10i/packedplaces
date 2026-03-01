import { describe, it, expect } from "vitest";
import { getSeasonForWeek, seasonMatches } from "@/lib/services/heatmap";

describe("getSeasonForWeek", () => {
  describe("northern hemisphere", () => {
    it("week 1 is winter", () => {
      expect(getSeasonForWeek(1, "northern")).toBe("winter");
    });

    it("week 5 is winter", () => {
      expect(getSeasonForWeek(5, "northern")).toBe("winter");
    });

    it("week 14 is winter (last winter week)", () => {
      expect(getSeasonForWeek(14, "northern")).toBe("winter");
    });

    it("week 44 is winter (first winter week in autumn)", () => {
      expect(getSeasonForWeek(44, "northern")).toBe("winter");
    });

    it("week 52 is winter", () => {
      expect(getSeasonForWeek(52, "northern")).toBe("winter");
    });

    it("week 22 is summer (first summer week)", () => {
      expect(getSeasonForWeek(22, "northern")).toBe("summer");
    });

    it("week 30 is summer", () => {
      expect(getSeasonForWeek(30, "northern")).toBe("summer");
    });

    it("week 36 is summer (last summer week)", () => {
      expect(getSeasonForWeek(36, "northern")).toBe("summer");
    });

    it("week 20 is shoulder (between winter and summer)", () => {
      expect(getSeasonForWeek(20, "northern")).toBe("shoulder");
    });

    it("week 15 is shoulder (just after winter)", () => {
      expect(getSeasonForWeek(15, "northern")).toBe("shoulder");
    });

    it("week 40 is shoulder (between summer and winter)", () => {
      expect(getSeasonForWeek(40, "northern")).toBe("shoulder");
    });
  });

  describe("southern hemisphere (inverted seasons)", () => {
    it("week 1 is summer (northern winter inverted)", () => {
      expect(getSeasonForWeek(1, "southern")).toBe("summer");
    });

    it("week 10 is summer", () => {
      expect(getSeasonForWeek(10, "southern")).toBe("summer");
    });

    it("week 44 is summer", () => {
      expect(getSeasonForWeek(44, "southern")).toBe("summer");
    });

    it("week 30 is winter (northern summer inverted)", () => {
      expect(getSeasonForWeek(30, "southern")).toBe("winter");
    });

    it("week 22 is winter (first week of southern winter)", () => {
      expect(getSeasonForWeek(22, "southern")).toBe("winter");
    });

    it("week 36 is winter (last week of southern winter)", () => {
      expect(getSeasonForWeek(36, "southern")).toBe("winter");
    });

    it("week 20 is shoulder", () => {
      expect(getSeasonForWeek(20, "southern")).toBe("shoulder");
    });

    it("week 40 is shoulder", () => {
      expect(getSeasonForWeek(40, "southern")).toBe("shoulder");
    });
  });

  describe("equatorial hemisphere", () => {
    it("always returns shoulder regardless of week", () => {
      expect(getSeasonForWeek(1, "equatorial")).toBe("shoulder");
      expect(getSeasonForWeek(20, "equatorial")).toBe("shoulder");
      expect(getSeasonForWeek(30, "equatorial")).toBe("shoulder");
      expect(getSeasonForWeek(44, "equatorial")).toBe("shoulder");
      expect(getSeasonForWeek(52, "equatorial")).toBe("shoulder");
    });
  });

  describe("default hemisphere", () => {
    it("defaults to northern when no hemisphere specified", () => {
      expect(getSeasonForWeek(1)).toBe("winter");
      expect(getSeasonForWeek(30)).toBe("summer");
      expect(getSeasonForWeek(20)).toBe("shoulder");
    });
  });
});

describe("seasonMatches", () => {
  it("null season always matches (year-round patterns)", () => {
    expect(seasonMatches(null, "winter")).toBe(true);
    expect(seasonMatches(null, "summer")).toBe(true);
    expect(seasonMatches(null, "shoulder")).toBe(true);
  });

  it("shoulder weekSeason matches all pattern seasons", () => {
    expect(seasonMatches("winter", "shoulder")).toBe(true);
    expect(seasonMatches("summer", "shoulder")).toBe(true);
  });

  it("winter pattern matches winter weekSeason", () => {
    expect(seasonMatches("winter", "winter")).toBe(true);
  });

  it("summer pattern matches summer weekSeason", () => {
    expect(seasonMatches("summer", "summer")).toBe(true);
  });

  it("winter pattern does not match summer weekSeason", () => {
    expect(seasonMatches("winter", "summer")).toBe(false);
  });

  it("summer pattern does not match winter weekSeason", () => {
    expect(seasonMatches("summer", "winter")).toBe(false);
  });
});
