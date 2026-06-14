const actIcon = (type) => ({
  task: "ti-checklist",
  member: "ti-users",
  review: "ti-eye",
  xp: "ti-star",
}[type] ?? "ti-point");

export default actIcon;