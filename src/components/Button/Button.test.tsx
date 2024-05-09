import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Button } from "./Button"

describe("Should render a button with their variances and sizes", () => {
  it("should render a button with default variant", () => {
    // Test the default variant
    const button = render(<Button>Default</Button>)

    expect(button.getByText("Default")).toBeDefined()
  })

  it("should render a button with destructive variant", () => {
    const button = render(<Button variant="destructive">Destructive</Button>)

    expect(button.getByText("Destructive")).toBeDefined()
  })

  it("should render a button with outline variant", () => {
    const button = render(<Button variant="outline">Outline</Button>)

    expect(button.getByText("Outline")).toBeDefined()
  })

  it("should render a button with secondary variant", () => {
    const button = render(<Button variant="secondary">Secondary</Button>)

    expect(button.getByText("Secondary")).toBeDefined()
  })

  it("should render a button with ghost variant", () => {
    const button = render(<Button variant="ghost">Ghost</Button>)

    expect(button.getByText("Ghost")).toBeDefined()
  })

  it("should render a button with link variant", () => {
    const button = render(<Button variant="link">Link</Button>)

    expect(button.getByText("Link")).toBeDefined()
  })

  it("should render a button with default size", () => {
    const button = render(<Button size="default">Default size</Button>)

    expect(button.getByText("Default size")).toBeDefined()
    expect(button.getByText("Default size")).toHaveProperty("className", expect.stringContaining("h-9 px-4 py-2"))
  })

  it("should render a button with small size", () => {
    const button = render(<Button size="sm">Small</Button>)

    expect(button.getByText("Small")).toBeDefined()
    expect(button.getByText("Small")).toHaveProperty("className", expect.stringContaining("h-8 rounded-md px-3 text-xs"))
  })

  it("should render a button with large size", () => {
    const button = render(<Button size="lg">Large</Button>)

    expect(button.getByText("Large")).toBeDefined()
    expect(button.getByText("Large")).toHaveProperty("className", expect.stringContaining("h-10 rounded-md px-8"))
  })

  it("should render a button with icon size", () => {
    const button = render(<Button size="icon">Icon</Button>)

    expect(button.getByText("Icon")).toBeDefined()
    expect(button.getByText("Icon")).toHaveProperty("className", expect.stringContaining("h-9 w-9"))
  })
})
