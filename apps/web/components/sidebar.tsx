'use client'

import {
  Button, Card, CardContent, Separator, cn,
} from 'shadcn-ui'
import Link from 'next/link'
import type { Url } from 'next/dist/shared/lib/router/router'
import { usePathname } from 'next/navigation'
import { For } from 'million/react'
import { ProgressShow } from './progress-show'
import type { Playlist } from '@/config/sidebar'
import { sider } from '@/config/sidebar'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({
  className, playlists,
}: SidebarProps) {
  return (
    <div className={cn('pb-12', className)}>

      <div className="space-y-4 py-4">
        <For each={sider}>
          {
            (item) => (
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  {item.name}
                </h2>
                <div className="space-y-1">
                  {
                    item.child.map((route, j) => (
                      <SubLink {...route} key={j} />
                    ))
                  }
                </div>
              </div>)
          }
        </For>

      </div>
      <Card className="mt-4">
        <CardContent>
          <ProgressShow
            value={9} label="CPU" description="
          Control diversity via nucleus sampling: 0.5 means half of all
          likelihood-weighted options are considered."
          />
          <ProgressShow
            value={9} label="CPU" description="
          Control diversity via nucleus sampling: 0.5 means half of all
          likelihood-weighted options are considered."
          />
          <ProgressShow
            value={9} label="CPU" description="
          Control diversity via nucleus sampling: 0.5 means half of all
          likelihood-weighted options are considered."
          />
        </CardContent>
      </Card>
    </div>
  )
}

function SubLink(route: {
  name: string
  href: Url
  Icon: (props: any) => JSX.Element
 }) {
  const pathname = usePathname()
  // const router = useRouter()
  const match = route.href === pathname// useMatch(route.href)

  return (
    <Button variant={match ? 'secondary' : 'ghost'} asChild className={cn('w-full justify-start', { 'shadow-inner': match })}>
      <Link href={route.href as any} className="flex gap-3 items-center ">
        <route.Icon className={cn('h-6 w-6 ')} color={match ? ' hsl(var(--primary))' : 'rgba(0,0,0,0.5)'} />
        <Separator orientation="vertical" />
        <span className={cn('pt-1', { 'font-extrabold': match })}>{route.name}</span>
      </Link>
    </Button>
  )
}
