import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Button } from "./Button"

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn(), variant: "default" },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  name: "Primary",
  args: {
    variant: "default",
    size: "default",
    children: "This is a button",
  },
}
