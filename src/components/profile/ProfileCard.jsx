import Image from "next/image";

export default function ProfileCard() {
  const profile = {
    // sample data
    image: "/default.svg",
    name: "xyz",
    role: "Frontend Developer",
    position: "Mentor",
    bio: "Passionate about web development and UI design.",
    domain: "Web Development",
    expertise: "Frontend Development",
    github: "https://github.com/xyz",
    linkedin: "https://linkedin.com/in/xyz",
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-4 md:p-6 m-4 md:m-7">
      <div className="relative rounded-3xl overflow-hidden mb-6">
        <div className="absolute inset-0 bg-linear-to-r from-[#F5C518]/10 via-transparent to-[#F5C518]/5"/>
          <div className="relative p-4 md:p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                <Image
                  src={profile.image}
                  alt="Profile"
                  width={112}
                  height={112}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-[#F5C518] object-cover"/>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {profile.name}
                  </h2>

                  <p className="text-[#888888] mt-1">
                    {profile.role}
                  </p>

                <div
                  className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                  <span
                    className="px-3 py-1 rounded-full bg-[#F5C518] text-black text-sm font-semibold">
                    {profile.position}
                  </span>

                  <span
                    className="px-3 py-1 rounded-full bg-[#111111] border border-[#2A2A2A] text-sm">
                    {profile.domain}
                  </span>
                </div>
              </div>
              </div>

              <div
                className="grid grid-cols-2 gap-3 w-full lg:w-auto">
                <div
                  className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-4 text-center">
                  <p className="text-xs text-[#888888]">
                    XP
                  </p>

                  <h3 className="text-xl font-bold text-[#F5C518]">
                    4820
                  </h3>
                </div>

                <div
                  className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-4 text-center">
                  <p className="text-xs text-[#888888]">
                    Rank
                  </p>

                  <h3 className="text-xl font-bold text-[#F5C518]">
                    #4
                  </h3>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[#888888] leading-relaxed">
          {profile.bio}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div
          className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4">
          <p className="text-[#888888] text-sm">
            Domain
          </p>

          <p className="font-medium mt-1">
            {profile.domain}
          </p>
        </div>

        <div
          className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4">
          <p className="text-[#888888] text-sm">
            Expertise
          </p>

          <p className="font-medium mt-1">
            {profile.expertise}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-[#111111] border border-[#2A2A2A] rounded-xl p-3 hover:border-[#F5C518] transition-all">
            🐙 Github
          </a>
        )}

        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-[#111111] border border-[#2A2A2A] rounded-xl p-3 hover:border-[#F5C518] transition-all ">
            💼 LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}