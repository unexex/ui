import type { Meta, StoryObj } from "@storybook/react"

import Video from "./video"


const meta: Meta<typeof Video> = {
    title: "Components/Video",
    component: Video,
    argTypes: {
    },
    parameters: {
        layout: "centered",
    },
}

export default meta 

type Story = StoryObj<typeof Video>

export const Regular: Story = {
    args: {
        src: "https://file-examples.com/storage/fe746397a465b2a7b957e25/2017/04/file_example_MP4_480_1_5MG.mp4",
        autoPlay: true,
        controls: true,
        muted: true,
    },
}