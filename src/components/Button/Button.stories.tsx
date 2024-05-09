import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Button } from "./Button"

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "This is a button component. Size can be default, sm, base or lg. Variants can be default, secondary, destructive, outline, ghost, or link.",
      },
    },
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onClick: fn(),
    variant: "default",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Default",
  args: {
    variant: "default",
    size: "default",
    children: "This is a button",
  },
}

export const Secondary: Story = {
  name: "Secondary",
  args: {
    variant: "secondary",
    size: "default",
    children: "This is a button",
  },
}

export const Destructive: Story = {
  name: "Destructive",
  args: {
    variant: "destructive",
    size: "default",
    children: "This is a button",
  },
}

export const Outline: Story = {
  name: "Outline",
  args: {
    variant: "outline",
    size: "default",
    children: "This is a button",
  },
}

export const Ghost: Story = {
  name: "Ghost",
  args: {
    variant: "ghost",
    size: "default",
    children: "This is a button",
  },
}

export const Link: Story = {
  name: "Link",
  args: {
    variant: "link",
    size: "default",
    children: "This is a button",
  },
}

export const Grouped: Story = {
  name: "Grouped",
  args: {
    size: "default",
    children: "This is a button",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      },
    },
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-8">
        <Button {...args} variant="default" size="sm">Default</Button>
        <Button {...args} variant="secondary" size="sm">Secondary</Button>
        <Button {...args} variant="destructive" size="sm">Destructive</Button>
        <Button {...args} variant="outline" size="sm">Outline</Button>
        <Button {...args} variant="ghost" size="sm">Ghost</Button>
        <Button {...args} variant="link" size="sm">Link</Button>
      </div>
      <div className="flex gap-8">
        <Button {...args} variant="default">Default</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="destructive">Destructive</Button>
        <Button {...args} variant="outline">Outline</Button>
        <Button {...args} variant="ghost">Ghost</Button>
        <Button {...args} variant="link">Link</Button>
      </div>
      <div className="flex gap-8">
        <Button {...args} variant="default" size="lg">Default</Button>
        <Button {...args} variant="secondary" size="lg">Secondary</Button>
        <Button {...args} variant="destructive" size="lg">Destructive</Button>
        <Button {...args} variant="outline" size="lg">Outline</Button>
        <Button {...args} variant="ghost" size="lg">Ghost</Button>
        <Button {...args} variant="link" size="lg">Link</Button>
      </div>
    </div>
  ),
}
