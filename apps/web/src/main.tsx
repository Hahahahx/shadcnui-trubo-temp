import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import 'shadcn-ui/src/styles/globals.css'
import { ShadcnProvider } from 'shadcn-ui'

const container = document.getElementById('app')!
createRoot(container).render(
  <ShadcnProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <Routes />
  </ShadcnProvider>,
)
