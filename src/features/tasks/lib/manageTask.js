import {prisma} from '@/lib/prisma'
import { getSession } from "@/features/auth/lib/session"

export async function createTask(data) {
    const session = await getSession()

    if (!session?.user) {
        throw new Error("Unauthorized")
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id,
        },
    })

    if (!user) {
        throw new Error("User not found")
    }

    if (
        user.role !== "MENTOR" &&
        user.role !== "ADMIN"
    ) {
        throw new Error("Access denied")
    }

    const {
        title,
        description,
        techStack,
        referenceUrl,
        deadline,
        xpReward,
        assignedStudents,
    } = data

    if (!title || !description) {
        throw new Error("Missing required fields")
    }

    if (
        !assignedStudents ||
        assignedStudents.length === 0
    ) {
        throw new Error(
            "At least one student must be assigned"
        )
    }

    const task = await prisma.task.create({
        data: {
            title,
            description,
            techStack,
            referenceUrl,
            deadline: new Date(deadline),
            xpReward,
            creatorId: user.id,
        },
    })

    await prisma.taskAssignment.createMany({
        data: assignedStudents.map((studentId) => ({
            taskId: task.id,
            studentId,
        })),
    })

    return task
}

export async function deleteTask(taskId) {
    const session = await getSession()

    if (!session?.user) {
        throw new Error("Unauthorized")
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id,
        },
    })

    if (!user) {
        throw new Error("User not found")
    }

    const task = await prisma.task.findUnique({
        where: {
            id: taskId,
        },
    })

    if (!task) {
        throw new Error("Task not found")
    }

    const isCreator =
        task.creatorId === user.id

    const isAdmin =
        user.role === "ADMIN"

    if (!isCreator && !isAdmin) {
        throw new Error(
            "You cannot delete this task"
        )
    }

    await prisma.task.delete({
        where: {
            id: taskId,
        },
    })

    return {
        success: true,
    }
}

export async function fetchTask(memberId) {
    if (!memberId) {
        throw new Error("Member ID is required")
    }

    const assignments = await prisma.taskAssignment.findMany({
        where: {
            studentId: memberId,
        },
        select: {
            taskId: true,
        },
    })

    const taskIds = assignments.map((a) => a.taskId)

    return prisma.task.findMany({
        where: {
            id: {
                in: taskIds,
            },
        },
        orderBy: {
            deadline: "asc",
        },
    })
}