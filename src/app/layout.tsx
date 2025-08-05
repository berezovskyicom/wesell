import type { Metadata, Viewport } from "next"
import { Montserrat, Unbounded } from "next/font/google"
import { ReactNode } from "react"
import "./globals.scss"
import translate from "@/utils/translate"

const unboundedFont = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
})

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
})

export const generateMetadata = (): Metadata => ({
  title: "WeSell",
  description: translate("home.metadata.description"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
})

export const viewport: Viewport = {
  themeColor: "#FFED00",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${unboundedFont.variable} ${montserratFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
