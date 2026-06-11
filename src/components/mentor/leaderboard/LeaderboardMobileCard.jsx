"use client"

const LeaderboardMobileCard = ({ users }) => {
    const sortedUsers = [...users].sort((a, b) => b.xp - a.xp).slice(3);
    return (
        <div className="lg:hidden space-y-4">
            {sortedUsers.map((user, index) => {
                const progress = Math.round((user.tasksCompleted / user.totalTasks) * 100)
                return (
                    <div key={user.id} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4 ">
                        <div className="flex items-center gap-4">
                            <div className="text-[#F5C518] font-bold text-xl min-w-[45px]">#{index + 4}</div>
                            <img src={user.image} alt="img" className="w-14 h-14 rounded-full object-cover" />
                            <div className="flex-1">
                                <h3 className="text-white font-medium">{user.name}</h3>
                                <p className="text-[#888888] text-sm">{user.role}</p>
                                <div className="mt-2">
                                    <span className="text-[#F5C518] text-sm">{user.xp} XP</span>
                                </div>
                                <div className="mt-3">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white text-xs">Progress</span>
                                        <span className="text-xs text-[#F5C518]">{progress}%</span>
                                    </div>
                                    <div className="h-2 bg-[#2A2A2A] rounded-full">
                                        <div className="h-2 bg-[#F5C518] rounded-full" style={{ width: `${progress}%` }} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {user.badges?.slice(0, 2).map((badge) => (
                                        <span key={badge} className="px-2 py-1 text-xs rounded-full bg-[#F5C51820] text-[#F5C518]">{badge}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LeaderboardMobileCard;