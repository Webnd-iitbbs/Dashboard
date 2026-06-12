"use client";

import { useEffect, useState } from "react";
import { BellRing } from "lucide-react";

export default function NewsRail({
  items = [
    "You got a new task: Dashboard Redesign",
    "Rajesh secured #3 on the leaderboard",
    "Kushal earned the React Slayer medal",
    "Competition UI Sprint starts tomorrow",
  ],
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [paused, items.length]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="
        relative overflow-hidden
        rounded-t-xl
        border border-[var(--wd-gray)]
        bg-[var(--wd-surface)]
        px-4 py-3
        shadow-lg shadow-black/20
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-y-0 left-0 w-24
          bg-[var(--wd-yellow)]/5
          blur-2xl
        "
      />

      <div className="relative flex items-center gap-3">
        {/* Pulse */}
        <div className="relative">
          <div className="h-2.5 w-2.5 rounded-full bg-[var(--wd-yellow)]" />
          <div
            className="
              absolute inset-0
              animate-ping
              rounded-full
              bg-[var(--wd-yellow)]
              opacity-50
            "
          />
        </div>

        <BellRing
          size={16}
          className="text-[var(--wd-yellow)]"
        />

        <span className="text-xs uppercase tracking-wider text-[var(--wd-muted)]">
          Live
        </span>

        <div className="relative h-6 flex-1 overflow-hidden">
          {items.map((item, i) => {
            const active = i === index;

            return (
              <div
                key={i}
                className={`
                    truncate
                  absolute inset-0
                  flex items-center
                  text-xs lg:text-sm text-[var(--wd-white)]
                  transition-all duration-700 ease-out
                  ${
                    active
                      ? "translate-y-0 opacity-100"
                      : i < index
                      ? "-translate-y-8 opacity-0"
                      : "translate-y-8 opacity-0"
                  }
                `}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}