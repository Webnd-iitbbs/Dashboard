import { Eye, Phone } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const MenteeCard = ({ mentee }) => {
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#F5C518] transition-all">
            <div className="flex items-center gap-4">
                <img src={mentee.image} alt="img" className="w-16 h-16 rounded-full border-2 border-[#F5C518]" />
                <div>
                    <h3 className="text-white font-semibold">{mentee.name}</h3>
                    <p className="text-[#888888] text-sm">{mentee.domain}</p>
                </div>
            </div>
            <div className="mt-5 space-y-3">
                <a href={mentee.github} target="_blank" className="flex items-center gap-2 text-[#F5C518] text-sm"><FaGithub size={16} />Github Profile</a>
                <div className="flex gap-2 text-sm text-white">
                    <Phone size={16} />
                    {mentee.phone}
                </div>
            </div>
            <div className="mt-5 flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#F5C51815] text-[#F5C518] text-xs">XP {mentee.xp}</span>
                <span className="px-3 py-1 rounded-full bg-[#1A1A1A] text-white text-xs">{mentee.badges} Badges</span>
            </div>
            <button className="mt-5 w-full bg-[#F5C518] text-black py-2 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer">
                <Eye size={16} />
                View Profile
            </button>
        </div>
    )
}

export default MenteeCard;