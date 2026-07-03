import { prisma } from "@/lib/prisma";

export async function getLeaderboard() {
  const users = await prisma.user.findMany({
    where: {
      role: "MEMBER",
    },
    include: {
      assignedTasks: {
        select: {
          status: true,
        },
      },
    },
    orderBy: {
      xp: "desc",
    },
  });

  return users.map((user) => {
    const totalTasks = user.assignedTasks.length;
    const tasksCompleted = user.assignedTasks.filter(
      (t) => t.status === "COMPLETED"
    ).length;

    // Dynamically assign badges based on XP levels
    const badges = [];
    if (user.xp >= 9000) {
      badges.push("Dev Expert");
    } else if (user.xp >= 8000) {
      badges.push("UI Master");
    } else if (user.xp >= 7000) {
      badges.push("Frontend Expert");
    } else if (user.xp >= 6000) {
      badges.push("Design Devil");
    }

    // Determine a dynamic role name for display matching the members array structure
    let displayRole = "Member";
    if (user.xp >= 9000) displayRole = "Full Stack";
    else if (user.xp >= 8000) displayRole = "Backend";
    else if (user.xp >= 7000) displayRole = "Frontend";
    else if (user.xp >= 6000) displayRole = "Design";

    return {
      id: user.id,
      name: user.name,
      role: displayRole,
      xp: user.xp,
      image: user.image && user.image !== "#" ? user.image : `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(user.name)}`,
      totalTasks,
      tasksCompleted,
      badges,
    };
  });
}
