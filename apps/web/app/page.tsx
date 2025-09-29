import client from "@repo/db";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      {user?.username}
      {user?.password}
      <br />
      <div>
        hi there
      </div>
    </div>
  );
}
