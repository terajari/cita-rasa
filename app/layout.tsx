import type { Metadata } from 'next'
import './globals.css'
import MainHeader from '@/components/main-header/main-header'
 
export const metadata: Metadata = {
  title: 'Cita Rasa',
  description: 'Resep masakan bercita rasa Nusantara',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <MainHeader />
          {children}
        </body>
      </html>
    )
  }