import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import LoadingScreen from '@/components/Loader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'smart funds',
  description: 'smart funds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-full`}>
        <Suspense fallback={<LoadingScreen/>}>
        {children}
        </Suspense>
        </body>
    </html>
  )
}
