"use client"

const LeaderboardTabs = ({ active, setActive }) => {
    return (
        <div className="flex gap-3 mb-8 flex-wrap">
            <button onClick={() => setActive('mentees')} className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${active === 'mentees' ? "bg-[#F5C518] text-black" : "text-white bg-[#111111] border border-[#2A2A2A]"}`}>
                Mentee Leaderboard
            </button>
            <button onClick={() => setActive('mentors')} className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${active === 'mentors' ? "bg-[#F5C518] text-black" : "text-white bg-[#111111] border border-[#2A2A2A]"}`}>
                Mentor Leaderboard
            </button>
        </div>
    )
}

export default LeaderboardTabs;