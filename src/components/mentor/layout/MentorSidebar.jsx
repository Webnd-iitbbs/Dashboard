"use client"

import {LogOut, Settings} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"



const MentorSidebar = ({links, position}) => {
    const pathName = usePathname();
    return (
        <div className="lg:h-screen flex flex-col justify-between">
            <div>
                <div className="px-6 py-8 border-b border-[#2A2A2A]">
                    <h1 className="text-[#F5C518] text-2xl font-bold"> WebnD </h1>
                    <p className="text-[#888888] text-xs "> {position} Panel</p>
                </div>
                <div className="p-4 space-y-2">
                    {links?.map((item) => {
                        const Icon = item.icon;
                        const active = pathName === item.href
                        return (
                            <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                                ${active ? "bg-[#F5C51815] text-[#F5C518] border-l-2 border-[#F5C518]"
                                    : "text-[#888888] hover:bg-[#F5C51810] hover:text-[#F5C518]"
                                }`}>
                                <Icon size={18} />
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="p-4 border-t border-[#2A2A2A] flex flex-col gap-4">
                <Link className="flex items-center gap-3 text-(--wd-muted)" href="/settings">
                    <Settings size={18} />
                    Settings
                </Link>
                <button className="flex items-center gap-3 text-red-400">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default MentorSidebar;