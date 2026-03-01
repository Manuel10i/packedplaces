import { describe, it, expect } from "vitest";
import { recurringEvents } from "@/lib/data/events/recurring";
import { oneTimeEvents } from "@/lib/data/events/one-time";
import { materializeEvents, getAllEvents } from "@/lib/data/events/index";
import { destinations } from "@/lib/data/destinations";

const destinationIds = new Set(destinations.map((d) => d.id));

describe("events data integrity", () => {
  it("has recurring events loaded", () => {
    expect(recurringEvents.length).toBeGreaterThan(0);
  });

  it("has one-time events loaded", () => {
    expect(oneTimeEvents.length).toBeGreaterThan(0);
  });

  it("all recurring event destinationId values reference existing destinations", () => {
    for (const event of recurringEvents) {
      expect(
        destinationIds.has(event.destinationId),
        `Recurring event "${event.name}" references unknown destination "${event.destinationId}"`,
      ).toBe(true);
    }
  });

  it("all one-time event destinationId values reference existing destinations", () => {
    for (const event of oneTimeEvents) {
      expect(
        destinationIds.has(event.destinationId),
        `One-time event "${event.name}" references unknown destination "${event.destinationId}"`,
      ).toBe(true);
    }
  });

  it("all recurring event trafficBoost values are in range 0–1", () => {
    for (const event of recurringEvents) {
      expect(event.trafficBoost).toBeGreaterThan(0);
      expect(event.trafficBoost).toBeLessThanOrEqual(1);
    }
  });

  it("all one-time event trafficBoost values are in range 0–1", () => {
    for (const event of oneTimeEvents) {
      expect(event.trafficBoost).toBeGreaterThan(0);
      expect(event.trafficBoost).toBeLessThanOrEqual(1);
    }
  });

  it("no duplicate recurring event IDs", () => {
    const ids = recurringEvents.map((e) => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("no duplicate one-time event IDs", () => {
    const ids = oneTimeEvents.map((e) => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("all recurring events have valid date ranges (startMonth/startDay)", () => {
    for (const event of recurringEvents) {
      expect(event.startMonth).toBeGreaterThanOrEqual(1);
      expect(event.startMonth).toBeLessThanOrEqual(12);
      expect(event.startDay).toBeGreaterThanOrEqual(1);
      expect(event.startDay).toBeLessThanOrEqual(31);
      expect(event.endMonth).toBeGreaterThanOrEqual(1);
      expect(event.endMonth).toBeLessThanOrEqual(12);
      expect(event.endDay).toBeGreaterThanOrEqual(1);
      expect(event.endDay).toBeLessThanOrEqual(31);
    }
  });

  it("all one-time events have valid date ranges", () => {
    for (const event of oneTimeEvents) {
      expect(new Date(event.startDate).getTime()).not.toBeNaN();
      expect(new Date(event.endDate).getTime()).not.toBeNaN();
      expect(new Date(event.endDate) >= new Date(event.startDate)).toBe(true);
    }
  });

  it("all event categories are valid", () => {
    const validCategories = ["sports", "festival", "cultural", "music", "trade"];
    for (const event of recurringEvents) {
      expect(validCategories).toContain(event.category);
    }
    for (const event of oneTimeEvents) {
      expect(validCategories).toContain(event.category);
    }
  });

  it("materializeEvents produces correct IDs for a year", () => {
    const events = materializeEvents(2026, 2026);
    expect(events.length).toBe(recurringEvents.length);
    for (const event of events) {
      expect(event.id).toMatch(/-2026$/);
    }
  });

  it("getAllEvents includes both recurring and one-time events", () => {
    const events = getAllEvents(2026, 2026);
    const oneTimeFor2026 = oneTimeEvents.filter((e) => e.startDate.startsWith("2026"));
    expect(events.length).toBe(recurringEvents.length + oneTimeFor2026.length);
  });
});
