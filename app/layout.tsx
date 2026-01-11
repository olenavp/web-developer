import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"
import Header from "@/components/header/Header"
import { GoogleAnalytics } from "@/components/GoogleAnalytics"
import { CookieBanner } from "@/components/CookieBanner"

export const metadata: Metadata = {
  title: "Професійна веб-розробка для бізнесу",
  description:
    "Створюю сайти, які вирішують бізнес-задачі. Заявки, довіра клієнтів, швидкий запуск та можливості для росту вашого бізнесу.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body className={`font-sans antialiased`}>
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
