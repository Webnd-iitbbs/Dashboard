import { prisma } from "@/lib/prisma";

export async function getMentorTasks(mentorId) {
  return prisma.task.findMany({
    where: {
      mentorId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}