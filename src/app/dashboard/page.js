import { requireAuth } from "@/features/auth/lib/auth";

export default async function DashboardPage() {
  const user = await requireAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>Hello {user.name}</h1>
    </div>
  );
}