'use client'

import * as React from 'react'

// import { ThemeProvider, ThemeProviderProps } from "../components/theme-provider"
import { ThemeProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import { TooltipProvider } from '../ui/tooltip'
import '../styles/globals.css'

export function ShadcnProvider({
  children, ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  )
}
