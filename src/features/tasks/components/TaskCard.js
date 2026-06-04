import { deleteTask } from "../actions/delete-task";

export default function TaskCard({ task }) {
  return (
    <div className="relative rounded-lg border border-[#2A2A2A] bg-[#111111] p-4 overflow-hidden transition-all hover:-translate-y-0.5 hover:border-[#F5C518]/30 hover:shadow-[0_0_12px_rgba(245,197,24,0.08)]">
      {/* Yellow top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#F5C518]" />

      <h3 className="text-[15px] font-medium text-[#F5C518] pt-1">
        {task.title}
      </h3>

      <p className="mt-2 text-[12px] text-[#888888] leading-relaxed">
        {task.description}
      </p>

      <form action={deleteTask}>
        <input type="hidden" name="taskId" value={task.id} />
        <button className="mt-4 rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-3 py-1.5 text-[11px] font-medium text-[#666] transition-all hover:border-red-500/40 hover:text-red-400 active:scale-[0.96]">
          Delete
        </button>
      </form>
    </div>
  );
}