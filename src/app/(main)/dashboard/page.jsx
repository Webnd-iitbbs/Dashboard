import { requireAuth } from "@/features/auth/lib/auth";
import AdminDashboardPage from "@/views/admin/AdminDashboard";
import MemberDashboardPage from "@/views/member/MemberDashboardPage";
import MentorDashboardPage from "@/views/mentor/MentorDashboardPage";
import { isAdmin, isMentor } from "@/features/auth/lib/permissions";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const user = await requireAuth();

  if(user.role === "ADMIN"){
    return <AdminDashboardPage/>
  }
  else if(user.role === "MENTOR"){
    return <MentorDashboardPage/>
  }
  else{
    const member = await prisma.user.findUnique({
  where: {
    id: user.id,
  },
  include: {
    studentLinks: {
      where: {
        isActive: true,
      },
      include: {
        mentor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    },

    assignedTasks: {
      include: {
        task: true,
        submission: true,
      },
    },
  },
})
    return <MemberDashboardPage user={user} data={member}/>
  }
}