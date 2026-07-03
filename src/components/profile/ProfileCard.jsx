import Image from "next/image";

export default function ProfileCard({ user, rank }) {
  if (!user) return null;

  const isMember = user.role === "MEMBER";
  const isMentor = user.role === "MENTOR";
  const isAdmin = user.role === "ADMIN";

  const displayPosition = 
    isAdmin ? "Admin" : 
    isMentor ? "Mentor" : 
    "Member";

  const displayDomain = 
    isAdmin ? "Infrastructure" : 
    isMentor ? "Web Development" : 
    "Software Engineering";

  const displayExpertise = 
    isAdmin ? "Security & Access" : 
    isMentor ? "Mentoring & Dev" : 
    "Full Stack Web";

  const profileImage = user.image && user.image !== "#"
    ? user.image
    : `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(user.name)}`;

  const profileBio = 
    isAdmin ? "Managing system configurations, user access, and overall dashboard architecture." :
    isMentor ? "Guiding members, reviewing task submissions, and providing technical architecture insights." :
    "WebnD developer working on building projects, earning XP, and leveling up development skills.";

  const githubUrl = `https://github.com/${user.name.toLowerCase().replace(/\s+/g, "")}`;
  const linkedinUrl = `https://linkedin.com/in/${user.name.toLowerCase().replace(/\s+/g, "")}`;

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-4 md:p-6 m-4 md:m-7">
      <div className="relative rounded-3xl overflow-hidden mb-6">
        <div className="absolute inset-0 bg-linear-to-r from-[#F5C518]/10 via-transparent to-[#F5C518]/5"/>
          <div className="relative p-4 md:p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-[#F5C518] object-cover"/>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {user.name}
                  </h2>

                  <p className="text-[#888888] mt-1 text-sm uppercase tracking-wider">
                    {user.role}
                  </p>

                <div
                  className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                  <span
                    className="px-3 py-1 rounded-full bg-[#F5C518] text-black text-sm font-semibold">
                    {displayPosition}
                  </span>

                  <span
                    className="px-3 py-1 rounded-full bg-[#111111] border border-[#2A2A2A] text-sm">
                    {displayDomain}
                  </span>
                </div>
              </div>
              </div>

              {isMember && (
                <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
                  <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-4 text-center">
                    <p className="text-xs text-[#888888]">XP</p>
                    <h3 className="text-xl font-bold text-[#F5C518]">{user.xp}</h3>
                  </div>

                  <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-4 text-center">
                    <p className="text-xs text-[#888888]">Rank</p>
                    <h3 className="text-xl font-bold text-[#F5C518]">{rank}</h3>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[#888888] leading-relaxed">
          {profileBio}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div
          className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4">
          <p className="text-[#888888] text-sm">
            Domain
          </p>

          <p className="font-medium mt-1">
            {displayDomain}
          </p>
        </div>

        <div
          className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4">
          <p className="text-[#888888] text-sm">
            Expertise
          </p>

          <p className="font-medium mt-1">
            {displayExpertise}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="block text-center bg-[#111111] border border-[#2A2A2A] rounded-xl p-3 hover:border-[#F5C518] transition-all">
          🐙 Github
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="block text-center bg-[#111111] border border-[#2A2A2A] rounded-xl p-3 hover:border-[#F5C518] transition-all ">
          💼 LinkedIn
        </a>
      </div>
    </div>
  );
}