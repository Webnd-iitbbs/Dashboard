import ProfileCard from '@/components/profile/ProfileCard.jsx'
import StatsGrid from '@/components/profile/StatisticsGrid.jsx'
import MentorCard from '@/components/profile/Mentor.jsx'
import Leaderboard from '@/components/profile/LeaderBoard.jsx'
import PendingTasks from '@/components/profile/PendingTask'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <ProfileCard/>
      <div className='stats'>
        <StatsGrid/>
      </div>
      <MentorCard/>
      <Leaderboard/>
      <PendingTasks/>
    </main>
  )
}

export default page
