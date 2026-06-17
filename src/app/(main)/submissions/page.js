import { requireAuth } from "@/features/auth/lib/auth";
import MentorSubmissionsPage from "@/pages/mentor/MentorSubmissionsPage";
import { isAdmin, isMentor } from "@/features/auth/lib/permissions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await requireAuth();

  if(isAdmin(user)){
    redirect("/dashboard");
  }
  else if(isMentor(user)){
    return <MentorSubmissionsPage/>
  }
  else{
    redirect("/dashboard");
  }
}