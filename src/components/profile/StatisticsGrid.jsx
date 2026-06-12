import StatCard from "./StatisticsCard";

export default function StatsGrid() {
  const stats = [
    {
      title: "Total XP",
      value: "4820",
      subtitle: "+340 this week",
    },
    {
      title: "Current Rank",
      value: "#4",
      subtitle: "Up 2 positions",
    },
    {
      title: "Tasks Completed",
      value: "15",
      subtitle: "3 completed this week",
    },
    {
      title: "Competitions Topped",
      value: "5",
      subtitle: "Best UI Awards",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full px-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
        />
      ))}
    </div>
  );
}