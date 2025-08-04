import { createClient } from '../../utils/supabase/client'

import { NextResponse } from 'next/server'

export async function POST() {
  const supabase = createClient()
  await supabase.auth.signOut()

  return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'), {
    status: 302,
  })
}
