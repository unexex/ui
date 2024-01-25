import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Button } from "@/components/button"
import { Share } from "./share"

const meta: Meta<typeof Share> = {
  title: "Components/Share",
  component: Share,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Share>

export const Default: Story = {
  args: {
    content: "The quick brown fox jumps over the lazy dog",
    url: "https://unexex.tech",
    title: "Hello, world!",
  },
}

export const AsChild: Story = {
  args: {
    content: "The quick brown fox jumps over the lazy dog",
    url: "https://unexex.tech",
    title: "Hello, world!",
    asChild: true,
    children: <Button className="text-ui-fg-on-color">Share</Button>,
  },
}
