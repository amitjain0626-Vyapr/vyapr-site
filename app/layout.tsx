import './globals.css'
import { createClient } from './utils/supabase/client'

import Link from 'next/link'

export const metadata = {
  title: 'Vyapr',
  description: 'Vyapr - Digital Stack for Solopreneurs',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body>
        <header className="bg-indigo-600 text-white p-4 flex justify-between">
          <Link href="/" className="font-bold">Vyapr</Link>
          <nav>
            {user ? (
              <form action="/auth/signout" method="post">
                <button type="submit" className="bg-white text-indigo-600 px-3 py-1 rounded">Logout</button>
              </form>
            ) : (
              <Link href="/login" className="bg-white text-indigo-600 px-3 py-1 rounded">Login</Link>
            )}
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
