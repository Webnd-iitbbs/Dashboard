"use client";

import { useState } from "react";

export default function NotificationSettingsPage() {
  const [notifications, setNotifications] =
    useState({
      taskAssigned: true,
      mentorFeedback: true,
      taskApproved: true,
      xpRewards: true,
      leaderboardChanges: true,
      competitions: true,
      workshops: true,
      announcements: true,
      emailNotifications: false,
    });

  const handleToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = async() => {
    console.log(notifications);
    await fetch("/api/settings/notification", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notifications),
    });
  };

  const settings = [
    {
      key: "taskAssigned",
      title: "Task Assigned",
      description:
        "Get notified when a mentor assigns a new task.",
    },
    {
      key: "mentorFeedback",
      title: "Mentor Feedback",
      description:
        "Receive feedback from your mentor.",
    },
    {
      key: "taskApproved",
      title: "Task Approved",
      description:
        "Get notified when your task is approved.",
    },
    {
      key: "xpRewards",
      title: "XP Rewards",
      description:
        "Receive alerts when XP is awarded.",
    },
    {
      key: "leaderboardChanges",
      title: "Leaderboard Updates",
      description:
        "Know when your rank changes.",
    },
    {
      key: "competitions",
      title: "Competition Announcements",
      description:
        "Stay updated about upcoming competitions.",
    },
    {
      key: "workshops",
      title: "Workshop Notifications",
      description:
        "Receive reminders about workshops.",
    },
    {
      key: "announcements",
      title: "Society Announcements",
      description:
        "Important updates from WEBnd.",
    },
    {
      key: "emailNotifications",
      title: "Email Notifications",
      description:
        "Receive notifications by email.",
    },
  ];

  return (
    <div className=".wd-scroll">
      <h1 className="text-4xl font-bold mb-8">
        Notification Settings
      </h1>

      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-8">

        <div className="space-y-5">

          {settings.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
              <div>
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-[#888888] mt-1">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() =>
                  handleToggle(item.key)
                }
                className={`relative w-14 h-8 rounded-full transition-all
                  ${
                    notifications[item.key]
                      ? "bg-[#F5C518]"
                      : "bg-[#2A2A2A]"
                  }
                `}
              >
                <div
                  className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all
                    ${
                      notifications[item.key]
                        ? "right-1"
                        : "left-1"
                    }
                  `}
                />
              </button>
            </div>
          ))}

        </div>

        <button
          onClick={handleSave}
          className="mt-8 px-6 py-3 bg-[#F5C518] text-black rounded-xl font-semibold cursor-pointer hover:bg-[#C49A00] transition-all ">
          Save Changes
        </button>

      </div>
    </div>
  );
}