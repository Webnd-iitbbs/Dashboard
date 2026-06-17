import { requireAuth } from "@/features/auth/lib/auth";
import AdminDashboardPage from "@/pages/admin/AdminDashboard";
import MemberDashboardPage from "@/pages/member/MemberDashboardPage";
import MentorDashboardPage from "@/pages/mentor/MentorDashboardPage";
import { isAdmin, isMentor } from "@/features/auth/lib/permissions";

export default async function DashboardPage() {
  const user = await requireAuth();

  if(isAdmin(user)){
    return <AdminDashboardPage/>
  }
  else if(isMentor(user)){
    return <MentorDashboardPage/>
  }
  else{
    return <MemberDashboardPage user={user}/>
  }
}