'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else {
        setUserEmail(user?.email ?? null);
      }
    };

    fetchUser();
  }, []);

  if (!userEmail) return null;

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome, {userEmail} 👋</h1>
      <p>You are now logged in via magic link.</p>
    </div>
  );
}

