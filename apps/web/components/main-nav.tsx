import * as React from 'react'
import { Logo } from './icon/logo'

function MainNav() {
  // const { pathname } = useLocation()

  return (
    <div className="mr-4 hidden lg:flex">
      {
        // million-ignore
        <Logo />
      }
      {/* <nav className="flex items-center space-x-6 text-sm font-medium">
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
      </nav> */}
    </div>
  )
}

export { MainNav }
