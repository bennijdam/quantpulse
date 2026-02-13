import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QuantPulse Terminal',
  description: 'Bloomberg-style financial analytics terminal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-terminal-black text-terminal-text font-mono">{children}</body>
    </html>
  )
}
