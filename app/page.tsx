'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'

export default function Home() {
  const [status, setStatus] = useState('')
  const [dentists, setDentists] = useState<any[]>([])

  const supabase = createClient()

  const handleTestInsert = async () => {
    const { error } = await supabase.from('dentists').insert([
      {
        name: 'Dr. Demo',
        email: 'demo@vyapr.com',
        phone: '9873284544',
        Source: 'manual',
        slug: 'dr-demo',
        profile_pic_url: '',
        specialization: '',
        location: '',
        bio: '',
      },
    ])
    setStatus(error ? '❌ Insert failed' : '✅ Insert successful!')
  }

  useEffect(() => {
    const fetchDentists = async () => {
      const { data, error } = await supabase.from('dentists').select('*')
      if (data) setDentists(data)
    }
    fetchDentists()
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white text-charcoal">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-jade">Run your practice like a pro.</h1>
        <p className="text-lg text-gray-700 mb-6">
          Vyapr helps solo dentists launch online in minutes with an AI agent, WhatsApp CRM & a stunning page.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/onboard">
            <div className="px-6 py-3 bg-jade text-white rounded-xl shadow hover:bg-jade-dark cursor-pointer transition">
              Create Your Page
            </div>
          </Link>
          <Link href="https://wa.me/919873284544?text=Hi+Vyapr,+I+want+a+demo" target="_blank">
            <div className="px-6 py-3 border border-gold-dull text-gold-dull rounded-xl hover:bg-gold hover:text-white cursor-pointer transition">
              Book Demo
            </div>
          </Link>
        </div>

        <button
          onClick={handleTestInsert}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Test Insert Dentist
        </button>
        {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
      </section>

      {/* ⬇⬇⬇ Dentist Listing Section ⬇⬇⬇ */}
      <section className="mt-12 w-full max-w-6xl px-4">
        <h2 className="text-2xl font-bold mb-6 text-left">Meet Our Dentists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentists.map((dentist) => (
            <Link
              key={dentist.slug}
              href={`/d/${dentist.slug}`}
              className="block border rounded-2xl p-4 shadow hover:shadow-lg transition text-left"
            >
              <img
                src={dentist.profile_pic_url || 'https://via.placeholder.com/300x200?text=Dentist'}
                alt={dentist.name}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-semibold">{dentist.name}</h3>
              <p className="text-sm text-gray-700">{dentist.specialization}</p>
              <p className="text-xs text-gray-500">{dentist.location}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        Made with ❤️ in India
      </footer>
    </main>
  )
}
