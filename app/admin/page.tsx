import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Welcome Editor</h1>
      <p>You are logged in.</p>

      <a href="/admin/create">Create News</a>
    </div>
  );
}
