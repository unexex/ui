import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Label } from "@/components/label"
import { Text } from "@/components/text"
import { ScrollArea } from "./scroll-area"

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof ScrollArea>

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Default: Story = {
  render: () => {
    return (
        <ScrollArea.Root className="ScrollAreaRoot">
            <ScrollArea.Viewport className="ScrollAreaViewport">
            <div style={{ padding: '15px 20px' }}>
                <div className="Text">Tags</div>
                {TAGS.map((tag) => (
                <div className="Tag" key={tag}>
                    {tag}
                </div>
                ))}
            </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="ScrollAreaCorner" />
      </ScrollArea.Root>
    )
  },
}