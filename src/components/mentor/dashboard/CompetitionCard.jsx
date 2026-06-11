const CompetitionCard = () => {
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 hover:-translate-y-1 transition-all">
            <div className="flex justify-between">
                <h2 className="text-[#F5C518]">UI Challenge</h2>
                <span className="bg-[#F5C518] text-black px-3 py-1 rounded-full text-xs font-semibold">LIVE</span>
            </div>
            <p className="text-[#888888] mt-4">24 hour UI Challenge for all mentees</p>
            <div className="mt-6">
                <div className="flex justify-between text-sm">
                    <span className="text-white">Participants</span>
                    <span className="text-[#F5C518]">10</span>
                </div>
                <div className="mt-3">
                    <div className="h-2 bg-[#2A2A2A] rounded-full">
                        <div className="h-2 bg-[#F5C518] rounded-full w-[72%]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompetitionCard;