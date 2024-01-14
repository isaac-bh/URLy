import type { Metadata } from 'next'
import { satoshi } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'URLy',
  description: 'URL Shortener',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={satoshi.className}>{children}</body>
    </html>
  )
}
