const activities = [
    {
        text: "X completed task-1",
        time: "13 mins ago"
    },
    {
        text: "Y completed task-2",
        time: "1 hour ago"
    }
]

const ActivityFeed = () => {
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
            <h2 className="text-[#F5C518] font-semibold mb-5">Recent Activity</h2>
            <div className="space-y-4">
                {activities.map((item, index) => (
                    <div className="flex gap-3" key={index}>
                        <div className="w-2 h-2 rounded-full bg-[#F5C518] mt-2" />
                        <div>
                            <p className="text-white text-sm">{item.text}</p>
                            <p className="text-[#888888] text-xs mt-1">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActivityFeed;