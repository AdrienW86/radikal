export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* ... tes liens ... */}
      </head>
      <body className={inter.className}>
        
        {/* Utilise un seul bloc script pour Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17195247675"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
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