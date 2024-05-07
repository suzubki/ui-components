import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Button } from "./Button"

describe("Should render a button with their variances", () => {
  it("should render a button with default variant", () => {
    // Test the default variant
    const button = render(<Button>Default</Button>)

    expect(button.getByText("Default")).toBeDefined()
  })

  it("should render a button with destructive variant", () => {
    const button = render(<Button variant="destructive">Destructive</Button>)

    expect(button.getByText("Destructive")).toBeDefined()
  })
})
