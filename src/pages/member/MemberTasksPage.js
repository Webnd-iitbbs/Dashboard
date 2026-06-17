import React from "react";
import TaskCard from "@/components/members/myTasks/TaskCard";
import TaskDesc from "@/components/members/myTasks/TaskDesc";

const MemberTasksPage = () => {
  return (
    <div className="w-full mobile-page lg:h-screen flex">
      <div className="flex flex-col gap-4 p-4 w-full lg:w-[30%] h-full overflow-y-auto">
        <TaskCard
          title="Member Dashboard Frontend"
          techStack={["React", "Next.js", "Tailwind", "Prisma"]}
          deadline="2026-06-15"
          attachmentCount={3}
          createdAt="2026-06-10"
          selected={true}
        />
      </div>
      <div className="w-[70%] h-full p-4 hidden lg:flex">
        <TaskDesc/>
      </div>
    </div>
  );
};

export default MemberTasksPage;
