export default function Page({ params }: { params: { slug?: string } }) {
  return (
    <div>
      <h1>Hello from {params.slug ?? "no slug"}</h1>
    </div>
  );
}



