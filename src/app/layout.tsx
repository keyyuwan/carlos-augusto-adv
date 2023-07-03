import { ReactNode } from 'react'
import { Inter, Libre_Baskerville as LibreBaskerville } from 'next/font/google'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const libreBaskerville = LibreBaskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
})

export const metadata = {
  title: 'Carlos Augusto Advogados',
  description: 'O melhor advogado criminal de SP e região',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} font-text text-white`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
