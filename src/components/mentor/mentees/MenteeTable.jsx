import { Eye } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const MenteeTable = ({ mentees }) => {
    return (
        <div className="hidden lg:block bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-[#1A1A1A] text-[#F5C518]">
                        <th className="p-4 text-left">Mentee</th>
                        <th className="text-left">Github</th>
                        <th className="text-left">Phone</th>
                        <th className="text-left">XP</th>
                        <th className="text-left">Badges</th>
                        <th className="text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mentees.map((mentee) => (
                        <tr key={mentee.id} className="border-t border=[#2A2A2A]">
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <img src={mentee.image} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p className="text-white">{mentee.name}</p>
                                        <p className="text-[#888888] text-xs">{mentee.domain}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href={mentee.github} className="text-[#F5C518]"><FaGithub size={18} /></a>
                            </td>
                            <td className="text-white">{mentee.phone}</td>
                            <td className="text-[#F5C518]">{mentee.xp}</td>
                            <td className="text-white">{mentee.badges}</td>
                            <td>
                                <button className="bg-[#F5C518] text-black px-4 py-2 rounded-lg">
                                    <Eye size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MenteeTable;