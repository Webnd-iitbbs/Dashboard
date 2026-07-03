"use clent";
import SectionHeader from "@/components/admin-comp/SectionHeader";
import styles from "@/components/admin-comp/styles";
import Badge from "@/components/admin-comp/Badge";

const MEMBERS = [
  { name: "Arjun Sharma", mentor: "Rajan Verma", xp: 5833, tasks: 24, status: "active" },
  { name: "Priya Menon", mentor: "Divya Nair", xp: 4210, tasks: 18, status: "active" },
  { name: "Rahul Das", mentor: "Karthik B.", xp: 3900, tasks: 15, status: "active" },
  { name: "Sneha Kumar", mentor: "Rajan Verma", xp: 7100, tasks: 31, status: "active" },
  { name: "Dev Patel", mentor: "Meena Pillai", xp: 1200, tasks: 6, status: "suspended" },
];


const statusColor = (s) => ({
  active: "#22c55e",
  inactive: "#ef4444",
  suspended: "#ef4444",
}[s] ?? "#888");

function AdminMembersPage() {
  return (
    <div>
      <SectionHeader title="Members" action="+ Add Member" />
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>{["Member", "Mentor", "XP", "Tasks Done", "Status", "Actions"].map(h => (
              <th key={h} style={styles.th}>{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {MEMBERS.map((m) => (
              <tr key={m.name} style={styles.tr}>
                <td style={styles.td}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={styles.avatarSm}>{m.name.charAt(0)}</div>
                    <span style={{ color: "#ddd", fontSize: 14 }}>{m.name}</span>
                  </div>
                </td>
                <td style={styles.td}><span style={{ color: "#888", fontSize: 13 }}>{m.mentor}</span></td>
                <td style={styles.td}><span style={{ color: "#F5C518", fontWeight: 700 }}>{m.xp.toLocaleString()}</span></td>
                <td style={styles.td}><span style={{ color: "#ccc" }}>{m.tasks}</span></td>
                <td style={styles.td}><Badge label={m.status} color={statusColor(m.status)} /></td>
                <td style={styles.td}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button style={styles.miniBtn}>View</button>
                    <button style={{ ...styles.miniBtn, color: "#ef4444", borderColor: "#ef444444" }}>
                      {m.status === "suspended" ? "Activate" : "Suspend"}
                    </button>
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

export default AdminMembersPage;