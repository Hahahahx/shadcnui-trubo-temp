'use client'
import { usePathname } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'

export default function Index({ children }: RootLayoutProps) {
  const pathname = usePathname()

  // const r = useMatch('/network')

  return (

    <>

      <div className="  h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{(`title-${pathname}`)}</h2>
            <p className="text-muted-foreground">
              {(`descri-${pathname}`)}
            </p>
          </div>
          <div className="flex items-center space-x-2" />
        </div>
        <div>
          <Breadcrumbs />
        </div>
        {/* <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Jenas
          </div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">{p.pathname}</div>
        </div> */}
        {children}
      </div>
    </>
  )
}
