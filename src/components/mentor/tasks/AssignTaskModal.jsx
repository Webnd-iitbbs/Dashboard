"use client"
import { X } from "lucide-react";

const AssignTaskModal = ({ open, setOpen }) => {
    if (!open) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black/70 z-40" onClick={() => setOpen(false)} />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 z-50">
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#F5C518]">Assign Task</h2>
                    <button onClick={() => setOpen(false)}>
                        <X className="text-white" />
                    </button>
                </div>
                <div className="space-y-5">
                    <div>
                        <label className="text-white block mb-2">Select Mentees</label>

                        <div className="w-full h-40 overflow-y-auto bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 space-y-3">
                            <label className="flex items-center gap-3 text-white cursor-pointer">
                                <input
                                    type="checkbox"
                                    value="Rick"
                                    className="w-4 h-4"
                                />
                                Rick
                            </label>

                            <label className="flex items-center gap-3 text-white cursor-pointer">
                                <input
                                    type="checkbox"
                                    value="Carrie"
                                    className="w-4 h-4"
                                />
                                Carrie
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="text-white block mb-2">Task Title</label>
                        <input className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white" />
                    </div>
                    <div>
                        <label className="text-white block mb-2">Problem Statement</label>
                        <textarea rows={5} className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white" />
                    </div>
                    <div>
                        <label className="text-white block mb-2">Required Tech Stack</label>
                        <input placeholder="HTML..." className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white" />
                    </div>
                    <div>
                        <label className="text-white block mb-2">Deadline</label>
                        <input type="datetime-local" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white" />
                    </div>
                    <div>
                        <label className="text-white block mb-2">XP Reward</label>
                        <input type="number" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white" />
                    </div>
                    <div>
                        <label className="text-white block mb-2">Attach reference file</label>
                        <input type="file" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white " placeholder="Attach any referenec file..."/>
                    </div>
                    <button className="w-full py-3 rounded-lg bg-[#F5C518] text-black font-semibold">Assign Task</button>
                </div>
            </div>
        </>
    )
}

export default AssignTaskModal;