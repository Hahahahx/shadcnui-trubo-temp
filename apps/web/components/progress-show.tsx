'use client'

import * as React from 'react'
import {
  HoverCard, HoverCardContent, HoverCardTrigger, Label, Progress,
} from 'shadcn-ui'

interface ProgressShowProps {
  label: string
  value: number
  description: string
}

export function ProgressShow({
  value, label,
  description,
}: ProgressShowProps) {
  return (
    <div className="grid gap-2 py-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="top-p">{label}</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {value}%
              </span>
            </div>
            <Progress value={value} className="" />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          {description}
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
