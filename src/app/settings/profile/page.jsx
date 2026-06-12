"use client";

import { useState } from "react";
import Image from "next/image";
export default function ProfileSettingsPage() {
  const [imagePreview, setImagePreview] = useState("/default.svg");

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    position: "",
    bio: "",
    domain: "",
    expertise: "",
    github: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImagePreview(imageUrl);
  };

  const handleSubmit = async () => {
    console.log(formData);
    await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const fields = [
    formData.name,
    formData.role,
    formData.position,
    formData.bio,
    formData.domain,
    formData.expertise,
    formData.github,
    formData.linkedin,
  ];

  const completedFields = fields.filter(Boolean).length;

  const completion = (completedFields / fields.length) * 100;

  return (
    <div className=".wd-scroll">
      <h1 className="text-4xl font-bold mb-8">Profile Settings</h1>

      <div
        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-8">
        <div
          className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5 mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-[#888888]">Profile Completion</span>

            <span className="text-[#F5C518]">{completion.toFixed(0)}%</span>
          </div>

          <div className="h-3 bg-[#2A2A2A] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#F5C518] transition-all duration-500"
              style={{
                width: `${completion}%`,
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-6 mb-10">
          <Image
            src={imagePreview}
            alt="Profile"
            className="rounded-full object-cover border-2 border-[#F5C518]"
            width={80}
            height={80}
          />

          <div>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            <label
              htmlFor="profileImage"
              className="cursor-pointer px-4 py-2 bg-[#F5C518] text-black rounded-xl font-semibold hover:bg-[#C49A00] transition-all">
              Change Photo
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-[#888888]">Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:border-[#F5C518] outline-none"/>
          </div>

          <div>
            <label className="block mb-2 text-[#888888]">Role</label>

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:border-[#F5C518] outline-none "/>
          </div>

          <div>
            <label className="block mb-2 text-[#888888]">
              Society Position
            </label>

            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:border-[#F5C518] outline-none">
              <option value="">Select Position</option>

              <option value="Mentee">Mentee</option>

              <option value="Mentor">Mentor</option>

              <option value="Core Member">Core Member</option>

              <option value="Development Lead">Development Lead</option>

              <option value="Design Lead">Design Lead</option>

              <option value="ManaFgement Lead">Management Lead</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-[#888888]">Domain</label>

            <select
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:border-[#F5C518] outline-none">
              <option value="">Select Domain</option>

              <option value="Web Development">Web Development</option>

              <option value="UI/UX Design">UI/UX Design</option>

              <option value="Graphic Design">Graphic Design</option>

              <option value="AI/ML">AI/ML</option>

              <option value="Competitive Programming">
                Competitive Programming
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-[#888888]">Expertise</label>

            <select
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:border-[#F5C518] outline-none">
              <option value="">Select Expertise</option>

              <option value="Frontend Development">Frontend Development</option>

              <option value="Backend Development">Backend Development</option>

              <option value="UI/UX Design">UI/UX Design</option>

              <option value="Graphic Design">Graphic Design</option>

              <option value="AI/ML">AI/ML</option>

              <option value="Content Writing">Content Writing</option>

              <option value="Video Editing">Video Editing</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-[#888888]">Github</label>

            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:border-[#F5C518] outline-none"/>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-[#888888]">LinkedIn</label>

            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:border-[#F5C518] outline-none"/>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-[#888888]">Bio</label>

            <textarea
              rows={4}
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:border-[#F5C518] outline-none"/>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-8 px-6 py-3 bg-[#F5C518] text-black font-semibold rounded-xl hover:bg-[#C49A00] transition-all cursor-pointer ">
          Save Changes
        </button>
      </div>
    </div>
  );
}
