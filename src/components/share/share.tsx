"use client"

import { Tooltip } from "@/components/tooltip"
import { clx } from "@/utils/clx"
import { Check, ArrowUpTray } from "@medusajs/icons"
import { Slot } from "@radix-ui/react-slot"
import React, { useState } from "react"

type ShareProps = {
  content: string
  title: string
  url: string
  asChild?: boolean
}

const Share = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & ShareProps
>(({ children, className, content, title, url, asChild = false, ...props }, ref) => {
  const [done, setDone] = useState(false)
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("Share")
  
  const shareItem = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: content,
        url: url,
      }).then(() => {
        setDone(true);
        setTimeout(() => {
          setDone(false);
        }, 2000);
      }).catch((error) => console.log('Sharing failed', error));
    } else {
      console.log('Share service not available');
    }
  }

  const Share = () => {
    setDone(true)
    shareItem()

    setTimeout(() => {
      setDone(false)
    }, 2000)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setText("Share")
    }, 500)
  }, [done])

  const Component = asChild ? Slot : "button"

  return (
    <Tooltip content={text} open={done || open} onOpenChange={setOpen}>
      <Component
        ref={ref}
        aria-label="Share code snippet"
        type="button"
        className={clx("text-ui-code-icon h-fit w-fit", className)}
        onClick={Share}
        {...props}
      >
        {children ? children : done ? <ArrowUpTray /> : <ArrowUpTray />}
      </Component>
    </Tooltip>
  )
})
Share.displayName = "Share"

export { Share }
