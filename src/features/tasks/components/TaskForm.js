"use client";
import { useState } from "react";
import { createTask } from "../actions/create-task";

export default function TaskForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      await createTask(formData);
      e.currentTarget.reset();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888888]">
        New Task
      </p>

      <form
        onSubmit={handleSubmit}
        className="relative space-y-3 rounded-lg border border-[#2A2A2A] bg-[#111111] p-5 overflow-hidden max-w-xl"
      >
        {/* Yellow top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#F5C518]" />

        <h2 className="text-[16px] font-medium text-[#F5F5F5] pt-1">
          Create Task
        </h2>

        <input
          name="title"
          placeholder="Task Title"
          required
          className="w-full rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-[13px] text-[#F5F5F5] placeholder-[#555] outline-none transition-colors focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]/30"
        />

        <textarea
          name="description"
          placeholder="Task Description"
          required
          rows={3}
          className="w-full resize-none rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-[12px] text-[#F5F5F5] placeholder-[#555] outline-none transition-colors focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]/30"
        />

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg bg-[#F5C518] px-4 py-2 text-[12px] font-semibold text-[#0D0D0D] transition-all hover:bg-[#C49A00] active:scale-[0.96] disabled:opacity-60 disabled:cursor-not-allowed uppercase tracking-wide"
        >
          {loading ? (
            <>
              <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-[#0D0D0D] border-t-transparent" />
              Creating...
            </>
          ) : (
            "Create Task"
          )}
        </button>
      </form>
    </div>
  );
}