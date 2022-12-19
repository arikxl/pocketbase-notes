
import Link from 'next/link'

import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
          TEST
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
