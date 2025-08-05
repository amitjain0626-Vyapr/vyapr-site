export default function ProfilePage({ params }: any) {
  const { profile } = params;

  return (
    <main className="p-4">
      <h1 className="text-xl font-semibold">Welcome, Dr. {profile}!</h1>
      <p>This is your public profile page.</p>
    </main>
  );
}
