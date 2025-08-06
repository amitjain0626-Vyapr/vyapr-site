import { cookies } from "next/headers";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // ✅ SSR Debug log
  console.log("🔍 Server-side route param:", slug);

  // 🔎 TEMP: Manual match test
  if (slug !== "dr-amit-jain") {
    return <h1 className="p-10 text-red-500 text-xl">Slug not matched</h1>;
  }

  // ✅ Success
  return (
    <main className="p-10">
      <h1 className="text-2xl text-green-600">✅ It works: {slug}</h1>
    </main>
  );
}