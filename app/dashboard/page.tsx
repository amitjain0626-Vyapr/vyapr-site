import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.email} 👋</h1>
      <p>You are now logged in via magic link.</p>
    </div>
  );
}

