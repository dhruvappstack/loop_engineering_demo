import { describe, expect, it } from "vitest";
import loopStages from "./loopStages.js";

describe("loopStages", () => {
  it("defines the four stages in the correct order", () => {
    expect(loopStages.map(({ name }) => name)).toEqual([
      "Goal",
      "Action",
      "Observe",
      "Adjust",
    ]);
  });

  it("gives each stage a number, explanation, and outcome signal", () => {
    expect(loopStages).toHaveLength(4);
    for (const stage of loopStages) {
      expect(stage.number).toMatch(/^\d{2}$/);
      expect(stage.description.trim()).not.toBe("");
      expect(stage.signal.trim()).not.toBe("");
    }
  });
});
