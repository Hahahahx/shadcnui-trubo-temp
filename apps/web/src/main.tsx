import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import '@/styles/globals.css'

const container = document.getElementById('app')!
createRoot(container).render(<Routes />)
