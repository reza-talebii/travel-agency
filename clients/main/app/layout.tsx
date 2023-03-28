import StyledComponentsRegistry from '@/lib/registry'
import localFont from 'next/font/local'
import ConfigProviders from './ConfigProviders'
import '@/styles/globals.css'

export const metadata = {
  title: 'Golobe ',
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
        <ConfigProviders>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ConfigProviders>
      </body>
    </html>
  )
}
