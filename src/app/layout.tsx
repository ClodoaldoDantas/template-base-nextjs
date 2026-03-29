import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Template Base',
  description: 'A template base for Next.js projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  )
}
