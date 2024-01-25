"use client"

import * as Primitives from '@radix-ui/react-scroll-area';
import * as React from "react"

import { clx } from "@/utils/clx"

import "./style.css"

const Root = React.forwardRef<
  React.ElementRef<typeof Primitives.Root>,
  React.ComponentPropsWithoutRef<typeof Primitives.Root>
>(({ className, ...props }, ref) => {
    return (
        <Primitives.Root
        className={clx(`width: 200px;
        height: 225px;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 2px 10px var(--black-a7);
        background-color: white;
        --scrollbar-size: 10px;`, className)}
        {...props}
        ref={ref}
    />
)
})
Root.displayName = "ScrollArea.Root"

const Viewport = React.forwardRef<
  React.ElementRef<typeof Primitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof Primitives.Viewport>
>(({ className, ...props }, ref) => {
    return (
        <Primitives.Viewport
            className={clx("grid gap-2", className)}
            {...props}
            ref={ref}
        />
    )
}
)
Viewport.displayName = "ScrollArea.Viewport"

const Scrollbar = React.forwardRef<
    React.ElementRef<typeof Primitives.Scrollbar>,
    React.ComponentPropsWithoutRef<typeof Primitives.Scrollbar>
>((props, ref) => {
    return (
        <Primitives.Scrollbar
            {...props}
            ref={ref}
        />
    )
}
)
Scrollbar.displayName = "ScrollArea.Scrollbar"

const Thumb = React.forwardRef<
    React.ElementRef<typeof Primitives.Thumb>,
    React.ComponentPropsWithoutRef<typeof Primitives.Thumb>
>((props, ref) => {
    return (
        <Primitives.Thumb
            {...props}
            ref={ref}
        />
    )
}
)
Thumb.displayName = "ScrollArea.Thumb"

const Corner = React.forwardRef<
    React.ElementRef<typeof Primitives.Corner>,
    React.ComponentPropsWithoutRef<typeof Primitives.Corner>
>((props, ref) => {
    return (
        <Primitives.Corner
            {...props}
            ref={ref}
        />
    )
}
)
Corner.displayName = "ScrollArea.Corner"

const ScrollArea = Object.assign(Root, {
    Viewport,
    Scrollbar,
    Thumb,
    Corner,
    Root,
})

export { ScrollArea }