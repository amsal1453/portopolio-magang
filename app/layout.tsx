import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portopolio-Amsal',
  description: 'Bade Amsal Js',
  generator: 'Amsal Dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
