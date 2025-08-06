// app/d/[slug]/page.tsx

import { cookies } from "next/headers";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // ✅ SSR Debug Log — shows up in Vercel logs
  console.log("✅ SSR reached slug page:", slug);

  // ✅ TEMP fallback rendering to test route match
  if (slug !== "dr-amit-jain") {
    return (
      <main className="p-10">
        <h1 className="text-red-600 text-xl">⛔ Slug not matched: {slug}</h1>
      </main>
    );
  }

  return (
    <main className="p-10">
      <h1 className="text-green-600 text-2xl">✅ It works: {slug}</h1>
    </main>
  );
}
