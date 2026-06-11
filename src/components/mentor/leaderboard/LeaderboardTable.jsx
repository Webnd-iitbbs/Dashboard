"use client"

const LeaderboardTable = ({ users, active }) => {
    const sortedUsers = [...users].sort((a, b) => b.xp - a.xp).slice(3)
    return (
        <div className="hidden lg:block bg-[#111111] border border-[#2A2A2A] rounded-2xl overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-[#1A1A1A]">
                        <th className="p-5 text-left text-[#F5C518]">Rank</th>
                        <th className="text-left text-[#F5C518]">{active === 'mentors' ? "Mentors" : "Mentees"}</th>
                        <th className="text-left text-[#F5C518]">XP</th>
                        <th className="text-left text-[#F5C518]">Progress</th>
                        <th className="text-left text-[#F5C518]">Badges</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user, index) => {
                        const progress = Math.round((user.tasksCompleted / user.totalTasks) * 100);
                        return (
                            <tr className="border-t border-[#2A2A2A] hover:bg-[#1A1A1A] transition-all" key={user.id}>
                                <td className="p-5 font-bold text-[#F5C518]">#{index + 4}</td>
                                <td>
                                    <div className="flex items-center gap-4">
                                        <img src={user.image} alt="png" className="w-12 h-12 rounded-full object-cover" />
                                        <div>
                                            <h3 className="text-white">{user.name}</h3>
                                            <p className="text-[#888888] text-sm">{user.role}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-[#F5C518] font-semibold">{user.xp}</td>
                                <td className="w-[30%]">
                                    <div className="pr-5">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-white text-sm">{user.tasksCompleted}/{user.totalTasks}</span>
                                            <span className="text-sm text-[#F5C518]">{progress}%</span>
                                        </div>
                                        <div className="h-2 rounded-full bg-[#2A2A2A]">
                                            <div className="h-2 rounded-full bg-[#F5C518]" style={{ width: `${progress}%` }} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex flex-wrap gap-2">
                                        {user.badges?.slice(0, 3).map((badge) => (
                                            <span key={badge} className="px-2 py-1 rounded-full text-xs bg-[#F5C51820] text-[#F5C518]">{badge}</span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default LeaderboardTable;