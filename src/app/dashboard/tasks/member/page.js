import { requireAuth } from "@/features/auth/lib/auth";
import Taskform from "@/features/tasks/components/TaskForm";
import Tasklist from "@/features/tasks/components/TaskList";

export default async function MemberTasksPage() {
  const user = await requireAuth();

  return (
    <main className="min-h-screen bg-[#0D0D0D] px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Page header */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888888] mb-1">
            My Tasks
          </p>
          <h1 className="text-[22px] font-medium text-[#F5F5F5]">
            Assigned Tasks
          </h1>
        </div>

        <div className="h-px bg-[#2A2A2A]" />

        <Tasklist tasks={user.tasks || []} />

      </div>
    </main>
  );
}
