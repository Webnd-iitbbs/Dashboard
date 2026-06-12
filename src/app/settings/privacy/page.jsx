"use client";

import { useState } from "react";

export default function PrivacySettingsPage() {
  const [privacy, setPrivacy] = useState({
    profileVisibility: "everyone",
    showRank: true,
    showXP: true,
    showProgress: true,
    showMentor: true,
    showGithub: true,
    showLinkedin: true,
    allowMemberMessages: true,
    allowMentorMessages: true,
  });

  const handleToggle = (key) => {
    setPrivacy((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = async() => {
    console.log(privacy);

    await fetch("/api/settings/privacy", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(privacy),
    });
  };

  const Toggle = ({ value, onClick }) => (
    <button
      onClick={onClick}
      className={`relative w-14 h-8 rounded-full transition-all
        ${
          value
            ? "bg-[#F5C518]"
            : "bg-[#2A2A2A]"
        }
      `}
    >
      <div
        className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all
          ${
            value
              ? "right-1"
              : "left-1"
          }
        `}
      />
    </button>
  );

  return (
    <div className=".wd-scroll">
      <h1 className="text-4xl font-bold mb-8">
        Privacy Settings
      </h1>

      <div
        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-8
        "
      >

        <div className="mb-8">
          <label className="block mb-3 text-[#888888]">
            Profile Visibility
          </label>

          <select
            value={privacy.profileVisibility}
            onChange={(e) =>
              setPrivacy((prev) => ({
                ...prev,
                profileVisibility: e.target.value,
              }))
            }
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 outline-none focus:border-[#F5C518]">
            <option value="everyone">
              Everyone in WEBnd
            </option>

            <option value="mentors">
              Mentors Only
            </option>

            <option value="private">
              Only Me
            </option>
          </select>
        </div>

        <div className="space-y-5">

          <div className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
            <div>
              <h3 className="font-semibold">
                Show Leaderboard Rank
              </h3>
              <p className="text-sm text-[#888888] mt-1">
                Display your rank publicly.
              </p>
            </div>

            <Toggle
              value={privacy.showRank}
              onClick={() =>
                handleToggle("showRank")
              }
            />
          </div>

          <div className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
            <div>
              <h3 className="font-semibold">
                Show XP Publicly
              </h3>
              <p className="text-sm text-[#888888] mt-1">
                Allow others to view your XP.
              </p>
            </div>

            <Toggle
              value={privacy.showXP}
              onClick={() =>
                handleToggle("showXP")
              }
            />
          </div>

          <div className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
            <div>
              <h3 className="font-semibold">
                Show Task Progress
              </h3>
              <p className="text-sm text-[#888888] mt-1">
                Display your task completion
                progress.
              </p>
            </div>

            <Toggle
              value={privacy.showProgress}
              onClick={() =>
                handleToggle("showProgress")
              }
            />
          </div>

          <div className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
            <div>
              <h3 className="font-semibold">
                Show Assigned Mentor
              </h3>
              <p className="text-sm text-[#888888] mt-1">
                Display your mentor on your
                profile.
              </p>
            </div>

            <Toggle
              value={privacy.showMentor}
              onClick={() =>
                handleToggle("showMentor")
              }
            />
          </div>

          <div className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
            <div>
              <h3 className="font-semibold">
                Show Github
              </h3>
              <p className="text-sm text-[#888888] mt-1">
                Allow members to view your Github.
              </p>
            </div>

            <Toggle
              value={privacy.showGithub}
              onClick={() =>
                handleToggle("showGithub")
              }
            />
          </div>

          <div className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
            <div>
              <h3 className="font-semibold">
                Show LinkedIn
              </h3>
              <p className="text-sm text-[#888888] mt-1">
                Allow members to view your LinkedIn.
              </p>
            </div>

            <Toggle
              value={privacy.showLinkedin}
              onClick={() =>
                handleToggle("showLinkedin")
              }
            />
          </div>

          <div className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
            <div>
              <h3 className="font-semibold">
                Allow Messages From Members
              </h3>
              <p className="text-sm text-[#888888] mt-1">
                Members can send you direct messages.
              </p>
            </div>

            <Toggle
              value={privacy.allowMemberMessages}
              onClick={() =>
                handleToggle("allowMemberMessages")
              }
            />
          </div>

          <div className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
            <div>
              <h3 className="font-semibold">
                Allow Messages From Mentors
              </h3>
              <p className="text-sm text-[#888888] mt-1">
                Mentors can contact you directly.
              </p>
            </div>

            <Toggle
              value={privacy.allowMentorMessages}
              onClick={() =>
                handleToggle("allowMentorMessages")
              }
            />
          </div>

        </div>

        <button
          onClick={handleSave}
          className="mt-8 px-6 py-3 bg-[#F5C518] text-black rounded-xl font-semibold hover:bg-[#C49A00] cursor-pointer transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
}