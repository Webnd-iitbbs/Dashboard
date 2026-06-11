import { Crown, Medal, Trophy } from "lucide-react"

const TopThreePodium = ({ users }) => {
    const sortedUsers = [...users].sort((a, b) => b.xp - a.xp)
    const [first, second, third] = sortedUsers.slice(0, 3)
    if (!first || !second || !third) return null;
    return (
        <>
            <div className="hidden lg:flex justify-center items-end gap-8 mb-10">
                <div className="w-[260px] bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 h-[320px] flex flex-col justify-center items-center text-center hover:border-[#F5C518] transition-all">
                    <Trophy size={30} className="text-[#F5C518] mb-3" />
                    <div className="text-3xl font-bold text-[#F5C518]">#2</div>
                    <img src={second.image} alt="Yes" className="w-20 h-20  object-cover border-4 mt-4 shrink-0 rounded-full border-[#F5C518]" />
                    <h3 className="text-white font-semibold text-lg mt-4">{second.name}</h3>
                    <p className="text-[#888888] text-sm mt-1">{second.role}</p>
                    <div className="mt-3 text-[#F5C518] font-semibold">{second.xp} XP</div>
                    <div className="text-white text-sm mt-2">{second.tasksCompleted}{" "}Tasks</div>
                    <div className="text-sm text-white">{second.badges?.length || 0}{" "}Badges</div>
                </div>
                <div className="w-[300px] bg-[#111111] border-2 border-[#F5C518] rounded-2xl p-6 h-[400px] flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(245,197,24,0.15)]">
                    <Crown size={38} className="mb-3 text-[#F5C518]" />
                    <div className="text-5xl font-bold text-[#F5C518]">#1</div>
                    <img src={first.image} alt="Yes" className="w-28 h-28 rounded-full object-cover shrink-0 border-4 mt-5 border-[#F5C518]" />
                    <h3 className="text-white font-bold text-2xl mt-5">{first.name}</h3>
                    <p className="text-[#888888] mt-1">{first.role}</p>
                    <div className="mt-4 text-[#F5C518] text-xl font-semibold">{first.xp} XP</div>
                    <div className="text-white  mt-2">{first.tasksCompleted}{" "}Tasks</div>
                    <div className=" text-white">{first.badges?.length || 0}{" "}Badges</div>
                </div>
                <div className="w-[240px] bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5 h-[285px] flex flex-col justify-center items-center text-center hover:border-[#F5C518] transition-all">
                    <Medal size={30} className="text-[#F5C518] mb-3" />
                    <div className="text-3xl font-bold text-[#F5C518]">#3</div>
                    <img src={third.image} alt="Yes" className="w-16 h-16 rounded-full object-cover shrink-0 border-4 mt-4 border-[#F5C518]" />
                    <h3 className="text-white font-semibold text-lg mt-4">{third.name}</h3>
                    <p className="text-[#888888] text-sm mt-1">{third.role}</p>
                    <div className="mt-3 text-[#F5C518] font-semibold">{third.xp} XP</div>
                    <div className="text-white text-sm mt-2">{third.tasksCompleted}{" "}Tasks</div>
                    <div className="text-sm text-white">{third.badges?.length || 0}{" "}Badges</div>
                </div>
            </div>
            <div className="lg:hidden mb-8">
                <div className="bg-[#111111] border-2 border-[#F5C518] rounded-2xl p-6 text-center shadow-[0_0_0_5px_rgba(245,197,24,0.15)] mb-4">
                    <Crown size={34} className="text-[#F5C518] mx-auto mb-3" />
                    <div className="text-[#F5C518] text-4xl font-bold">#1</div>
                    <img src={first.image} alt="img" className="w-24 h-24 rounded-full object-cover border-4 border-[#F5C518] mx-auto mt-4" />
                    <h3 className="text-white text-xl font-bold mt-4">{first.name}</h3>
                    <p className="text-[#888888]">{first.role}</p>
                    <p className="text-[#F5C518] text-lg mt-2">{first.xp} XP</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4 text-center">
                        <Trophy size={26} className="mx-auto mb-2 text-[#F5C518]" />
                        <div className="text-[#F5C518] text-2xl font-bold">#2</div>
                        <img src={second.image} alt="img" className="w-16 h-16 rounded-full mx-auto mt-3" />
                        <h3 className="text-white  mt-3">{second.name}</h3>
                        <p className="text-[#888888] text-sm">{second.role}</p>
                        <p className="text-[#F5C518] text-sm mt-1">{second.xp} XP</p>
                    </div>
                    <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4 text-center">
                        <Medal size={26} className="mx-auto mb-2 text-[#F5C518]" />
                        <div className="text-[#F5C518] text-2xl font-bold">#3</div>
                        <img src={third.image} alt="img" className="w-16 h-16 rounded-full mx-auto mt-3" />
                        <h3 className="text-white  mt-3">{third.name}</h3>
                        <p className="text-[#888888] text-sm">{third.role}</p>
                        <p className="text-[#F5C518] text-sm mt-1">{third.xp} XP</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default TopThreePodium;