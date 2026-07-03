import { prisma } from "@/lib/prisma"

export async function getMentorMentees(mentorId) {
  const links = await prisma.mentorStudent.findMany({
    where: {
      mentorId,
      isActive: true,
    },

    select: {
      student: {
        select: {
          id: true,
          name: true,
          image: true,
          xp: true,
        },
      },
    },
  })

  return links.map(({ student }) => ({
    id: student.id,
    name: student.name,
    image: student.image,
    xp: student.xp,
  }))
}

export async function getMentorTasks(mentorId) {
  const assignments = await prisma.taskAssignment.findMany({
    where: {
      student: {
        studentLinks: {
          some: {
            mentorId,
            isActive: true,
          },
        },
      },
    },

    include: {
      student: {
        select: {
          id: true,
          name: true,
        },
      },

      task: {
        select: {
          id: true,
          title: true,
          techStack: true,
          deadline: true,
        },
      },
    },

    orderBy: {
      assignedAt: "desc",
    },
  })

  return assignments.map((a) => ({
    id: a.id,
    menteeId: a.student.id,
    mentee: a.student.name,

    title: a.task.title,
    topic: a.task.techStack,

    status: a.status,

    deadline: a.task.deadline,

    submittedAt: a.submittedAt,
  }))
}