import * as React from 'react'
import {
  Icons, cn,
} from 'shadcn-ui'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '@/lib/site'
import {
  Link,
} from '@/router'

export function MainNav() {
  const { pathname } = useLocation()

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          to="/about"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/about' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          About
        </Link>
        <Link
          to="/posts"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/posts')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Posts
        </Link>
        <Link
          to="/posts/:id/:pid?"
          params={{
            id: '1', pid: '2',
          }}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/themes')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Posts by id/pid?
        </Link>
        <Link
          to="/posts/:id"
          params={{
            id: 'test',
          }}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Post by id
        </Link>
      </nav>
    </div>
  )
}
