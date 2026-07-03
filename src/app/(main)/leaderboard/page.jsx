"use client"

import LeaderboardMobileCard from "@/components/mentor/leaderboard/LeaderboardMobileCard";
import LeaderboardTable from "@/components/mentor/leaderboard/LeaderboardTable";
import LeaderboardTabs from "@/components/mentor/leaderboard/LeaderboardTabs";
import { fetchLeaderboard } from "@/features/actions/laederboardAction";
import PageWrapper from "@/components/mentor/layout/PageWrapper";
import TopThreePodium from "@/components/mentor/leaderboard/TopThreePodium";
import { useState, useEffect } from "react";

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
    const [members, setMembers] = useState([]);
    const [active, setActive] = useState("members");
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchLeaderboard().then(setMembers).catch(console.error);
    }, []);

    const data = active === 'mentors' ? mentors : members;
    const filteredData = search.trim().length ? data.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())) : data;
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