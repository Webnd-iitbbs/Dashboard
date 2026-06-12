"use client";

import { useState } from "react";

export default function AccountSettingsPage() {
  const [accountData, setAccountData] = useState({
    email: "xyz@gmail.com",
    memberSince: "12 sep 2025",
    webndId: "WEB-2025-004",
    role: "Mentor",
    status: "Active",
  });

  const [passwordData, setPasswordData] =
    useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  const handlePasswordChange = (e) => {
    setPasswordData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSavePassword = async() => {
    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    console.log(passwordData);
    await fetch("/api/settings/account", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passwordData),
        });
    
  };

  return (
    <div className=".wd-scroll">
      <h1 className="text-4xl font-bold mb-8">
        Account Settings
      </h1>

      <div className="space-y-6">

        <div
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-[#F5C518] mb-6">
            Account Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-[#888888] mb-1">
                Email Address
              </p>

              <p className="font-medium">
                {accountData.email}
              </p>
            </div>

            <div>
              <p className="text-[#888888] mb-1">
                Member Since
              </p>

              <p className="font-medium">
                {accountData.memberSince}
              </p>
            </div>

            <div>
              <p className="text-[#888888] mb-1">
                WEBnd ID
              </p>

              <p className="font-medium">
                {accountData.webndId}
              </p>
            </div>

            <div>
              <p className="text-[#888888] mb-1">
                Account Type
              </p>

              <p className="font-medium">
                {accountData.role}
              </p>
            </div>

          </div>
        </div>

        <div
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 ">
          <h2 className="text-2xl font-semibold text-[#F5C518] mb-6">
            Change Password
          </h2>

          <div className="space-y-4">

            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 outline-none focus:border-[#F5C518]"/>

            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 outline-none focus:border-[#F5C518] "/>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 outline-none focus:border-[#F5C518]"/>

            <button
              onClick={handleSavePassword}
              className="px-5 py-3 bg-[#F5C518] text-black rounded-xl font-semibold hover:bg-[#C49A00] transition-all cursor-pointer ">
              Update Password
            </button>

          </div>
        </div>

        <div
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-[#F5C518] mb-6">
            Active Sessions
          </h2>

          <div className="space-y-4">

            <div
              className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4">
              <p className="font-medium">
                Chrome • Windows
              </p>

              <p className="text-sm text-[#888888]">
                Current Session
              </p>
            </div>

            <div
              className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4">
              <p className="font-medium">
                Android Mobile
              </p>

              <p className="text-sm text-[#888888]">
                Last Active: 2 hours ago
              </p>
            </div>

            <button
              className="mt-2 px-5 py-3 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition-all cursor-pointer ">
              Logout All Devices
            </button>

          </div>
        </div>

        <div
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-[#F5C518] mb-6">
            Account Status
          </h2>

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#888888]">
                Current Status
              </p>

              <p className="font-medium mt-1">
                {accountData.status}
              </p>
            </div>

            <span
              className=" px-4 py-2 rounded-full bg-green-500/20 text-green-400">
              Active
            </span>

          </div>
        </div>

      </div>
    </div>
  );
}