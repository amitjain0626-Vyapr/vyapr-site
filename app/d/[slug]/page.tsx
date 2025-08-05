import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { notFound } from 'next/navigation';

export default async function MicrositePage({ params }: any) {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from('dentists')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!data || error) {
    notFound();
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <p className="text-lg mb-2">{data.specialization}</p>
      <p className="text-gray-500">{data.location}</p>
      <p className="mt-4">{data.bio}</p>
    </div>
  );
}
