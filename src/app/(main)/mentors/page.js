import { requireAuth } from "@/features/auth/lib/auth";
import AdminMentorsPage from "@/pages/admin/AdminMentorsPage";
import { isAdmin, isMentor } from "@/features/auth/lib/permissions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await requireAuth();

  if(isAdmin(user)){
    return <AdminMentorsPage/>
  }
  else if(isMentor(user)){
    redirect("/dashboard");
  }
  else{
    redirect("/dashboard");
  }
}