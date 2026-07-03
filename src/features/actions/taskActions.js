"use server"

import { createTask } from "../tasks/lib/manageTask"

export async function createTaskAction(formData) {
  return await createTask(formData)
}