import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();

  return (
    <main className="min-h-screen">
      <h1>Blog page (next2)</h1>

      <div>Posts</div>

      <ul>
        {data.map((item: any) => {
          return (
            <li key={item.id}>
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
