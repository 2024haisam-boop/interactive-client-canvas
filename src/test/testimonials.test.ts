import { describe, expect, it } from "vitest";
import { testimonials } from "@/lib/testimonials";

describe("Supplied testimonials", () => {
  it("retains all 50 unique authors and their grouped ratings", () => {
    expect(testimonials).toHaveLength(50);
    expect(new Set(testimonials.map((t) => t.name)).size).toBe(50);
    for (const [group, counts] of [
      ["Services", [13, 4, 3]],
      ["Platform", [20, 6, 4]],
    ] as const) {
      expect(
        [5, 4.7, 4.55].map(
          (rating) => testimonials.filter((t) => t.group === group && t.rating === rating).length,
        ),
      ).toEqual(counts);
    }
  });
  it("keeps service-specific and French quotes intact", () => {
    expect(testimonials.find((t) => t.name === "Natalie Brooks")?.quote).toContain("1.8% to 4.6%");
    expect(testimonials.find((t) => t.name === "Camille Dubois")?.quote).toBe(
      "Les rapports automatiques nous font gagner un temps précieux chaque semaine.",
    );
  });
});
