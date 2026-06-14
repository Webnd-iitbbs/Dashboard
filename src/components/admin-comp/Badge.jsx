function Badge({ label, color }) {
  return (
    <span style={{
      background: color + "22", color, border: `1px solid ${color}55`,
      fontSize: 11, fontWeight: 700, padding: "2px 9px",
      borderRadius: 20, textTransform: "capitalize",
    }}>{label}</span>
  );
}
export default Badge;