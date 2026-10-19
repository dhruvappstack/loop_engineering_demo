import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  it("introduces Loop Engineering and links to its key sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /make progress, measurable/i }),
    ).toBeVisible();
    expect(screen.getByRole("link", { name: /see how the loop works/i })).toHaveAttribute(
      "href",
      "#cycle",
    );
    expect(screen.getByRole("link", { name: "Principles" })).toHaveAttribute(
      "href",
      "#principles",
    );
  });

  it("includes the loop cycle and the method principles sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "One loop. Four deliberate moves." })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Less guesswork. Better decisions." })).toBeVisible();
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });
});
