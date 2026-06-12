"use client"

import { Search } from "lucide-react"

export default function ResSearch({
  value,
  onChange,
  placeholder = "Search resources...",
}) {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border border-zinc-800
          bg-black/40
          py-3
          pl-11
          pr-4
          text-sm
          text-white
          outline-none
          transition-all
          duration-200
          placeholder:text-zinc-500
          focus:border-(--primary)
          focus:ring-2
          focus:ring-(--primary)/20
          hover:border-zinc-700
        "
      />
    </div>
  )
}