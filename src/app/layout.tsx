import './globals.css'
import type { Metadata } from 'next'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Git Search',
  description: 'GitHub profile finder app developed by Gonza Parra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' suppressHydrationWarning={true}>
      <body className='h-screen grid m-auto grid-rows-[60px,1fr,60px] gap-4 text-foreground bg-background'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
