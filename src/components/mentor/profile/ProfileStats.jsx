import DashboardCard from "../dashboard/DashboardCard"

const ProfileStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <DashboardCard title="Total XP" value="12580" subtitle="Lifetime XP" />
            <DashboardCard title="Tasks Given" value="84" subtitle="Assignments" />
            <DashboardCard title="Mentees" value="24" subtitle="Managed" />
            <DashboardCard title="Competitions" value="12" subtitle="Hosted" />
        </div>
    )
}

export default ProfileStats;