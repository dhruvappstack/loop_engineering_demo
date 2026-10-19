import { StrictMode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { createRoot, root } = vi.hoisted(() => {
  const root = { render: vi.fn() };
  return {
    createRoot: vi.fn(() => root),
    root,
  };
});

vi.mock("react-dom/client", () => ({ createRoot }));
vi.mock("./styles.css", () => ({}));

describe("application entry point", () => {
  beforeEach(() => {
    vi.resetModules();
    createRoot.mockClear();
    root.render.mockClear();
    document.body.innerHTML = '<div id="root"></div>';
  });

  it("mounts the app in the root element under StrictMode", async () => {
    const container = document.getElementById("root");

    await import("./main.jsx");

    expect(createRoot).toHaveBeenCalledExactlyOnceWith(container);
    expect(root.render).toHaveBeenCalledOnce();
    const app = root.render.mock.calls[0][0];
    expect(app.type).toBe(StrictMode);
    expect(app.props.children.type.name).toBe("App");
  });
});
