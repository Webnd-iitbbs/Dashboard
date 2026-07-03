import { requireAuth } from "@/features/auth/lib/auth";
import AdminMembersPage from "@/views/admin/AdminMembersPage";
import { isAdmin, isMentor } from "@/features/auth/lib/permissions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await requireAuth();

  if(user.role === "ADMIN"){
    return <AdminMembersPage/>
  }
  else if(user.role === "MENTOR"){
    redirect("/dashboard");
  }
  else{
    redirect("/dashboard");
  }
}