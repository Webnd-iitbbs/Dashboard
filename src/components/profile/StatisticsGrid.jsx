import StatCard from "./StatisticsCard";

export default function StatsGrid({ stats }) {
  if (!Array.isArray(stats)) return null;

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