async function getData(props: any) {
  const id = props?.params?.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BlogItem(props: any) {
  const data = await getData(props);
  return (
    <main className="min-h-screen">
      <h1>Blog Item next 2</h1>
      <div>id: {data.id}</div>
      <div>{data?.title}</div>
    </main>
  );
}
