const styles = {
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))",
    gap: 12,
    marginBottom: 16,
  },
  statCard: {
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderTop: "2px solid #F5C518",
    borderRadius: 10,
    padding: "14px 16px",
  },
  statLabel: { fontSize: 11, color: "#666", textTransform: "uppercase", letterSpacing: ".4px", margin: 0 },
  statVal: { fontSize: 26, fontWeight: 800, color: "#F5C518", margin: "6px 0 3px" },
  statSub: { fontSize: 11, color: "#444", margin: 0 },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 300px",
    gap: 14,
  },
  card: {
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: 10,
    padding: "18px 20px",
    marginBottom: 0,
  },
  actRow: {
    display: "flex", alignItems: "center", gap: 12,
    padding: "9px 0", borderBottom: "1px solid #1e1e1e",
  },
  actIconWrap: {
    width: 28, height: 28, borderRadius: "50%",
    background: "rgba(245,197,24,.1)",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },
  tableWrap: { overflowX: "auto", borderRadius: 10, border: "1px solid #2a2a2a" },
  table: { width: "100%", borderCollapse: "collapse", background: "#1a1a1a" },
  th: {
    fontSize: 11, fontWeight: 700, color: "#555", textTransform: "uppercase",
    letterSpacing: ".5px", padding: "11px 16px", borderBottom: "1px solid #222",
    textAlign: "left", whiteSpace: "nowrap", background: "#161616",
  },
  tr: { borderBottom: "1px solid #1e1e1e", transition: "background .1s" },
  td: { padding: "11px 16px", fontSize: 13, verticalAlign: "middle" },
  avatarSm: {
    width: 30, height: 30, borderRadius: "50%",
    background: "rgba(245,197,24,.15)", color: "#F5C518",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 700, fontSize: 13, flexShrink: 0,
  },
  actionBtn: {
    background: "#F5C518", color: "#111", border: "none",
    padding: "7px 16px", borderRadius: 7, fontSize: 13,
    fontWeight: 700, cursor: "pointer",
  },
  miniBtn: {
    background: "transparent", color: "#888",
    border: "1px solid #333", padding: "4px 10px",
    borderRadius: 5, fontSize: 12, cursor: "pointer",
  },
  tabBtn: {
    background: "transparent", color: "#666",
    border: "1px solid #2a2a2a", padding: "6px 16px",
    borderRadius: 7, fontSize: 13, cursor: "pointer",
  },
  tabBtnActive: {
    background: "rgba(245,197,24,.12)", color: "#F5C518",
    borderColor: "#F5C51844",
  },
};

export default styles;