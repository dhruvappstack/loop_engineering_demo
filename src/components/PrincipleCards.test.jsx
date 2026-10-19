import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PrincipleCards from "./PrincipleCards.jsx";

describe("PrincipleCards", () => {
  it("renders the three core engineering principles as articles", () => {
    render(<PrincipleCards />);

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(3);
    expect(
      cards.map((card) => within(card).getByRole("heading").textContent),
    ).toEqual([
      "Make the goal measurable",
      "Keep each step small",
      "Let evidence lead",
    ]);
  });

  it("explains how each principle guides an iteration", () => {
    render(<PrincipleCards />);

    expect(screen.getByText(/observable outcome before changing the system/i)).toBeVisible();
    expect(screen.getByText(/faster to verify and safer to adjust/i)).toBeVisible();
    expect(screen.getByText(/use the result—not optimism/i)).toBeVisible();
  });
});
