"use client"

import { Calendar, ExternalLink, User, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ViewSubmissionModal = ({ open, setOpen, submission ,setReview}) => {
    if (!open || !submission) return null;
    return (
        <>
            <div  className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[92%] lg:w-[90%] max-w-6xl max-h-[92vh] overflow-y-auto bg-[#111111] border border-[#2A2A2A] rounded-2xl z-50 shadow-[0_0_30px_rgba(245,197,24,0.15)]">
                <div className="flex justify-between items-center top-0 z-20 sticky bg-[#111111] border-b border-[#2A2A2A] p-4 sm:p-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#F5C518]">Submission Details</h2>
                        <p>Review Mentee Submission</p>
                    </div>
                    <button onClick={()=>setOpen(false)} className="p-2 rounded-lg hover:bg-[#1A1A1A] transition">
                        <X size={24} className="text-white"/>
                    </button>
                </div>
                <div className="p-4 sm:p-6">
                    <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] p-5">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">{submission.task}</h3>
                        <div className="mt-5 flex flex-col sm:flex-row gap-4 sm:gap-8">
                            <div className="flex items-center gap-2 text-[#888888]">
                                <User size={18}/>
                                <span>{submission.mentee}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#888888]">
                                <Calendar size={18}/>
                                <span>{submission.submittedAt}</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <a href={submission.github} target="_blank" rel="noreferrer" className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#F5C518] transition-all">
                            <div className="flex gap-4 items-center">
                                <FaGithub size={24} className="text-[#F5C518]"/>
                                <div>
                                    <h4 className="text-white font-medium">Github Repository</h4>
                                    <p className="text-[#888888] text-sm">View Source Code</p>
                                </div>
                            </div>
                        </a>
                        <a href={submission.live} target="_blank" rel="noreferrer" className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#F5C518] transition-all">
                            <div className="flex gap-4 items-center">
                                <ExternalLink size={24} className="text-[#F5C518]"/>
                                <div>
                                    <h4 className="text-white font-medium">Live Deployment</h4>
                                    <p className="text-[#888888] text-sm">Open Website</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {submission.images?.length>0 && (
                        <div className="mt-8">
                            <h3 className="text-[#F5C518] text-lg font-semibold mb-4">Screenshots</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {submission.images.map((image,index)=>(
                                    <div className="overflow-hidden rounded-xl border border-[#2A2A2A]" key={index}>
                                        <img src={image} alt={`Screenshot ${index}`} className="w-full h-48 sm:h-56 md:h-52 object-cover hover:scale-105 duration-300 transition-all"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {submission.video && (
                        <div className="mt-8">
                            <h3 className="text-[#F5C518] text-lg font-semibold mb-4">Demo Video</h3>
                            <video controls className="w-full max-h-[300px] min-h-[225px] md:max-h-[500px] md:min-h-[500px] rounded-xl border border-[#2A2A2A]">
                                <source src={submission.video}/>
                            </video>
                        </div>
                    )}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-5 leading-relaxed text-[#CCCCCC] mt-2">{submission.notes}</div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-10 justify-end p-6">
                    <button onClick={()=>setOpen(false)} className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#2A2A2A] text-white">Close</button>
                    <button onClick={()=>{setReview(true)
                        setOpen(false)
                    }} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F5C518] text-black font-semibold">Review Submission</button>
                </div>
            </div>
        </>
    )
}

export default ViewSubmissionModal;