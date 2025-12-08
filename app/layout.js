import './globals.css'
import { Toaster } from 'sonner'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Dove Equities - New York's #1 Homebuyers",
  description: "We buy houses in ANY condition. Fast closing, all cash offers, no repairs needed. 20+ years of proven expertise in New York.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />       {/* ← now appears on ALL pages */}
        <main className="pt-20">   {/* add padding because navbar is fixed */}
          {children}
        </main>
        <Footer />       {/* ← global footer */}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}

