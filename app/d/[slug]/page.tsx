export default async function Page({ params }: { params: { slug: string } }) {
  console.log("✅ Rendering slug page for:", params.slug)

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Hello from {params.slug}</h1>
    </div>
  );
}
