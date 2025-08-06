import { cookies } from "next/headers";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  console.log("✅ SSR Route Hit for slug:", slug);

  return (
    <main className="p-10">
      <h1 className="text-2xl">✅ It works: {slug}</h1>
    </main>
  );
}

// ✅ Force dynamic rendering to fix stale cache or prebuild issues
export const dynamic = "force-dynamic";