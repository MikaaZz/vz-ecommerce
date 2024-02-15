type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/user', {
    method: 'GET',
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  const user: User = await res.json();
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
