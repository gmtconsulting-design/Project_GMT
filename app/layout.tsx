import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: 'GMT - GrowMore Technocrats Consulting LLP',
  description: 'Transform your business with cutting-edge technology solutions. GMT helps companies grow through expert consulting, digital transformation, and innovative tech strategies.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/GMT_Logo1.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/GMT_Logo1.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/GMT_Logo1.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script strategy="lazyOnload" />
      </body>
    </html>
  )
}
