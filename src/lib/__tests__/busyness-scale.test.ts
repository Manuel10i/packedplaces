import { describe, it, expect } from "vitest";
import {
  busynessLabelKey,
  busynessBand,
  busynessColor,
  BUSYNESS_BANDS,
} from "@/lib/busyness-scale";

describe("busynessLabelKey", () => {
  it("maps scores to the map's five bands", () => {
    expect(busynessLabelKey(0)).toBe("quiet");
    expect(busynessLabelKey(0.19)).toBe("quiet");
    expect(busynessLabelKey(0.2)).toBe("moderate");
    expect(busynessLabelKey(0.39)).toBe("moderate");
    expect(busynessLabelKey(0.4)).toBe("busy");
    expect(busynessLabelKey(0.59)).toBe("busy");
    expect(busynessLabelKey(0.6)).toBe("veryBusy");
    expect(busynessLabelKey(0.79)).toBe("veryBusy");
    expect(busynessLabelKey(0.8)).toBe("packed");
    expect(busynessLabelKey(1)).toBe("packed");
  });
});

describe("busynessBand", () => {
  it("returns the ascending band index 0..4", () => {
    expect(busynessBand(0.1)).toBe(0);
    expect(busynessBand(0.3)).toBe(1);
    expect(busynessBand(0.5)).toBe(2);
    expect(busynessBand(0.7)).toBe(3);
    expect(busynessBand(0.9)).toBe(4);
  });

  it("indexes into BUSYNESS_BANDS", () => {
    expect(BUSYNESS_BANDS[busynessBand(0.9)]).toBe("packed");
    expect(BUSYNESS_BANDS).toHaveLength(5);
  });
});

describe("busynessColor", () => {
  it("ramps green → yellow → orange → red", () => {
    expect(busynessColor(0.1)).toBe("#22c55e");
    expect(busynessColor(0.3)).toBe("#facc15");
    expect(busynessColor(0.6)).toBe("#f97316");
    expect(busynessColor(0.9)).toBe("#dc2626");
  });
});
