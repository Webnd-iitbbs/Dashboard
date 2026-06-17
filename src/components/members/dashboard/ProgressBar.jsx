"use client";

import { cn } from "@/lib/utils";

export default function ProgressBar({
  total = 10,
  completed = 0,
  showNumbers = true,
  className,
}) {
  const percentage =
    total > 0 ? Math.min((completed / total) * 100, 100) : 0;

  return (
    <div className={cn("w-full space-y-2", className)}>
      {showNumbers && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--wd-muted)]">
            Progress
          </span>

          <span className="font-medium text-[var(--wd-yellow)]">
            {completed}/{total}
          </span>
        </div>
      )}

      <div
        className="relative h-3 overflow-hidden rounded-full border border-[var(--wd-gray)] bg-[var(--wd-charcoal)]"
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[var(--wd-yellow-dark)] via-[var(--wd-yellow)] to-[var(--wd-yellow-light)] transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer */}
          <div
            className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.3 transparent)] animate-[shimmer_2s_linear_infinite]"
          />
        </div>
      </div>

      <div className="flex justify-between text-xs">
        <span className="text-[var(--wd-muted)]">
          {percentage.toFixed(0)}% Complete
        </span>

        <span className="text-[var(--wd-muted)]">
          {total - completed} Remaining
        </span>
      </div>
    </div>
  );
}