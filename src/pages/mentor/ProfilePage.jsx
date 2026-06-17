import BadgesSection from "@/components/mentor/profile/BadgesSection"
import PageWrapper from "@/components/mentor/layout/PageWrapper"
import PerformanceMetrics from "@/components/mentor/profile/PerformanceMetrics"
import ProfileHeader from "@/components/mentor/profile/ProfileHeader"
import ProfileStats from "@/components/mentor/profile/ProfileStats"
import ProjectsSection from "@/components/mentor/profile/ProjectsSection"
import RecentActivity from "@/components/mentor/profile/RecentActivity"

const ProfilePage = () => {
    return (
        <PageWrapper title="Profile" subtitle="Mentor profile and analytics">
            <ProfileHeader />
            <div className="mt-6">
                <ProfileStats />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                <PerformanceMetrics />
                <BadgesSection />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                <ProjectsSection />
                <RecentActivity />
            </div>
        </PageWrapper>
    )
}

export default ProfilePage;