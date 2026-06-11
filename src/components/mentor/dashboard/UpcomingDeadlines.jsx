const tasks = [
    {
        title: "Task-3",
        deadline: "Tomorrow"
    },
    {
        title: "Task-4",
        deadline: "Next week"
    }
]

const UpcomingDeadlines = () => {
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
            <h2 className="text-[#F5C518] font-semibold mb-5">Upcoming Deadlines</h2>
            <div className="space-y-3">
                {tasks.map((task, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-[#1A1A1A]">
                        <span className="text-white">{task.title}</span>
                        <span className="text-red-400 text-sm">{task.deadline}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingDeadlines;