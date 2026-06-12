"use client";

import {
  CalendarDays,
  Paperclip,
  Clock3,
  ExternalLink,
//   Github,
} from "lucide-react";

export default function TaskDesc() {
  const task = {
    title: "Member Dashboard Frontend",
    description:
      "Design and implement the Member Dashboard UI using Next.js and Tailwind CSS. The dashboard should be responsive, follow the WebnD theme guidelines, and provide an intuitive experience across desktop and mobile devices.",

    techStack: ["React", "Next.js", "Tailwind CSS"],

    deadline: "15 June 2026",

    createdAt: "10 June 2026",

    attachments: [
      {
        name: "Dashboard Requirements.pdf",
        url: "#",
      },
      {
        name: "Design References.zip",
        url: "#",
      },
    ],
  };

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#111111]">
      {/* Header */}
      <div className="border-b border-[#2A2A2A] p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-[#F5F5F5]">
              {task.title}
            </h1>

            <p className="mt-2 text-sm text-[#888888]">
              Assigned by Mentor
            </p>
          </div>

          <span className="rounded-full border border-[#F5C518]/30 bg-[#F5C518]/10 px-3 py-1 text-xs font-medium text-[#F5C518]">
            Pending
          </span>
        </div>

        {/* Meta */}
        <div className="mt-5 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-[#888888]">
            <CalendarDays size={16} />
            {task.deadline}
          </div>

          <div className="flex items-center gap-2 text-sm text-[#888888]">
            <Clock3 size={16} />
            Assigned {task.createdAt}
          </div>
        </div>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {task.techStack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-[#F5C518]/30
                bg-[#F5C518]/10
                px-3 py-1
                text-xs
                text-[#F5C518]
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 wd-scroll">
        {/* Problem Statement */}
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#F5C518]">
            Problem Statement
          </h2>

          <div className="rounded-xl border border-[#2A2A2A] bg-[#0D0D0D] p-4">
            <p className="leading-relaxed text-[#D8D8D8]">
              {task.description}
            </p>
          </div>
        </div>

        {/* Attachments */}
        <div className="mt-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#F5C518]">
            Reference Files
          </h2>

          <div className="space-y-3">
            {task.attachments.map((file) => (
              <a
                key={file.name}
                href={file.url}
                className="
                  flex items-center justify-between
                  rounded-xl
                  border border-[#2A2A2A]
                  bg-[#0D0D0D]
                  px-4 py-3
                  transition-all
                  hover:border-[#F5C518]/30
                "
              >
                <div className="flex items-center gap-3">
                  <Paperclip
                    size={16}
                    className="text-[#F5C518]"
                  />

                  <span className="text-sm text-[#F5F5F5]">
                    {file.name}
                  </span>
                </div>

                <ExternalLink
                  size={15}
                  className="text-[#888888]"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Submission */}
        <div className="mt-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#F5C518]">
            Submission
          </h2>

          <div className="rounded-xl border border-[#2A2A2A] bg-[#0D0D0D] p-4">
            <label className="mb-2 block text-sm text-[#888888]">
              Github Repository
            </label>

            <div className="flex items-center gap-2 rounded-lg border border-[#2A2A2A] bg-[#111111] px-3">
              {/* <Github
                size={16}
                className="text-[#888888]"
              /> */}

              <input
                type="text"
                placeholder="https://github.com/..."
                className="
                  h-11
                  w-full
                  bg-transparent
                  text-sm
                  text-[#F5F5F5]
                  outline-none
                "
              />
            </div>

            <label className="mt-5 mb-2 block text-sm text-[#888888]">
              Notes
            </label>

            <textarea
              rows={5}
              placeholder="Anything you'd like your mentor to know..."
              className="
                w-full
                rounded-lg
                border
                border-[#2A2A2A]
                bg-[#111111]
                p-3
                text-sm
                text-[#F5F5F5]
                outline-none
                resize-none
              "
            />

            <div className="mt-5 flex justify-end">
              <button
                className="
                  rounded-xl
                  bg-[#F5C518]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  hover:scale-[1.02]
                "
              >
                Submit Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}