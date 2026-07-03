"use clent";
import SectionHeader from "@/components/admin-comp/SectionHeader";
import styles from "@/components/admin-comp/styles";
import Badge from "@/components/admin-comp/Badge";
import statusColor from "@/components/admin-comp/statusColor";

const MENTORS = [
  { name: "Rajan Verma", members: 18, reviewed: 142, rating: 4.8, status: "active" },
  { name: "Divya Nair", members: 14, reviewed: 98, rating: 4.5, status: "active" },
  { name: "Karthik B.", members: 22, reviewed: 201, rating: 4.9, status: "active" },
  { name: "Meena Pillai", members: 9, reviewed: 54, rating: 4.2, status: "inactive" },
];

function AdminMentorsPage() {
  return (
    <div>
      <SectionHeader title="Mentors" action="+ Add Mentor" />
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>{["Name", "Members", "Tasks Reviewed", "Rating", "Status", "Actions"].map(h => (
              <th key={h} style={styles.th}>{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {MENTORS.map((m) => (
              <tr key={m.name} style={styles.tr}>
                <td style={styles.td}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={styles.avatarSm}>{m.name.charAt(0)}</div>
                    <span style={{ color: "#ddd", fontSize: 14 }}>{m.name}</span>
                  </div>
                </td>
                <td style={styles.td}><span style={{ color: "#F5C518", fontWeight: 700 }}>{m.members}</span></td>
                <td style={styles.td}><span style={{ color: "#ccc" }}>{m.reviewed}</span></td>
                <td style={styles.td}>
                  <span style={{ color: "#F5C518", fontWeight: 700 }}>★ {m.rating}</span>
                </td>
                <td style={styles.td}><Badge label={m.status} color={statusColor(m.status)} /></td>
                <td style={styles.td}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button style={styles.miniBtn}>Assign</button>
                    <button style={{ ...styles.miniBtn, color: "#ef4444", borderColor: "#ef444444" }}>Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminMentorsPage;