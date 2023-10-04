import './globals.css'
import Footer from '@/components/Footer'
import { Providers } from '@/redux/provider'
import Header from '@/components/Header'


export const metadata = {
  title: 'Sneko - Home',
  description: 'Buy best quality and premium Snekers on Sneko at good price',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <>
            {/* @ts-expect-error Server Component */}
            <Header />
            {children}
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  )
}
