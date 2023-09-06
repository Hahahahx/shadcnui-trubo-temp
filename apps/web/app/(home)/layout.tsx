
import { Sidebar } from '@/components/sidebar'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { playlists } from '@/config/sidebar'

export default function App({ children }: RootLayoutProps) {
  return (
    <main className="w-screen h-screen container">

      <SiteHeader />
      {/*
      <header style={{
        display: 'flex', gap: 24,
      }}
      >
        <Button onClick={() => modals.open('/modal')}>
          Global modal at current route
        </Button>
        <Button onClick={() => modals.open('/modal', { at: '/about' })}>Global modal at /about</Button>
        <Button onClick={e}>navigate to</Button>
      </header> */}
      {/* <Menu /> */}

      <section className="grid lg:grid-cols-5">
        <Sidebar playlists={playlists} className="hidden lg:block lg:col-span-1" />
        <div className="lg:col-span-6 lg:col-start-2 lg:col-end-6">
          {children}
          {/* <div className="w-full h-[2000px] bg-slate-50" /> */}
        </div>
      </section>

      {/* <Modals /> */}

      <SiteFooter />
    </main>
  )
}
