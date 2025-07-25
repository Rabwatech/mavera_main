import '../index.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mavera Luxury Wedding Ballroom Landing Page</title>
      </head>
      <body>
        <div className="min-h-screen bg-[#FAF9F7] text-[#2D2926] overflow-x-hidden">
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
