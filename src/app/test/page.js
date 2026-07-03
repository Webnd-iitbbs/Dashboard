import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function TestPage() {
  const users = await prisma.user.findMany();

  return (
    <pre>
      {JSON.stringify(users, null, 2)}
    </pre>
  );
}