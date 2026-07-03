import Link from "next/link";

export default function PendingTasks({ tasks = [] }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (assignment) => assignment.status === "COMPLETED"
  ).length;

  const pendingTasks = tasks.filter(
    (assignment) => assignment.status === "PENDING" || assignment.status === "REJECTED"
  ).length;

  const reviewTasks = tasks.filter(
    (assignment) => assignment.status === "SUBMITTED" || assignment.status === "UNDER_REVIEW"
  ).length;

  const availableXP = tasks
    .filter((assignment) => assignment.status !== "COMPLETED")
    .reduce((acc, assignment) => acc + (assignment.task?.xpReward || 0), 0);

  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const getDaysLeft = (deadline) => {
    if (!deadline) return 0;
    const today = new Date();
    const due = new Date(deadline);
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    const diff = due - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 m-4 md:m-7">
      <h2 className="text-2xl font-bold text-[#F5C518] mb-6">
        🚀 Active Tasks
      </h2>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-[#111111] p-4 rounded-xl text-center border border-[#2A2A2A]">
          <p className="text-[#888888] text-sm">Active</p>
          <h3 className="text-2xl font-bold text-[#F5C518]">{pendingTasks}</h3>
        </div>

        <div className="bg-[#111111] p-4 rounded-xl text-center border border-[#2A2A2A]">
          <p className="text-[#888888] text-sm">XP Available</p>
          <h3 className="text-2xl font-bold text-[#F5C518]">{availableXP}</h3>
        </div>

        <div className="bg-[#111111] p-4 rounded-xl text-center border border-[#2A2A2A]">
          <p className="text-[#888888] text-sm">Completed</p>
          <h3 className="text-2xl font-bold text-green-400">{completedTasks}</h3>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-[#888888]">Overall Progress</span>
          <span className="text-[#F5C518] font-medium">
            {completedTasks}/{totalTasks}
          </span>
        </div>

        <div className="h-3 bg-[#2A2A2A] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#F5C518] transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="mt-2 text-sm text-[#888888]">
          {progress.toFixed(0)}% Complete
        </p>
      </div>

      <div className="space-y-4">
        {tasks.map((assignment) => {
          const task = assignment.task;
          if (!task) return null;

          const daysLeft = getDaysLeft(task.deadline);
          const isCompleted = assignment.status === "COMPLETED";
          const isReview = assignment.status === "SUBMITTED" || assignment.status === "UNDER_REVIEW";
          const isRejected = assignment.status === "REJECTED";

          return (
            <div
              key={assignment.id}
              className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5 hover:border-[#F5C518] transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-[#F5F5F5]">
                    ⚔ {task.title}
                  </h3>

                  <p className="text-[#F5C518] mt-1 text-sm">
                    +{task.xpReward} XP Reward
                  </p>
                </div>

                <div className="text-right">
                  {!isCompleted && (
                    <p
                      className={`
                        text-sm font-medium
                        ${
                          daysLeft <= 1
                            ? "text-red-400 animate-pulse"
                            : daysLeft <= 3
                            ? "text-orange-400"
                            : "text-green-400"
                        }
                      `}
                    >
                      ⏳ {daysLeft > 0 ? `${daysLeft} Days Left` : daysLeft === 0 ? "Due Today" : "Overdue"}
                    </p>
                  )}
                  {isCompleted && (
                    <p className="text-sm font-medium text-green-400">
                      ✓ Done
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {(assignment.status === "PENDING" || isRejected) && (
                  <Link href="/tasks">
                    <button className="px-4 py-2 bg-[#F5C518] hover:bg-[#C49A00] text-black rounded-lg font-semibold transition-all duration-300">
                      Submit Task
                    </button>
                  </Link>
                )}

                {isReview && (
                  <span className="inline-block px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                    ⏳ Awaiting Mentor Review
                  </span>
                )}

                {isCompleted && (
                  <span className="inline-block px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                    ✓ Completed
                  </span>
                )}

                {isRejected && (
                  <span className="inline-block px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                    ❌ Rejected (Please Resubmit)
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}