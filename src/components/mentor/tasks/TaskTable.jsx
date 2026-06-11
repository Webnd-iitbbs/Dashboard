const TaskTable = ({ tasks }) => {
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden hidden lg:block">
            <table className="w-full">
                <thead>
                    <tr className="bg-[#1A1A1A] text-[#F5C518]">
                        <th className="p-4 text-left">Mentee</th>
                        <th className="text-left">Task</th>
                        <th className="text-left">Topic</th>
                        <th className="text-left">Deadline</th>
                        <th className="text-left">Submitted at</th>
                        <th className="text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id} className="border-t border-[#2A2A2A]">
                            <td className="p-4 text-white">{task.mentee}</td>
                            <td className="text-white">{task.title}</td>
                            <td className="text-[#888888]">{task.topic}</td>
                            <td className="text-red-400">{task.deadline}</td>
                            <td className="text-[#888888]">{task.submittedAt}</td>
                            <td>
                                <span className="px-3 py-1 rounded-full bg-[#F5C51815] text-[#F5C518] text-xs">{task.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskTable;