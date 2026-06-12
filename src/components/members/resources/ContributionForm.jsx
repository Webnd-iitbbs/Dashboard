"use client"

import { useState } from "react"
import { Upload, FileCode, FileText, X } from "lucide-react"

export default function ContributionForm({ onClose }) {
  const [type, setType] = useState("code")
  const [form, setForm] = useState({
    name: "",
    description: "",
    code: "",
    file: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      ...form,
      type,
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl wd-scroll">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-(--primary)">
              Contribute Resource
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Share knowledge with the WebnD community
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          {/* Resource Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Resource Name
            </label>

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="e.g. React Hooks Deep Dive"
              className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-(--primary)"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Description
            </label>

            <textarea
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              placeholder="Describe your resource..."
              className="w-full resize-none rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-(--primary)"
            />
          </div>

          {/* Type Selector */}
          <div>
            <label className="mb-3 block text-sm font-medium text-zinc-300">
              Resource Type
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setType("code")}
                className={`flex items-center justify-center gap-2 rounded-xl border p-4 transition ${
                  type === "code"
                    ? "border-(--primary) bg-(--primary)/10 text-(--primary)"
                    : "border-zinc-800 bg-black text-zinc-400"
                }`}
              >
                <FileCode size={18} />
                Code
              </button>

              <button
                type="button"
                onClick={() => setType("file")}
                className={`flex items-center justify-center gap-2 rounded-xl border p-4 transition ${
                  type === "file"
                    ? "border-(--primary) bg-(--primary)/10 text-(--primary)"
                    : "border-zinc-800 bg-black text-zinc-400"
                }`}
              >
                <FileText size={18} />
                File
              </button>
            </div>
          </div>

          {/* Conditional Content */}
          {type === "code" ? (
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Code / Notes
              </label>

              <textarea
                rows={10}
                value={form.code}
                onChange={(e) =>
                  setForm({
                    ...form,
                    code: e.target.value,
                  })
                }
                placeholder="// Paste code, markdown, notes..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-800
                  bg-black
                  p-4
                  font-mono
                  text-sm
                  text-white
                  outline-none
                  transition
                  focus:border-(--primary)
                "
              />
            </div>
          ) : (
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Upload File
              </label>

              <label
                htmlFor="resource-file"
                className="
                  flex
                  min-h-[180px]
                  cursor-pointer
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-dashed
                  border-zinc-700
                  bg-black/40
                  p-6
                  text-center
                  transition
                  hover:border-(--primary)
                "
              >
                <Upload
                  size={32}
                  className="mb-3 text-zinc-500"
                />

                <p className="font-medium text-zinc-300">
                  Drop file here or click to upload
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  PDF, ZIP, DOCX, Images, etc.
                </p>

                {form.file && (
                  <div className="mt-4 rounded-lg bg-zinc-900 px-3 py-2 text-sm text-(--primary)">
                    {form.file.name}
                  </div>
                )}

                <input
                  id="resource-file"
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      file: e.target.files?.[0] || null,
                    })
                  }
                />
              </label>
            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="
                rounded-xl
                border
                border-zinc-800
                px-5
                py-3
                text-zinc-400
                transition
                hover:bg-zinc-900
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                rounded-xl
                bg-(--primary)
                px-5
                py-3
                font-medium
                text-black
                transition
                hover:scale-[1.02]
              "
            >
              Submit Resource
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}