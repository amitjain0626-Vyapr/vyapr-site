export const dynamic = "force-dynamic";
export const revalidate = 0;

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";

export default async function MicrositePage({ params }: any) {
  console.log("✅ /d/[slug]/page.tsx loaded");

  const normalizedSlug = decodeURIComponent(params.slug).trim();
  console.log("🧪 Normalized slug:", normalizedSlug);

  const supabase = createServerComponentClient({ cookies });

  try {
    const { data, error } = await supabase
      .from("dentists")
      .select("*")
      .ilike("slug", normalizedSlug)
      .single();

    console.log("📦 Supabase query result:", { data, error });

    if (!data || error) {
      console.error("❌ Query failed — either data is null or error occurred");
      console.log("🔍 Data:", data);
      console.log("🔍 Error:", error);
      console.log("🔍 Slug used in query:", normalizedSlug);
      notFound();
    }

    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
        <p className="text-lg mb-2">
          {data.specialization ?? "Specialization coming soon"}
        </p>
        <p className="text-gray-500">
          {data.location ?? "Location not available"}
        </p>
        <p className="mt-4">{data.bio ?? "No bio provided yet."}</p>
      </div>
    );
  } catch (err) {
    console.error("🔥 Unexpected error in query:", err);
    notFound();
  }
}
