import React from "react";
import TaskCard from "@/components/members/myTasks/TaskCard";

const Tasks = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex flex-col gap-4 p-8 w-[30%] h-full overflow-y-auto">
        <TaskCard
          title="Member Dashboard Frontend"
          techStack={["React", "Next.js", "Tailwind", "Prisma"]}
          deadline="2026-06-15"
          attachmentCount={3}
          createdAt="2026-06-10"
          selected={true}
        />
      </div>
    </div>
  );
};

export default Tasks;
