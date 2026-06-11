import ActivityFeed from "@/components/mentor/dashboard/ActivityFeed"
import CompetitionCard from "@/components/mentor/dashboard/CompetitionCard"
import DashboardCard from "@/components/mentor/dashboard/DashboardCard"
import PageWrapper from "@/components/mentor/layout/PageWrapper"
import TopMenteeCard from "@/components/mentor/dashboard/TopMenteeCard"
import UpcomingDeadlines from "@/components/mentor/dashboard/UpcomingDeadlines"

const DashboardPage = () => {
    return (
        <PageWrapper title="Dashboard" subtitle="Overview of your mentorship activities">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                <DashboardCard title="Total XP" value="12,580" subtitle="+1200 this month" />
                <DashboardCard title="Mentees" value="24" subtitle="Currently assigned" />
                <DashboardCard title="Pending Reviews" value="3" subtitle="Need evaluation" />
                <DashboardCard title="Rank" value="#4" subtitle="Among mentors" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
                <div className="xl:col-span-2"><ActivityFeed /></div>
                <TopMenteeCard />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
                <div className="xl:col-span-2"><UpcomingDeadlines /></div>
                <CompetitionCard />
            </div>
        </PageWrapper>
    )
}

export default DashboardPage;