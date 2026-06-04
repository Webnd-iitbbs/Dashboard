"use server";

import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/features/auth/lib/auth";

export async function deleteTask(formData) {
  const user = await requireAuth();

  const taskId = formData.get("taskId");

  await prisma.task.deleteMany({
    where: {
      id: taskId,
      mentorId: user.id,
    },
  });
}