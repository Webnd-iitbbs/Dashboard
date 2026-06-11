const SubmissionsTable = ({ submissions, onReview, setSelectedSubmission, setViewOpen }) => {
    return (
        <div className="hidden lg:block bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-[#1A1A1A] text-[#F5C518]">
                        <th className="p-4 text-left">Mentee</th>
                        <th className=" text-left">Task</th>
                        <th className="text-left">Submitted At</th>
                        <th className=" text-left">Deadline</th>
                        <th className=" text-left">Status</th>
                        <th className=" text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((item) => (
                        <tr key={item.id} className="border-t border-[#2A2A2A]">
                            <td className="p-4 text-white">{item.mentee}</td>
                            <td className="text-white">{item.task}</td>
                            <td className="text-[#888888]">{item.submittedAt}</td>
                            <td className="text-[#888888]">{item.deadline}</td>
                            <td>
                                <span className={`px-3 py-1 rounded-full text-xs ${item.overdue ? "bg-red-500/20 text-red-400" : "bg-[#F5C51815] text-[#F5C518]"}`}>
                                    {item.overdue ? "Overdue" : "On Time"}
                                </span>
                            </td>
                            <td>
                                <div className="flex gap-2">
                                    <button onClick={() => {
                                        setSelectedSubmission(item)
                                        setViewOpen(true)
                                    }} className="px-4 py-2 rounded-lg border border-[#F5C518] text-[#F5C518]">View</button>
                                    <button onClick={onReview} className="bg-[#F5C518] text-black px-4 py-2 rounded-lg">Review</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SubmissionsTable;