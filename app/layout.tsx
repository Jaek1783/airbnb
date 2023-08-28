import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const font = Nunito({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Aitbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko"> 
      <body className={font.className  }>{children}</body>
    </html>
  )
}
