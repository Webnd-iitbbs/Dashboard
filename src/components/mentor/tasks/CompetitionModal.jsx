"use client"

import { X } from "lucide-react";

const CompetitionModal = ({ open, setOpen }) => {
    if (!open) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black/70 z-40" onClick={() => setOpen(false)} />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 z-50">
                <div className="flex justify-between mb-5">
                    <h2 className="text-[#F5C518] text-2xl font-bold">Create Competition</h2>
                    <button onClick={() => setOpen(false)}>
                        <X className="text-white" />
                    </button>
                </div>
                <div className="space-y-5">
                    <input placeholder="Competition Name" className="w-full p-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
                    <textarea rows={5} placeholder="Give problem statement" className="w-full p-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
                    <select className="w-full p-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-white">
                        <option value="24 Hours">24 Hours</option>
                        <option value="48 hours">48 Hours</option>
                    </select>
                    <input type="file" placeholder="Reference if any..." className="w-full p-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-white"/>
                    <button className="w-full py-3 rounded-lg bg-[#F5C518] text-black font-semibold">Launch Competition</button>
                </div>
            </div>
        </>
    )
}

export default CompetitionModal;