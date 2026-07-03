import { requireAuth } from "@/features/auth/lib/auth";
import MemberTasksPage from "@/views/member/MemberTasksPage";
import MentorTasksPage from "@/views/mentor/MentorTasksPage";
import { redirect } from "next/navigation";
import { getMentorMentees, getMentorTasks } from "@/features/mentor/getMentor";
import { fetchTask } from "@/features/tasks/lib/manageTask";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const user = await requireAuth();

  if (user.role === "ADMIN") {
    redirect("/dashboard");
  }
  else if (user.role === "MENTOR") {
    const tasks = await getMentorTasks(user.id);
    const mentees = await getMentorMentees(user.id);
    return <MentorTasksPage mentorTasks={tasks} mentees={mentees} />
  }
  else {
    const tasks = await fetchTask(user.id);
    const member = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      include: {
        studentLinks: {
          include: {
            mentor: true,
          },
        },
      },
    })
    return <MemberTasksPage user={member} tasks={tasks} />
  }
}