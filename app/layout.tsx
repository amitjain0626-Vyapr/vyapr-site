import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Vyapr',
  description: 'Vyapr - Digital Stack for Solopreneurs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}