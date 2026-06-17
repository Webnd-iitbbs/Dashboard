import { requireAuth } from "@/features/auth/lib/auth";
import MemberTasksPage from "@/pages/member/MemberTasksPage";
import MentorTasksPage from "@/pages/mentor/MentorTasksPage";
import { isAdmin, isMentor } from "@/features/auth/lib/permissions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await requireAuth();

  if(isAdmin(user)){
    redirect("/dashboard");
  }
  else if(isMentor(user)){
    return <MentorTasksPage/>
  }
  else{
    return <MemberTasksPage/>
  }
}