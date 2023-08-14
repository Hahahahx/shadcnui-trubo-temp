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
          to="/docs"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Documentation
        </Link>
        <Link
          to="/docs/components"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/docs/components')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Components
        </Link>
        <Link
          to="/themes"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/themes')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Themes
        </Link>
        <Link
          to="/examples"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Examples
        </Link>
        <Link
          to={siteConfig.links.github}
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block',
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
