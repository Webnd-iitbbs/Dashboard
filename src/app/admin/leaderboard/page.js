import SectionHeader from "@/components/admin-comp/SectionHeader";
import styles from "@/components/admin-comp/styles";

const LEADERBOARD = [
  { rank: 1, name: "Sneha Kumar", xp: 7100, dept: "Frontend", badge: "🏆" },
  { rank: 2, name: "Arjun Sharma", xp: 5833, dept: "Backend", badge: "🥈" },
  { rank: 3, name: "Rahul Das", xp: 3900, dept: "UI/UX", badge: "🥉" },
  { rank: 4, name: "Priya Menon", xp: 4210, dept: "Frontend", badge: "" },
  { rank: 5, name: "Dev Patel", xp: 1200, dept: "Backend", badge: "" },
];

function LeaderboardPage() {
  return (
    <div>
      <SectionHeader title="Leaderboard" />
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {["Global", "Department", "Monthly"].map((t, i) => (
          <button key={t} style={{ ...styles.tabBtn, ...(i === 0 ? styles.tabBtnActive : {}) }}>{t}</button>
        ))}
      </div>
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>{["Rank", "Member", "Department", "Total XP", ""].map(h => (
              <th key={h} style={styles.th}>{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {LEADERBOARD.map((l) => (
              <tr key={l.rank} style={{ ...styles.tr, ...(l.rank === 1 ? { background: "rgba(245,197,24,.05)" } : {}) }}>
                <td style={styles.td}>
                  <span style={{ fontSize: l.rank <= 3 ? 20 : 14, color: l.rank <= 3 ? "#F5C518" : "#555", fontWeight: 700 }}>
                    {l.badge || `#${l.rank}`}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={styles.avatarSm}>{l.name.charAt(0)}</div>
                    <span style={{ color: l.rank === 1 ? "#F5C518" : "#ddd", fontSize: 14, fontWeight: l.rank === 1 ? 700 : 400 }}>{l.name}</span>
                  </div>
                </td>
                <td style={styles.td}><span style={{ color: "#888", fontSize: 13 }}>{l.dept}</span></td>
                <td style={styles.td}><span style={{ color: "#F5C518", fontWeight: 700, fontSize: 15 }}>{l.xp.toLocaleString()}</span></td>
                <td style={styles.td}><button style={styles.miniBtn}>Adjust XP</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardPage;