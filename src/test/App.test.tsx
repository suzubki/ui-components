import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "../App"

describe("App", () => {
  it("renders learn react link", () => {
    render(<App />)
    const linkElement = screen.getByText(/Click on the Vite and React logos/i)
    expect(linkElement).toBeDefined()
  })
})
