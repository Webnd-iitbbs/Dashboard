const TopMenteeCard = () => {
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 h-full">
            <h2 className="text-[#F5C518] font-semibold">Top Mentee</h2>
            <div className="mt-6 flex flex-col items-center">
                <img src="#" alt="image" className="w-20 h-20 rounded-full border-2 border-[#F5C518]" />
                <h3 className="text-white mt-4 text-lg font-semibold">XYZ</h3>
                <p className="text-[#888888]">Frontend Developer</p>
                <div className="mt-5 bg-[#F5C51815] text-[#F5C518] px-4 py-2 rounded-full">5833 XP</div>
            </div>
        </div>
    )
}

export default TopMenteeCard;