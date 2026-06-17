"use client"
import { requireAuth } from "@/features/auth/lib/auth";
import MentorSidebar from "@/components/mentor/layout/MentorSidebar"
import MobileSidebar from "@/components/mentor/layout/MobileSidebar"
import MentorLinks from "@/pages/mentor/mentorLinks";
import MemberLinks from "@/pages/member/MemberLinks";
import AdminLinks from "@/pages/admin/AdminLinks";
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"

import { FileCheck, LayoutDashboard, Trophy, User, Users } from "lucide-react"

import "@/pages/mentor/mentor.css"
import { isAdmin, isMentor } from "@/features/auth/lib/permissions";



const SidebarLayout = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState(null);
    const [links, setLinks] = useState([]);
    useEffect(()=>{
        async function load() {
            const newUser = await requireAuth();
            if(newUser) {
                setUser(newUser);
                if(isAdmin(newUser)) setLinks(AdminLinks);
                else if(isMentor(newUser)) setLinks(MentorLinks);
                else setLinks(MemberLinks);
            }
        }
        load();
    },[]);

    return (
        <div className="bg-[#0D0D0D] min-h-screen">
            <div className="lg:hidden h-16 border-b border-[#2A2A2A] flex items-center px-4 justify-between">
                <h2 className="text-[#F5C518] font-bold">WebnD</h2>
                <button onClick={() => setOpen(true)}>
                    <Menu className="text-white" />
                </button>
            </div>
            <MobileSidebar open={open} setOpen={setOpen}><MentorSidebar links={links} position="Mentor"/></MobileSidebar>
            <div className="flex">
                <aside className="hidden lg:block w-[280px] border-r border-[#2A2A2A] min-h-screen bg-[#0D0D0D]"><MentorSidebar links={links} position="Mentor"/></aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}

export default SidebarLayout;