import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"
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
  title: translate("home.metadata.title"),
  description: translate("home.metadata.description"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  metadataBase: new URL("https://wesellservice.com"),
  alternates: {
    canonical: "/",
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
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <body className={`${unboundedFont.variable} ${montserratFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
