import { cookies } from "next/headers";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const slug = params.slug;

  console.log("✅ [slug]/page.tsx loaded with slug:", slug);

  // TEMP DEBUG
  if (slug !== 'dr-amit-jain') {
    return <h1>Slug not matched</h1>;
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl">✅ It works: {slug}</h1>
    </main>
  );
}