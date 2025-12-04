// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

export const metadata = {
  title: "Dove Equities - New York's #1 Homebuyers",
  description:
    "We buy houses in ANY condition. Fast closing, all cash offers, no repairs needed. 20+ years of proven expertise in New York.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 pt-16">
          {/* 'pt-16' pushes content below fixed navbar; adjust if needed */}
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast notifications */}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
