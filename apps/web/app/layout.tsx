'use client'
import 'shadcn-ui/src/styles/globals.css'
import type { Metadata } from 'next'
import {
  ShadcnProvider, ThemeWrapper,
} from 'shadcn-ui'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    {
      media: '(prefers-color-scheme: light)', color: 'white',
    },
    {
      media: '(prefers-color-scheme: dark)', color: 'black',
    },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

// million-ignore
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ShadcnProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeWrapper
            className="relative flex flex-col min-h-screen"
          >
            {/* <SiteHeader /> */}
            <div className="flex-1">{children}</div>
            {/* <TailwindIndicator /> */}
          </ThemeWrapper>
        </ShadcnProvider>
      </body>
    </html>
  )
}
