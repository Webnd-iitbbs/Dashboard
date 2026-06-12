// "use client";

export default function PendingTasks() {
  const tasks = [
    {
      id: 1,
      title: "Landing Page Redesign",
      xp: 250,
      deadline: "2026-06-15",
      status: "pending",
    },
    {
      id: 2,
      title: "Dashboard Mockup",
      xp: 150,
      deadline: "2026-06-18",
      status: "completed",
    },
    {
      id: 3,
      title: "Portfolio Submission",
      xp: 100,
      deadline: "2026-06-20",
      status: "review",
    },
    {
      id: 4,
      title: "Design System",
      xp: 300,
      deadline: "2026-06-25",
      status: "completed",
    },
    {
      id: 5,
      title: "Event Poster",
      xp: 100,
      deadline: "2026-06-28",
      status: "completed",
    },
  ];

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "pending"
  ).length;

  const availableXP = tasks
    .filter((task) => task.status === "pending")
    .reduce((acc, task) => acc + task.xp, 0);

  const progress =
    (completedTasks / totalTasks) * 100;

  const getDaysLeft = (deadline) => {
    const today = new Date();
    const due = new Date(deadline);

    const diff = due - today;

    return Math.ceil(
      diff / (1000 * 60 * 60 * 24)
    );
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 m-7">

      <h2 className="text-2xl font-bold text-[#F5C518] mb-6">
        🚀 Active Tasks
      </h2>

      <div className="grid grid-cols-3 gap-3 mb-6">

        <div className="bg-[#111111] p-4 rounded-xl text-center">
          <p className="text-[#888888] text-sm">
            Active
          </p>

          <h3 className="text-2xl font-bold text-[#F5C518]">
            {pendingTasks}
          </h3>
        </div>

        <div className="bg-[#111111] p-4 rounded-xl text-center">
          <p className="text-[#888888] text-sm">
            XP Available
          </p>

          <h3 className="text-2xl font-bold text-[#F5C518]">
            {availableXP}
          </h3>
        </div>

        <div className="bg-[#111111] p-4 rounded-xl text-center">
          <p className="text-[#888888] text-sm">
            Completed
          </p>

          <h3 className="text-2xl font-bold text-green-400">
            {completedTasks}
          </h3>
        </div>

      </div>

      <div className="mb-8">

        <div className="flex justify-between mb-2">

          <span className="text-[#888888]">
            Overall Progress
          </span>

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

        {tasks.map((task) => {
          const daysLeft = getDaysLeft(
            task.deadline
          );

          return (
            <div
              key={task.id}
              className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5 hover:border-[#F5C518] transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">
                    ⚔ {task.title}
                  </h3>

                  <p className="text-[#F5C518] mt-1">
                    +{task.xp} XP Reward
                  </p>
                </div>

                <div className="text-right">
                  <p
                    className={`
                      text-sm font-medium
                      ${
                        daysLeft <= 1
                          ? "text-red-400"
                          : daysLeft <= 3
                          ? "text-orange-400"
                          : "text-green-400"
                      }
                    `}
                  >
                    ⏳ {daysLeft} Days Left
                  </p>

                </div>

              </div>

              <div className="mt-4">

                {task.status === "pending" && (
                  <button
                    className="
                      px-4 py-2 bg-[#F5C518] text-black rounded-lg font-semibold hover:bg-[#C49A00] transition-all">
                    Mark as Done
                  </button>
                )}

                {task.status === "review" && (
                  <span className="inline-block px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400 ">
                    ⏳ Awaiting Mentor Review
                  </span>
                )}

                {task.status === "completed" && (
                  <span className="inline-block px-4 py-2 rounded-lg bg-green-500/20 text-green-400">
                    ✓ Completed
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