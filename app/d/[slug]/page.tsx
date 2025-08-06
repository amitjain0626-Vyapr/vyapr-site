import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

// ✅ DON'T add your own `{ params: { slug: string } }` type — let Next.js infer
export default async function Page(props: any) {
  const slug = props?.params?.slug;

  console.log("✅ SSR HIT — Slug is:", slug);

  return (
    <main className="p-10">
      <h1 className="text-2xl">✅ It works: {slug}</h1>
    </main>
  );
}
