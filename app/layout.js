import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Dove Equities - New York\'s #1 Homebuyers',
  description: 'We buy houses in ANY condition. Fast closing, all cash offers, no repairs needed. 20+ years of proven expertise in New York.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}