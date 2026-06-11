"use client"

import { X } from "lucide-react"

const MobileSidebar = ({ children, open, setOpen }) => {
    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setOpen(false)} />
            )}
            <div className={`fixed top-0 left-0 h-screen w-[280px] bg-[#0D0D0D] border-r border-[#2A2A2A] z-50 transition-all duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-end p-4 ">
                    <button onClick={() => setOpen(false)}><X className="text-white" /></button>
                </div>
                {children}
            </div>
        </>
    )
}

export default MobileSidebar;