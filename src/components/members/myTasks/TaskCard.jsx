"use client";

import { Paperclip } from "lucide-react";

export default function TaskCard({
  title,
  techStack = [],
  deadline,
  attachmentCount = 0,
  createdAt,
  selected = false,
  onClick,
}) {
  const daysLeft = getDaysLeft(deadline);

  return (
    <button
      onClick={onClick}
      className={`
        group
        shrink-0
        relative
        w-full
        overflow-hidden
        rounded-xl
        border
        bg-[#111111]
        text-left
        transition-all
        duration-300

        md:rotate-[0.5deg]
        md:hover:-translate-y-1
        md:hover:rotate-0

        ${
          selected
            ? "border-[#F5C518] shadow-[0_0_25px_rgba(245,197,24,0.15)] md:rotate-0"
            : "border-[#2A2A2A] hover:border-[#F5C518]/40"
        }
      `}
    >
      {/* Desktop Side Tab */}
      <div
        className={`
          hidden md:block
          absolute left-0 top-0 h-full w-6
          transition-all duration-300

          ${
            selected
              ? "bg-[#F5C518]"
              : "bg-[#F5C518]/70 group-hover:bg-[#F5C518]"
          }

          [clip-path:polygon(0_0,100%_8%,100%_92%,0_100%)]
        `}
      />

      {/* Animated Scan Line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/2 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#F5C518]/10 to-transparent animate-[scan_10s_linear_infinite]" />
      </div>

      <div className="relative p-4 md:pl-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="line-clamp-2 text-sm font-medium text-[#F5F5F5] md:text-base">
            {title}
          </h3>

          <span className="shrink-0 text-[10px] text-[#888888] md:text-xs">
            {formatDate(createdAt)}
          </span>
        </div>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-2 lg:hidden">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#F5C518]/30 bg-[#F5C518]/10 px-2 py-1 text-[10px] font-medium text-[#F5C518] md:text-xs"
            >
              {tech}
            </span>
          ))}

          {techStack.length > 4 && (
            <span className="rounded-full bg-[#1A1A1A] px-2 py-1 text-[10px] text-[#888888] md:text-xs">
              +{techStack.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#888888]">
              Deadline
            </p>

            <p className="mt-1 text-sm text-[#F5F5F5]">
              {formatDate(deadline)}
            </p>

            <p
              className={`mt-1 text-xs ${
                daysLeft <= 2
                  ? "text-red-400"
                  : daysLeft <= 5
                  ? "text-orange-400"
                  : "text-[#888888]"
              }`}
            >
              {daysLeft > 0
                ? `${daysLeft} day${daysLeft > 1 ? "s" : ""} left`
                : "Due today"}
            </p>
          </div>

          <div className="flex items-center gap-1 rounded-lg border border-[#2A2A2A] bg-[#0D0D0D] px-2 py-1">
            <Paperclip size={14} className="text-[#F5C518]" />
            <span className="text-xs text-[#F5F5F5]">
              {attachmentCount}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

/* ---------------- Helpers ---------------- */

function getDaysLeft(date) {
  const today = new Date();
  const deadline = new Date(date);

  today.setHours(0, 0, 0, 0);
  deadline.setHours(0, 0, 0, 0);

  return Math.ceil(
    (deadline.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  );
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}