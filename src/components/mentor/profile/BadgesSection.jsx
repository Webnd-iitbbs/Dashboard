const BadgesSection = () => {
    const badges = ["Frontend Wizard", "Top Mentor", "Hackathon Lead", "Problem Setter", "UI Master"];
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
            <h2 className="text-[#F5C518] text-xl font-semibold mb-6">Earned Badges</h2>
            <div className="flex flex-wrap gap-3">
                {badges.map((badge) => (
                    <div className="px-4 py-2 rounded-full bg-[#F5C51815] text-[#F5C518]" key={badge}>
                        {badge}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BadgesSection;