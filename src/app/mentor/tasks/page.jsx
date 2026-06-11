"use client"

import AssignTaskModal from "@/components/mentor/tasks/AssignTaskModal";
import CompetitionModal from "@/components/mentor/tasks/CompetitionModal";
import PageWrapper from "@/components/mentor/layout/PageWrapper";
import TaskTable from "@/components/mentor/tasks/TaskTable";
import { useState } from "react"

const tasks = [
    {
        id: 1,
        mentee: "Rick",
        title: "Simple form",
        topic: "JavaScript",
        status: "Submitted",
        deadline: "12 June 2026",
        submittedAt: "13 June 2026"
    },
    {
        id: 2,
        mentee: "Carrie",
        title: "DOM",
        topic: "JavaScript",
        status: "Pending",
        deadline: "12 June 2026",
        submittedAt: ""
    }
]

const TasksPage = () => {
    const [taskModal, setTaskModal] = useState(false);
    const [compModal, setCompModal] = useState(false)
    return (
        <PageWrapper title="Tasks" subtitle="Manage mentee assignments">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <button onClick={() => setTaskModal(true)} className="bg-[#F5C518] text-black px-5 py-3 rounded-lg font-semibold">Assign Task</button>
                <button onClick={() => setCompModal(true)} className="border border-[#F5C518] text-[#F5C518] px-5 py-3 rounded-lg">Create Competition</button>
            </div>
            <TaskTable tasks={tasks} />
            <div className="lg:hidden space-y-4">
                {tasks.map((task) => (
                    <div key={task.id} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
                        <h3 className="text-white font-semibold">{task.title}</h3>
                        <p className="text-[#888888] mt-2">{task.mentee}</p>
                        <p className="text-red-400 mt-2">{task.deadline}</p>
                        <p className="text-[#888888] mt-2">{task.submittedAt}</p>
                        <p className="text-[#F5C518] mt-2">{task.status}</p>
                    </div>
                ))}
            </div>
            <AssignTaskModal open={taskModal} setOpen={setTaskModal} />
            <CompetitionModal open={compModal} setOpen={setCompModal} />
        </PageWrapper>
    )
}

export default TasksPage;