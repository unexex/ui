import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { Label } from "../label"
import { CodeBlock } from "./code-block"

const meta: Meta<typeof CodeBlock> = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof CodeBlock>

const snippets = [
  {
    label: "NPM",
    language: "bash",
    code: `npm i unexex/ui`,
  },
  {
    label: "JS",
    language: "jsx",
    code: `console.log("Hi!");`
  },
  {
    label: "TS",
    language: "tsx",
    code: `console.log("Hi!");`,
  },
]

export const Default: Story = {
  render: () => {
    return (
      <div className="h-[300px] w-[700px]">
        <CodeBlock snippets={snippets}>
          <CodeBlock.Header>
            <CodeBlock.Header.Meta>
              <Label weight={"plus"}>/product-detail.js</Label>
            </CodeBlock.Header.Meta>
          </CodeBlock.Header>
          <CodeBlock.Body />
        </CodeBlock>
      </div>
    )
  },
}

const code = `echo "Hello, World!"
Hello, World!`

export const ManyLines: Story = {
  render: () => {
    return (
      <CodeBlock
        snippets={[
          {
            code: code,
            label: "Test",
            language: "bash",
            hideCopy: true,
          },
        ]}
        className="w-[700px]"
      >
        <CodeBlock.Body />
      </CodeBlock>
    )
  },
}
