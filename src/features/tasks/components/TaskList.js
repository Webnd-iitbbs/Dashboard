import TaskCard from "./TaskCard";

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888888]">
          Tasks
        </p>
        <div className="rounded-lg border border-dashed border-[#2A2A2A] bg-[#1A1A1A]/50 p-8 text-center">
          <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#555]">
            No tasks yet
          </p>
          <p className="mt-2 text-[12px] text-[#444]">
            Create your first task above to get started
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888888]">
        Tasks
      </p>
      <div className="grid gap-3">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="animate-fadeSlideUp"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}