import { requireAuth } from "@/features/auth/lib/auth";
import MentorSubmissionsPage from "@/views/mentor/MentorSubmissionsPage";
import { isAdmin, isMentor } from "@/features/auth/lib/permissions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await requireAuth();

  if(user.role === "ADMIN"){
    redirect("/dashboard");
  }
  else if(user.role === "MENTOR"){
    return <MentorSubmissionsPage/>
  }
  else{
    redirect("/dashboard");
  }
}