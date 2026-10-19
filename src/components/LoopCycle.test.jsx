import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoopCycle from "./LoopCycle.jsx";

describe("LoopCycle", () => {
  it("renders the four steps as an accessible ordered list", () => {
    render(<LoopCycle />);

    const cycle = screen.getByRole("list", {
      name: "The four steps of a Loop Engineering iteration",
    });
    expect(cycle).toHaveAttribute("role", "list");
    expect(within(cycle).getAllByRole("listitem")).toHaveLength(4);
    for (const stage of ["Goal", "Action", "Observe", "Adjust"]) {
      expect(within(cycle).getByRole("heading", { name: stage })).toBeVisible();
    }
  });

  it("explains the evidence or result expected at each step", () => {
    render(<LoopCycle />);

    expect(screen.getByText("A measurable target")).toBeVisible();
    expect(screen.getByText("Evidence, not assumptions")).toBeVisible();
    expect(screen.getByText("A deliberate next step")).toBeVisible();
  });
});
