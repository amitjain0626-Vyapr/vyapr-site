'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function OnboardingPage() {
  const router = useRouter();
  const supabase = createClient();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    specialization: '',
    bio: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace('/login');
      }
    };
    checkAuth();
  }, [router, supabase]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateSlug = (name: string) =>
    'dr-' + name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const slug = generateSlug(formData.name);

    const { error } = await supabase.from('dentists').insert([
      {
        ...formData,
        slug
      }
    ]);

    setLoading(false);

    if (error) {
      alert('Error submitting form: ' + error.message);
    } else {
      alert('Success! Redirecting to your profile.');
      router.push(`/d/${slug}`);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Dentist Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required /><br /><br />
        <input name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
        <input name="phone" placeholder="Phone" onChange={handleChange} /><br /><br />
        <input name="location" placeholder="City" onChange={handleChange} /><br /><br />
        <input name="specialization" placeholder="Specialization" onChange={handleChange} /><br /><br />
        <textarea name="bio" placeholder="Short Bio" onChange={handleChange} /><br /><br />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
