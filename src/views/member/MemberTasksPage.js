"use client";

import React, { useState } from "react";
import TaskCard from "@/components/members/myTasks/TaskCard";
import TaskDesc from "@/components/members/myTasks/TaskDesc";

const MemberTasksPage = ({ user, tasks }) => {
  const [selectedTask, setSelectedTask] = useState(tasks?.[0] || null);
  return (
    <div className="w-full mobile-page lg:h-screen! flex">
      <div className="flex flex-col gap-4 p-4 w-full lg:w-[30%] h-full overflow-y-auto">
        {Array.isArray(tasks) && tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            techStack={task.techStack ? task.techStack.split(/[,\n]+/).map(t => t.trim()).filter(Boolean) : []}
            deadline={task.deadline}
            attachmentCount={3}
            createdAt="2026-06-10"
            selected={selectedTask?.id === task.id}
            onClick={() => setSelectedTask(tasks.find((t) => t.id === task.id))}
          />
        ))}
      </div>
      <div className="w-[70%] h-full p-4 hidden lg:flex">
        {selectedTask && <TaskDesc task={selectedTask} />}
      </div>
    </div>
  );
};

export default MemberTasksPage;
