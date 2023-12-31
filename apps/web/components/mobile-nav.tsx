'use client'

import * as React from 'react'

import {
  Button, ScrollArea, Sheet, SheetContent, SheetTrigger, ViewVerticalIcon, cn,
} from 'shadcn-ui'
import Link from 'next/link'
import type { Url } from 'next/dist/shared/lib/router/router'
import { Sidebar } from './sidebar'

// import type {
//   ModalPath, Params,
//   Path,
// } from '@/router'
import { Icons } from './icon/icons'
import { siteConfig } from '@/config/site'

// import logo from '@/assets/images/logo/green.svg'

export function MobileNav() {
  const [
    open, setOpen,
  ] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <ViewVerticalIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => {
            // router(href)
            setOpen(false)
          }}
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          {/* <img src={logo} className="h-6 w-6" /> */}
          <span className="font-bold text-2xl">{siteConfig.name}</span>
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">

          <Sidebar playlists={[]} />
          {/* <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                ),
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length
                  && item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled
                        && (item.href
                          ? (
                            <MobileLink
                              href={item.href}
                              onOpenChange={setOpen}
                              className="text-muted-foreground"
                            >
                              {item.title}
                            </MobileLink>
                          )
                          : (
                            item.title
                          ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div> */}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  href?: Url
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  // const router = useNavigate()
  return (
    <Link
      href={href as any}
      onClick={() => {
        // router(href)
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
