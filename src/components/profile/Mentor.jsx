export default function MentorCard({ mentor }) {
  if (!mentor) return null;

  const mentorAvatar = mentor.image && mentor.image !== "#"
    ? mentor.image
    : `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(mentor.name)}`;

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 m-4 md:m-7 flex flex-col sm:flex-row items-center gap-5">
      <img
        src={mentorAvatar}
        alt="Mentor"
        className="w-16 h-16 rounded-full border border-[#F5C518] object-cover"
      />
      <div>
        <p className="text-xs uppercase tracking-wider text-[#888888]">
          Assigned Mentor
        </p>

        <h2 className="text-2xl font-bold text-[#F5C518] mt-1">
          {mentor.name}
        </h2>

        <p className="text-[#888888] text-sm mt-0.5">
          {mentor.email}
        </p>
      </div>
    </div>
  );
}