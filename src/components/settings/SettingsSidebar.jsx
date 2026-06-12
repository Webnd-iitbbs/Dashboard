"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SettingsSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Profile Settings",
      href: "/settings/profile",
    },
    {
      name: "Notifications",
      href: "/settings/notifications",
    },
    {
      name: "Privacy",
      href: "/settings/privacy",
    },
    {
      name: "Account",
      href: "/settings/account",
    },
    {
      name: "Danger Zone",
      href: "/settings/dangerZone",
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-6 right-8 z-50 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-3 px-4">
        ☰
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"onClick={() => setIsOpen(false)}/>
      )}

      <aside
        className={`
          lg:relative fixed top-0 left-0 h-screen w-72 bg-[#1A1A1A] border-r border-[#2A2A2A] p-6 overflow-y-auto z-50 transform transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#F5C518]">
            Settings
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-xl text-white">
            ✕
          </button>
        </div>

        <div className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl transition-all
                ${
                  pathname === link.href
                    ? "bg-[#2A2A2A] text-[#F5C518] border-l-4 border-[#F5C518] font-semibold"
                    : "text-white hover:bg-[#2A2A2A]"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}