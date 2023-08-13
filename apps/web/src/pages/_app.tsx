import { Outlet } from 'react-router-dom'
import { Modals } from '@generouted/react-router'

import { Button } from 'shadcn-ui'
import {
  Link, useModals, useNavigate, useParams,
} from '../router'

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
    <section style={{ margin: 24 }}>
      <header style={{
        display: 'flex', gap: 24,
      }}>
        <Link to="/">Home</Link>
        <Link to={{ pathname: '/about' }}>About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/:id/:pid?" params={{
          id: '1', pid: '2',
        }}>
          Posts by id/pid
        </Link>
        <Link to="/posts/:id" params={{ id: 'id' }}>
          Posts by id
        </Link>
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
