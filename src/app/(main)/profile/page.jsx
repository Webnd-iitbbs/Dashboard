import { requireAuth } from "@/features/auth/lib/auth";
import { prisma } from "@/lib/prisma";
import { getLeaderboard } from "@/features/leaderboard/getLeaderboard";
import ProfileCard from '@/components/profile/ProfileCard.jsx'
import StatsGrid from '@/components/profile/StatisticsGrid.jsx'
import MentorCard from '@/components/profile/Mentor.jsx'
import Leaderboard from '@/components/profile/LeaderBoard.jsx'
import PendingTasks from '@/components/profile/PendingTask'
import React from 'react'

const MemberProfilePage = async () => {
  const authUser = await requireAuth();

  // Load the full profile of the user
  const user = await prisma.user.findUnique({
    where: { id: authUser.id },
    include: {
      assignedTasks: {
        include: {
          task: true,
        },
      },
      studentLinks: {
        where: { isActive: true },
        include: {
          mentor: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
      },
      mentorLinks: {
        where: { isActive: true },
        include: {
          student: true,
        },
      },
      createdTasks: true,
      reviewedSubmissions: true,
      reviewedContributions: true,
      contributions: true,
    },
  });

  if (!user) {
    return (
      <main className="h-screen bg-[#0D0D0D] text-[#F5F5F5] flex items-center justify-center">
        <p>User profile not found.</p>
      </main>
    );
  }

  // Fetch the leaderboard
  const leaderboardData = await getLeaderboard();

  // Determine rank if user is a MEMBER
  let rankValue = "N/A";
  if (user.role === "MEMBER") {
    const r = leaderboardData.findIndex((u) => u.id === user.id) + 1;
    if (r > 0) rankValue = `#${r}`;
  }

  // Build the statistics based on role
  let stats = [];
  if (user.role === "MEMBER") {
    const completedTasksCount = user.assignedTasks.filter(
      (t) => t.status === "COMPLETED"
    ).length;
    stats = [
      {
        title: "Total XP",
        value: user.xp.toString(),
        subtitle: "Earned from completing tasks",
      },
      {
        title: "Current Rank",
        value: rankValue,
        subtitle: "Global member ranking",
      },
      {
        title: "Tasks Completed",
        value: completedTasksCount.toString(),
        subtitle: `${user.assignedTasks.length - completedTasksCount} pending`,
      },
      {
        title: "Contributions",
        value: user.contributions.length.toString(),
        subtitle: "Code and resources contributed",
      },
    ];
  } else if (user.role === "MENTOR") {
    stats = [
      {
        title: "Mentees Assigned",
        value: user.mentorLinks.length.toString(),
        subtitle: "Active students",
      },
      {
        title: "Tasks Created",
        value: user.createdTasks.length.toString(),
        subtitle: "Assigned to students",
      },
      {
        title: "Submissions Reviewed",
        value: user.reviewedSubmissions.length.toString(),
        subtitle: "Reviewed student tasks",
      },
      {
        title: "Contributions Reviewed",
        value: user.reviewedContributions.length.toString(),
        subtitle: "Reviewed contributions",
      },
    ];
  } else if (user.role === "ADMIN") {
    const membersCount = await prisma.user.count({ where: { role: "MEMBER" } });
    const mentorsCount = await prisma.user.count({ where: { role: "MENTOR" } });
    const totalTasksCount = await prisma.task.count();
    const totalContributionsCount = await prisma.contribution.count();

    stats = [
      {
        title: "Total Members",
        value: membersCount.toString(),
        subtitle: "Registered students",
      },
      {
        title: "Total Mentors",
        value: mentorsCount.toString(),
        subtitle: "Assigned mentors",
      },
      {
        title: "Total Tasks",
        value: totalTasksCount.toString(),
        subtitle: "Tasks created in system",
      },
      {
        title: "Total Contributions",
        value: totalContributionsCount.toString(),
        subtitle: "Member submissions",
      },
    ];
  }

  // Get mentor details if they exist
  const mentor = user.studentLinks?.[0]?.mentor || null;

  return (
    <main className="h-screen bg-[#0D0D0D] text-[#F5F5F5] overflow-y-auto wd-scroll">
      <ProfileCard user={user} rank={rankValue} />
      <div className="stats">
        <StatsGrid stats={stats} />
      </div>
      {user.role === "MEMBER" && mentor && <MentorCard mentor={mentor} />}
      <Leaderboard leaderboard={leaderboardData} userId={user.id} />
      {user.role === "MEMBER" && <PendingTasks tasks={user.assignedTasks} />}
    </main>
  );
};

export default MemberProfilePage;
