import Navbar from "@annadurai/Navbar";
import type { Metadata } from "next";
import './globals.css';


export const metadata: Metadata = {
  title: 'Sundari Silks India',
  description: 'Developed by Annadurai S'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">

      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: 0, margin: 0 }}>
          <header
            style={{
              backgroundColor: "lightblue",
              padding: '1rem',
            }}

          >
            <Navbar />
          </header>
          <main style={{ minHeight: '88vh' }}>
            {children}
          </main>
          <footer style={{
            backgroundColor: "ghostwhite",
            padding: '1rem'
          }}>
            <p>Footer</p>
          </footer>
        </div>
      </body>
    </html>
  )
}