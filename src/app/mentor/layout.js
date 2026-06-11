"use client"

import MentorSidebar from "@/components/mentor/layout/MentorSidebar"
import MobileSidebar from "@/components/mentor/layout/MobileSidebar"
import { Menu } from "lucide-react"
import { useState } from "react"

import "./mentor.css"

const MentorLayout = ({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="bg-[#0D0D0D] min-h-screen">
            <div className="lg:hidden h-16 border-b border-[#2A2A2A] flex items-center px-4 justify-between">
                <h2 className="text-[#F5C518] font-bold">WebnD</h2>
                <button onClick={() => setOpen(true)}>
                    <Menu className="text-white" />
                </button>
            </div>
            <MobileSidebar open={open} setOpen={setOpen}><MentorSidebar /></MobileSidebar>
            <div className="flex">
                <aside className="hidden lg:block w-[280px] border-r border-[#2A2A2A] min-h-screen bg-[#0D0D0D]"><MentorSidebar /></aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}

export default MentorLayout;