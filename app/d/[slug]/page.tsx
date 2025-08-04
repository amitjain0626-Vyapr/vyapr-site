import { notFound } from "next/navigation";
import { createClient } from "@utils/supabase/server";

export const dynamic = "force-dynamic";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const supabase = createClient();

  const { data: dentist, error } = await supabase
    .from("dentists")
    .select("*")
    .ilike("slug", params.slug)
    .single();

  console.log("SLUG RECEIVED:", params.slug);
  console.log("DENTIST FOUND:", dentist);
  console.log("ERROR:", error);

  if (error || !dentist) {
    notFound();
  }

  return (
    <main className="min-h-screen p-10 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">{dentist.name}</h1>
      <img
        src={dentist.profile_pic_url || "https://via.placeholder.com/150"}
        alt={dentist.name}
        className="w-40 h-40 rounded-full object-cover mb-4"
      />
      <p><strong>Location:</strong> {dentist.location}</p>
      <p><strong>Specialization:</strong> {dentist.specialization || "—"}</p>
      <p><strong>Bio:</strong> {dentist.bio || "—"}</p>

      <a
        href={`https://wa.me/${dentist.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Book via WhatsApp
      </a>
    </main>
  );
}
