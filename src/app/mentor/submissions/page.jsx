"use client"

import PageWrapper from "@/components/mentor/layout/PageWrapper";
import ReviewSubmissionModal from "@/components/mentor/submissions/ReviewSubmissionModal";
import SubmissionsTable from "@/components/mentor/submissions/SubmissionsTable";
import ViewSubmissionModal from "@/components/mentor/submissions/ViewSubmissionModal";
import { useState } from "react"

const submissions = [
    {
        id: 1,
        mentee: "Rick",
        task: "Dashboard",
        submittedAt: "10 June 2026",
        deadline: "12 June 2026",
        overdue: false,
        github: "#",
        live: "#",
        notes: "NO",
        images: ["#", "#", "#"],
        video: "#"
    },
    {
        id: 2,
        mentee: "Ryan",
        task: "WebSockets",
        submittedAt: "10 June 2026",
        deadline: "8 June 2026",
        overdue: true,
        github: "#",
        live: "#",
        notes: "NOPE",
        images: ["#", "#", "#"],
        video: ""
    }
]

const SubmissionsPage = () => {
    const [reviewOpen, setReviewOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false)
    const [selectedSubmission, setSelectedSubmission] = useState(null)
    return (
        <PageWrapper title="Submissions" subtitle="Review Mentee Submissions">
            <SubmissionsTable submissions={submissions} onReview={() => setReviewOpen(true)} setSelectedSubmission={setSelectedSubmission} setViewOpen={setViewOpen} />
            <div className="lg:hidden space-y-4">
                {submissions.map((item) => (
                    <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5" key={item.id}>
                        <h3 className="text-white font-semibold">{item.task}</h3>
                        <p className="text-[#888888] mt-2">{item.mentee}</p>
                        <div className="mt-4">
                            <span className={`px-3 py-1 rounded-full text-xs ${item.overdue ? "bg-red-500/20 text-red-400" : "bg-[#F5C51815] text-[#F5C518]"}`}>
                                {item.overdue ? "Overdue" : "On Time"}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            <button onClick={() => {
                                setSelectedSubmission(item);
                                setViewOpen(true)
                            }} className="border border-[#F5C518] text-[#F5C518] py-3 rounded-lg">View</button>
                            <button onClick={() => setReviewOpen(true)} className="mt-4 w-full bg-[#F5C518] text-black py-3 rounded-lg">Review</button>
                        </div>
                    </div>
                ))}
            </div>
            <ReviewSubmissionModal open={reviewOpen} setOpen={setReviewOpen} submission={selectedSubmission} />
            <ViewSubmissionModal open={viewOpen} setOpen={setViewOpen} setReview={setReviewOpen} submission={selectedSubmission} />
        </PageWrapper>
    )
}

export default SubmissionsPage;