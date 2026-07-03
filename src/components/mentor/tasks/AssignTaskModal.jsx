"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { createTaskAction } from "@/features/actions/taskActions";

const mentees = [
  { id: "cmqgt9abw0000ccl0ol63u8s1", name: "Azolla" },
  { id: "u2", name: "Carrie" },
];

const AssignTaskModal = ({ open, setOpen, mentees }) => {
  const handleChange = (e) => {
    const { name, value, type } = e.target

    setTask((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? Number(value)
          : value,
    }))
  }

  const [task, setTask] = useState({
    title: "",
    description: "",
    techStack: "",
    referenceUrl: "",
    deadline: "",
    xpReward: 50,
    assignedStudents: [],
  });

  const toggleMentee = (studentId) => {
    setTask((prev) => ({
      ...prev,
      assignedStudents: prev.assignedStudents.includes(studentId)
        ? prev.assignedStudents.filter((id) => id !== studentId)
        : [...prev.assignedStudents, studentId],
    }));
  };
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-40"
        onClick={() => setOpen(false)}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 z-50">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#F5C518]">Assign Task</h2>
          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>
        </div>
        <div className="space-y-5">
          <div>
            <label className="text-white block mb-2">Select Mentees</label>

            <div className="w-full h-40 overflow-y-auto bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 space-y-3">
              {mentees.map((mentee) => (
                <label key={mentee.id} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.assignedStudents.includes(mentee.id)}
                    onChange={() => toggleMentee(mentee.id)}
                  />

                  {mentee.name}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-white block mb-2">Task Title</label>
            <input
              name="title"
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-white block mb-2">Problem Statement</label>
            <textarea
              name="description"
              rows={5}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-white block mb-2">Required Tech Stack</label>
            <input
              name="techStack"
              placeholder="HTML..."
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-white block mb-2">Deadline</label>
            <input
              name="deadline"
              type="datetime-local"
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-white block mb-2">XP Reward</label>
            <input
              name="xpReward"
              type="number"
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-white block mb-2">
              Attach reference url
            </label>
            <input
              name="referenceUrl"
              type="url"
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white "
              placeholder="Attach any referenec file..."
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full py-3 rounded-lg bg-[#F5C518] text-black font-semibold"
            onClick={async () => createTaskAction(task)}
          >
            Assign Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AssignTaskModal;
