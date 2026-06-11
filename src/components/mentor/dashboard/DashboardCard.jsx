const DashboardCard = ({ title, value, subtitle }) => {
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#F5C518]" />
            <p className="text-[#888888] text-xs">{title}</p>
            <h2 className="text-3xl font-bold text-[#F5C518] mt-2">{value}</h2>
            <p className="text-[#888888] text-xs mt-2">{subtitle}</p>
        </div>
    )
}

export default DashboardCard;