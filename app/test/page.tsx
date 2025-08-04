'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function DentistTestPage() {
  const [dentist, setDentist] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchDentist = async () => {
      const { data, error } = await supabase
        .from('"Dentists"') // 👈 FIXED: Table name must match exact casing
        .select('*')
        .eq('slug', 'dr-amit-jain')
        .single()

      setDentist(data)
      setError(error)
    }

    fetchDentist()
  }, [])

  if (error) return <div>Error: {error.message}</div>
  if (!dentist) return <div>Loading...</div>

  const whatsappUrl = `https://wa.me/91${dentist.phone}?text=Hi%20Dr.%20${dentist.name},%20I%20want%20to%20book%20a%20session%20with%20you.`

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{dentist.name}</h1>
      <p><strong>Location:</strong> {dentist.location}</p>
      <p><strong>Specialization:</strong> {dentist.specialization}</p>
      <p><strong>Bio:</strong> {dentist.bio}</p>
      <br />
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Book via WhatsApp
        </button>
      </a>
    </div>
  )
}

