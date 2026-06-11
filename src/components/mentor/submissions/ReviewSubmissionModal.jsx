"use client";

import { X } from "lucide-react";

const ReviewSubmissionModal = ({ open, setOpen ,submission}) => {
    if (!open) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"  />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 z-50 shadow-[0_0_30px_rgba(245,197,24,0.15)]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-[#F5C518]">Review {submission.mentee}'s Submission</h2>
                    <button onClick={() => setOpen(false)} className="cursor-pointer">
                        <X className="text-white" />
                    </button>
                </div>
                <div className="space-y-5">
                    <div>
                        <label className="text-white mb-2 block">Score (Out of 100)</label>
                        <input type="number" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white" />
                    </div>
                    <div>
                        <label className="text-white mb-2 block">XP Awarded</label>
                        <input type="number" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white" />
                    </div>
                    <div>
                        <label className="text-white mb-2 block">Assign Badge</label>
                        <select className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-3 text-white">
                            <option>None</option>
                            <option>Design Master</option>
                            <option>UI Expert</option>
                            <option>Frontend Wizard</option>
                            <option>Backend Specialist</option>
                            <option>Problem Solver</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-white mb-2 block">Remarks</label>
                        <textarea rows={5} type="number" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white" />
                    </div>
                    <button className="w-full bg-[#F5C518] text-black font-semibold py-3 rounded-lg">Mark As Reviewed</button>
                </div>
            </div>
        </>
    )
}

export default ReviewSubmissionModal;