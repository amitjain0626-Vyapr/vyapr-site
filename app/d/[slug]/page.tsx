type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  console.log("✅ SSR for slug:", params.slug)
  return (
    <div>
      <h1>Hello from {params.slug}</h1>
    </div>
  );
}
