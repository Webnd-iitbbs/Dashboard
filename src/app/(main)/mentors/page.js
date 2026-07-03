import { requireAuth } from "@/features/auth/lib/auth";
import AdminMentorsPage from "@/views/admin/AdminMentorsPage";
import { isAdmin, isMentor } from "@/features/auth/lib/permissions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await requireAuth();

  if(user.role === "ADMIN"){
    return <AdminMentorsPage/>
  }
  else if(user.role === "MENTOR"){
    redirect("/dashboard");
  }
  else{
    redirect("/dashboard");
  }
}