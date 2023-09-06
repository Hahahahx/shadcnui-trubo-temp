import {
  For, block,
} from 'million/react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ChevronRightIcon } from 'shadcn-ui'

export const Breadcrumbs = block(() => {
  const pathname = usePathname()

  const pathnames = pathname.split('/')
  pathnames.shift()

  return (
    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">
        Jenas
      </div>
      <For each={pathnames}>
        {
          (path) => (
            <>
              <ChevronRightIcon className="h-4 w-4" />
              <div className="font-medium text-foreground">{path}</div>
            </>
          )
        }
      </For>
    </div>
  )
})
