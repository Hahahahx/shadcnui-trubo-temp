import { Outlet } from 'react-router-dom'
import { Modals } from '@generouted/react-router'

import { Button } from 'shadcn-ui'
import {
  useModals, useNavigate, useParams,
} from '../router'
import { SiteHeader } from '@/components/site-header'

export function Catch() {
  return <div>Something went wrong... Caught at _app error boundary</div>
}

export function Pending() {
  return <div>Loading from _app...</div>
}

export default function App() {
  const navigate = useNavigate()
  const modals = useModals()
  const {
    id, pid,
  } = useParams('/posts/:id/:pid?')

  const a = () => navigate('/posts/:id', { params: { id: 'a' } })
  const b = () => navigate('/posts/:id', { params: { id: '' } })
  const c = () => navigate(-1)
  const d = () => navigate('/posts/:id/deep', { params: { id: 'd' } })
  const e = () => navigate('/posts/:id/deep', { params: { id: 'e' } })

  return (
    <section style={{ margin: 24 }} className="font-calsans tracking-wide">

      <SiteHeader />

      <header style={{
        display: 'flex', gap: 24,
      }}
      >
        <Button onClick={() => modals.open('/modal')}>
          Global modal at current route
        </Button>
        <Button onClick={() => modals.open('/modal', { at: '/about' })}>Global modal at /about</Button>
        <Button onClick={e}>navigate to</Button>
      </header>

      <main>
        <Outlet />
      </main>

      <Modals />
    </section>
  )
}
