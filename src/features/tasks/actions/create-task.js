"use server";

import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/features/auth/lib/auth";

export async function createTask(formData) {
  const user = await requireAuth();

  const title = formData.get("title");
  const description = formData.get("description");

  await prisma.task.create({
    data: {
      title,
      description,
      mentorId: user.id,
    },
  });

  return { success: true };
}