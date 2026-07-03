"use client";
import React, { useEffect, useState } from "react";
import { Trophy, Star, Target, Users } from "lucide-react";
import StatCard from "@/components/members/dashboard/StatCard";
import NewsRail from "@/components/members/dashboard/NewsRail";
import ProgressBar from "@/components/members/dashboard/ProgressBar";
import Image from "next/image";

const MemberDashboardPage = ({user, data}) => {
  
  return (
    <div className="relative h-screen flex-1 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--wd-yellow)] opacity-[0.08] blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--wd-yellow)] opacity-[0.12] blur-[100px]" />
        <Image
          src="/logo.png"
          alt=""
          width={800}
          height={800}
          className="opacity-[0.1] blur-[1px] select-none pointer-events-none"
        />
      </div>
      <div className="mobile-page lg:h-screen! w-full p-6">
        <div className="relative h-full w-full border-t border-l border-r rounded-t-2xl border-t-(--border) border-l-(--border) border-r-(--border) overflow-y-auto">
          <div className="flex justify-start p-6">
            <div className="h-16 w-16 rounded-full bg-amber-400"></div>
            <div className="px-4">
              <h1 className="text-(--primary) text-xl font-semibold lg:text-4xl">
                {user?.name || "Rajesh Mohanty"}
              </h1>
              <h2 className="text-(--wd-muted) font-semibold text-xl">
                {user?.role || "Member"}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
            <StatCard
              tilt="left"
              title="Total XP"
              value={user?.xp || "NA"}
              subtitle="+340 this week"
              trend="7.8%"
              icon={Star}
            />

            <StatCard
              tilt="right"
              title="Rank"
              value="#4"
              subtitle="Up 2 positions"
              icon={Trophy}
            />

            <StatCard
              tilt="left"
              title="Pending Tasks"
              value={data?.assignedTasks?.length || 0}
              subtitle="2 due this week"
              icon={Target}
            />

            <StatCard
              tilt="right"
              title="Mentor"
              value={data?.studentLinks?.[0]?.mentor?.name || "Toshan Mondal"}
              subtitle="Assigned Mentor"
              icon={Users}
            />
          </div>
          <div className="p-4 w-full">
            <ProgressBar total={18} completed={12} />
          </div>
          <div className="h-4 relative bottom-0" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <NewsRail
            items={[
              "You got a new task: Landing Page Redesign",
              "Rajesh secured #3 on the leaderboard",
              "Kushal earned the React Slayer medal",
              "Competition UI Sprint begins tomorrow",
              "Mentor Toshan Bhaiya reviewed your submission",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberDashboardPage;
