"use client"

import {
  FileText,
  Video,
  Link as LinkIcon,
  BookOpen,
  GitBranch,
  ArrowUpRight,
} from "lucide-react"

const icons = {
  pdf: FileText,
  video: Video,
  article: BookOpen,
  link: LinkIcon,
  github: GitBranch,
}

export default function ResourceCard({
  title,
  description,
  type = "pdf",
  author,
  createdAt,
  official = false,
  href = "#",
}) {
  const Icon = icons[type.toLowerCase()] || FileText

  return (
    <article
      className="
        group
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-950/70
        p-5
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-(--primary)/40
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.45)]
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-xl
              bg-(--primary)/10
              text-(--primary)
              border border-(--primary)/20
            "
          >
            <Icon size={20} />
          </div>

          <div className="min-w-0">
            <h3
              className="
                truncate
                text-base
                font-semibold
                text-white
              "
            >
              {title}
            </h3>

            <p className="text-xs text-zinc-500 capitalize">
              {type}
            </p>
          </div>
        </div>

        <span
          className={`
            shrink-0 rounded-full px-3 py-1 text-xs font-medium
            ${
              official
                ? "bg-(--primary)/10 text-(--primary)"
                : "bg-zinc-800 text-zinc-300"
            }
          `}
        >
          {official ? "Official" : "Community"}
        </span>
      </div>

      {/* Description */}
      <p
        className="
          line-clamp-3
          text-sm
          leading-relaxed
          text-zinc-400
        "
      >
        {description}
      </p>

      {/* Footer */}
      <div className="mt-auto flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm text-zinc-300">
            {author}
          </p>

          <p className="text-xs text-zinc-500">
            {createdAt}
          </p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-zinc-700
            bg-black
            text-zinc-400
            transition-all
            duration-200
            hover:border-(--primary)
            hover:text-(--primary)
          "
        >
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Accent Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          top-0
          h-px
          bg-(--primary)/60
          opacity-0
          blur-sm
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </article>
  )
}