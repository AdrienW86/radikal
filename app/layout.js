import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import FloatingCTA from '@/components/FloatingCTA/FloatingCTA'; 
import Footer from '@/components/Footer/Footer';
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Radikal 3D - Anti Nuisibles Perpignan',
  description: 'Extermination radicale de vos nuisibles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        
        {/* LA PARADE ABSOLUE : On injecte Tailwind en version CSS pur. Zéro script, zéro blocage possible par Next.js */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" 
        />
      </head>
      <body className={inter.className}>
        
        {/* Tes scripts Google Ads restent ici, ils bougent pas */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17195247675"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17195247675');
          `}
        </Script>

        <Header />
        <main>{children}</main>
        <FloatingCTA />
        <Footer />

      </body>
    </html>
  )
}