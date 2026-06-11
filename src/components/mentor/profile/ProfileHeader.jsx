import { Mail, Phone } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const ProfileHeader = () => {
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
                <img src="#" alt="MEE" className="w-32 h-32 rounded-full border-4 border-[#F5C518]" />
                <div className="flex-1">
                    <h1 className="text-white text-3xl font-bold">XYZ</h1>
                    <p className="text-[#888888] mt-2">Web Dev Mentor</p>
                    <div className="flex flex-wrap gap-5 mt-5">
                        <div className="flex items-center gap-2 text-[#F5C518]">
                            <a href="#" target="_blank">
                                <FaGithub size={18} />
                                Github Profile
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <Mail size={18} />
                            example@example.com
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <Phone size={18} />
                            9073473194
                        </div>
                    </div>
                </div>
                <div className="bg-[#F5C518] text-black px-5 py-3 rounded-xl font-semibold">Rank #4</div>
            </div>
        </div>
    )
}

export default ProfileHeader;