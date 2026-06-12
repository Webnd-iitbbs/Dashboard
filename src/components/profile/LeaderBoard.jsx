export default function Leaderboard() {
  const leaders = [
    { rank: 1, name: "Rahul Sharma", xp: 6520 },
    { rank: 2, name: "Shradha Kapoor", xp: 5980 },
    { rank: 3, name: "Aryan Gupta", xp: 5400 },
    { rank: 4, name: "Kartik Shah", xp: 4820, currentUser: true },
    { rank: 5, name: "Aman shaw", xp: 4500 },
    { rank: 6, name: "Nehali Gupta", xp: 4200 },
  ];

  const podium = leaders.slice(0, 3);
  const others = leaders.slice(3);

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 m-7">
      <div>
        <h2 className="text-3xl font-bold text-[#F5C518] mb-8 flex flex-col">🏆 Leaderboard</h2>
        <p className="text-center my-3 md:text-left">Live rankings based on XP</p>
      </div>
      <div className="flex md:flex-row flex-col justify-center md:items-end items-center gap-4 mb-10">
        
        <div className="text-center">
          <div className="mb-3">
            <h3 className="font-semibold">{podium[1].name}</h3>
            <p className="text-sm text-[#888888]">
              {podium[1].xp} XP
            </p>
          </div>

          <div className="h-32 w-28 bg-[#2A2A2A] rounded-t-2xl flex flex-col items-center justify-center">
            <span className="text-3xl">🥈</span>
            <span className="font-bold text-xl">2</span>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-3">
            <h3 className="font-semibold text-lg">
              {podium[0].name}
            </h3>

            <p className="text-sm text-[#F5C518]">
              {podium[0].xp} XP
            </p>
          </div>

          <div className="h-48 w-32 bg-[#F5C518] rounded-t-2xl flex flex-col items-center justify-center text-black">
            <span className="text-4xl">🥇</span>
            <span className="font-bold text-2xl">1</span>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-3">
            <h3 className="font-semibold">{podium[2].name}</h3>

            <p className="text-sm text-[#888888]">
              {podium[2].xp} XP
            </p>
          </div>

          <div className="h-24 w-28 bg-[#2A2A2A] rounded-t-2xl flex flex-col items-center justify-center">
            <span className="text-3xl">🥉</span>
            <span className="font-bold text-xl">3</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {others.map((user) => (
          <div
            key={user.rank}
            className={`
              flex items-center justify-between
              p-4 rounded-xl
              transition-all
              ${
                user.currentUser
                  ? "bg-[#F5C518]/10 border border-[#F5C518]"
                  : "bg-[#111111] border border-[#2A2A2A]"
              }
            `}
          >
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg">
                #{user.rank}
              </span>

              <span>{user.name}</span>
            </div>

            <span className="font-semibold text-[#F5C518]">
              {user.xp} XP
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}