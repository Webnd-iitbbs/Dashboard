import { requireAuth } from "@/features/auth/lib/auth";
import Taskform from "@/features/tasks/components/TaskForm";
import Tasklist from "@/features/tasks/components/TaskList";
import { getMentorTasks } from "@/features/tasks/lib/get-mentor-tasks";

export default async function MentorTasksPage() {
  const user = await requireAuth();
  const tasks = await getMentorTasks(user.id);

  return (
  <main className="min-h-screen bg-[#0D0D0D] px-6 py-10">
    <div className="max-w-3xl mx-auto space-y-8">

      {/* Page header */}
      <div>
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888888] mb-1">
          Mentor Panel
        </p>
        <h1 className="text-[22px] font-medium text-[#F5F5F5]">
          My Tasks
        </h1>
      </div>

      <div className="h-px bg-[#2A2A2A]" />

      <Taskform />
      <Tasklist tasks={tasks} />

    </div>
  </main>
);
}