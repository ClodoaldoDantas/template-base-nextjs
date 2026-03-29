import type { Metadata } from 'next'
import { Sora, Geist } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="pt-BR" className={cn("antialiased", sora.variable, "font-sans", geist.variable)}>
      <body className="min-h-dvh">{children}</body>
    </html>
  )
}
