import type { Meta, StoryObj } from "@storybook/react"

import Typography from "./typography"


const meta: Meta<typeof Typography> = {
    title: "Components/Typography",
    component: Typography,
    argTypes: {
        variant: {
        control: {
            type: "select",
        },
        options: [
            'headline-standalone',
            'headline-super',
            'headline-elevated',
            'headline',
            'headline-reduced',
            'eyebrow-super',
            'eyebrow-elevated',
            'eyebrow',
            'eyebrow-reduced',
            'intro-elevated',
            'intro',
            'section-head',
            'quote',
            'quote-reduced',
            'callout',
            'manifesto',
            'label',
            'tout',
            'body',
            'body-tight',
            'body-reduced',
            'body-reduced-tight',
            'caption',
            'sosumi',
            'headline-body',
            'headline-body-reduced',
        ],
        },
    },
    parameters: {
        layout: "centered",
    },
}

export default meta 

type Story = StoryObj<typeof Typography>

export const Regular: Story = {
    args: {
        variant: "body",
        children: "I am a typography component",
    },
}