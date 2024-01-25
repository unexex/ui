import type { Meta, StoryObj } from "@storybook/react"

import Icon from "./icon"


const meta: Meta<typeof Icon> = {
    title: "Components/Icon",
    component: Icon,
    argTypes: {
    },
    parameters: {
        layout: "centered",
    },
}

export default meta 

type Story = StoryObj<typeof Icon>

export const Regular: Story = {
    args: {
        src: "Bolt",
    },
}