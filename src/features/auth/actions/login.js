"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/features/auth/lib/session";
import { redirect } from "next/navigation";

export async function loginUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {
    throw new Error("Invalid credentials");
  }

  const session = await getSession();

  session.user = {
    id: user.id,
    name: user.name,
    email: user.email,
    isMentor: user.isMentor,
  };

  await session.save();

  redirect("/dashboard");
}