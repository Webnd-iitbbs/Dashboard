export default function Leaderboard({ leaderboard = [], userId }) {
  const sortedLeaders = [...leaderboard].sort((a, b) => b.xp - a.xp);

  const first = sortedLeaders[0] || { name: "Rank 1", xp: 0 };
  const second = sortedLeaders[1] || { name: "Rank 2", xp: 0 };
  const third = sortedLeaders[2] || { name: "Rank 3", xp: 0 };

  const others = sortedLeaders.slice(3, 7); // Show ranks 4 to 7

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 m-4 md:m-7">
      <div>
        <h2 className="text-3xl font-bold text-[#F5C518] mb-8 flex flex-col">🏆 Leaderboard</h2>
        <p className="text-center my-3 md:text-left text-[#888888]">Live rankings based on XP</p>
      </div>
      <div className="flex md:flex-row flex-col justify-center md:items-end items-center gap-4 mb-10">
        
        <div className="text-center animate-fade-in">
          <div className="mb-3">
            <h3 className="font-semibold text-[#F5F5F5]">{second.name}</h3>
            <p className="text-sm text-[#888888]">
              {second.xp} XP
            </p>
          </div>

          <div className="h-32 w-28 bg-[#222222] border border-[#2A2A2A] rounded-t-2xl flex flex-col items-center justify-center shadow-lg">
            <span className="text-3xl">🥈</span>
            <span className="font-bold text-xl text-[#888888]">2</span>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <div className="mb-3">
            <h3 className="font-semibold text-lg text-[#F5F5F5]">
              {first.name}
            </h3>

            <p className="text-sm text-[#F5C518] font-semibold">
              {first.xp} XP
            </p>
          </div>

          <div className="h-44 w-32 bg-[#F5C518] border border-[#F5C518] rounded-t-2xl flex flex-col items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(245,197,24,0.15)]">
            <span className="text-4xl mb-1">🥇</span>
            <span className="text-2xl">1</span>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <div className="mb-3">
            <h3 className="font-semibold text-[#F5F5F5]">{third.name}</h3>

            <p className="text-sm text-[#888888]">
              {third.xp} XP
            </p>
          </div>

          <div className="h-24 w-28 bg-[#1A1A1A] border border-[#2A2A2A] rounded-t-2xl flex flex-col items-center justify-center shadow-md">
            <span className="text-3xl">🥉</span>
            <span className="font-bold text-xl text-[#CD7F32]">3</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {others.map((user, index) => {
          const rank = index + 4;
          const isCurrentUser = user.id === userId;

          return (
            <div
              key={user.id}
              className={`
                flex items-center justify-between
                p-4 rounded-xl
                transition-all duration-300
                ${
                  isCurrentUser
                    ? "bg-[#F5C518]/15 border border-[#F5C518] shadow-[0_0_15px_rgba(245,197,24,0.05)]"
                    : "bg-[#111111] border border-[#2A2A2A] hover:border-[#2A2A2A]/80"
                }
              `}
            >
              <div className="flex items-center gap-4">
                <span className="font-bold text-lg text-[#F5C518]">
                  #{rank}
                </span>

                <span className="text-[#F5F5F5]">{user.name}</span>
              </div>

              <span className="font-semibold text-[#F5C518]">
                {user.xp} XP
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}