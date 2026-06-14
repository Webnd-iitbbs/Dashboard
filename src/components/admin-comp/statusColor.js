const statusColor = (s) => ({
  active: "#22c55e",
  inactive: "#ef4444",
  suspended: "#ef4444",
}[s] ?? "#888");

export default statusColor;