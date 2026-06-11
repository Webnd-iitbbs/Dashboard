"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function StatCard({
    tilt,
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  className,
}) {
    const tiltClass =
  tilt === "left"
    ? "md:[transform:perspective(1200px)_rotateY(8deg)] md:hover:[transform:perspective(1200px)_rotateY(0deg)]"
    : "md:[transform:perspective(1200px)_rotateY(-8deg)] md:hover:[transform:perspective(1200px)_rotateY(0deg)]";
  return (
    <div
      className={cn(
        tiltClass,
        "group relative overflow-hidden rounded-2xl",
        "border border-[var(--wd-gray)]",
        "bg-[linear-gradient(145deg,var(--wd-charcoal),#111)]",
        "p-5",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:shadow-[0_12px_40px_rgba(245,197,24,0.15)]",
        className
      )}
    >
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--wd-yellow)]" />

      {/* glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--wd-yellow)]/10 blur-3xl transition-all duration-500 group-hover:bg-[var(--wd-yellow)]/20" />

      {/* glass highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--wd-muted)]">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-semibold text-[var(--wd-yellow)]">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-2 text-sm text-[var(--wd-muted)]">
              {subtitle}
            </p>
          )}
        </div>

        {Icon && (
          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl
              border border-[var(--wd-yellow)]/20
              bg-[var(--wd-yellow)]/10
              backdrop-blur
            "
          >
            <Icon
              size={22}
              className="text-[var(--wd-yellow)]"
            />
          </div>
        )}
      </div>

      {trend && (
        <div
          className="
            mt-4 flex items-center gap-1
            text-xs font-medium
            text-[var(--wd-yellow)]
          "
        >
          <ArrowUpRight size={14} />
          {trend}
        </div>
      )}

      {/* bottom shine */}
      <div
        className="
          absolute bottom-0 left-0 h-[1px] w-full
          bg-gradient-to-r
          from-transparent
          via-[var(--wd-yellow)]/40
          to-transparent
        "
      />
    </div>
  );
}