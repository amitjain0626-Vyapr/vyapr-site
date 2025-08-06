import { Metadata } from 'next';

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${params.slug}'s Vyapr Page`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log('✅ Server-side rendering for slug:', slug);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello from {slug}</h1>
      <p>This is the dynamic route for <strong>{slug}</strong>.</p>
    </div>
  );
}
