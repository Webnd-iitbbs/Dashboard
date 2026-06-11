"use client"

import LeaderboardMobileCard from "@/components/mentor/leaderboard/LeaderboardMobileCard";
import LeaderboardTable from "@/components/mentor/leaderboard/LeaderboardTable";
import LeaderboardTabs from "@/components/mentor/leaderboard/LeaderboardTabs";
import PageWrapper from "@/components/mentor/layout/PageWrapper";
import TopThreePodium from "@/components/mentor/leaderboard/TopThreePodium";
import { useState } from "react";

const LeaderboardPage = () => {
    const mentors = [
        {
            id: 1,
            name: "Y",
            role: "App developer",
            xp: 13300,
            image: "#",
            totalTasks: 20,
            tasksCompleted: 18,
            badges: ["Frontend Expert", "UI Master"]
        },
        {
            id: 2,
            name: "X",
            role: "Frontend developer",
            xp: 3300,
            image: "#",
            totalTasks: 10,
            tasksCompleted: 5,
            badges: ["Frontend Expert", "UI Rookie"]
        },
        {
            id: 3,
            name: "ZZ",
            role: "Backend developer",
            xp: 8999,
            image: "#",
            totalTasks: 15,
            tasksCompleted: 14,
            badges: ["Backend Expert", "API Wizard"]
        },
        {
            id: 4,
            name: "XY",
            role: "Designer",
            xp: 10000,
            image: "#",
            totalTasks: 22,
            tasksCompleted: 18,
            badges: ["Frontend Expert", "Design Devil"]
        }
    ]
    const mentees = [
        {
            id: 1,
            name: "A",
            role: "Frontend",
            xp: 7200,
            image: "#",
            totalTasks: 10,
            tasksCompleted: 6,
            badges: ["Frontend Expert"]
        },
        {
            id: 2,
            name: "B",
            role: "Backend",
            xp: 8400,
            image: "#",
            totalTasks: 12,
            tasksCompleted: 7,
            badges: ["UI Master"]
        },
        {
            id: 3,
            name: "R",
            role: "Design",
            xp: 6400,
            image: "#",
            totalTasks: 20,
            tasksCompleted: 18,
            badges: ["Design Devil"]
        },
        {
            id: 4,
            name: "S",
            role: "Full Stack",
            xp: 9600,
            image: "#",
            totalTasks: 13,
            tasksCompleted: 13,
            badges: ["Dev Expert"]
        }
    ];
    const [active, setActive] = useState("mentees")
    const [search, setSearch] = useState("")
    const data = active === 'mentors' ? mentors : mentees;
    const filteredData = search.trim().length?data.filter((user) => user.name.toLowerCase().includes(search.toLowerCase)):data
    return (
        <PageWrapper title="Leaderboard" subtitle="Live rankings based on XP">
            <LeaderboardTabs active={active} setActive={setActive} />
            <div className="mb-8">
                <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl
                px-4 py-3 text-white focus:border-[#F5C518] focus:outline-none"/>
            </div>
            <TopThreePodium users={filteredData} />
            <LeaderboardTable users={filteredData} active={active} />
            <LeaderboardMobileCard users={filteredData} />
        </PageWrapper>
    )
}

export default LeaderboardPage;