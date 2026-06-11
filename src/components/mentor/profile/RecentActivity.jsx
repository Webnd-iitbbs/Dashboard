const RecentActivity = () => {
    const activities = [
        "Reviewed Rick's Dashboard ",
        "Hosted UI Sprint Competition",
        "Awarded 200 XP to Priya",
        "Assigned Authentication Projects"
    ]
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
            <h2 className="text-[#F5C518] text-xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div key={index} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#F5C518] mt-2" />
                        <p className="text-white">{activity}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentActivity;