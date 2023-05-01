import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import localFont from 'next/font/local'

const ConfigProviders = dynamic(() => import('./ConfigProviders'))
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Golobe',
    template: '%s | Golobe',
  },
  description: 'Travel agency website (Community)',
}

const font = localFont({
  src: '../public/assets/fonts/TradeGothicLTRegular.ttf',
  variable: '--font-TradeGothicLTRegular',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-sans`}>
        <ConfigProviders>{children}</ConfigProviders>
      </body>
    </html>
  )
}
