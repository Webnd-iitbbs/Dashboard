"use clent";
import SectionHeader from "@/components/admin-comp/SectionHeader";
import styles from "@/components/admin-comp/styles";

function ProfilePage() {
  return (
    <div style={{ maxWidth: 520 }}>
      <SectionHeader title="Profile" />
      <div style={styles.card}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ ...styles.avatarSm, width: 64, height: 64, fontSize: 24 }}>A</div>
          <div>
            <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>Admin User</p>
            <p style={{ fontSize: 13, color: "#F5C518", margin: "3px 0 0" }}>Super Admin</p>
          </div>
        </div>
        {[
          { label: "Email", value: "admin@webnd.com" },
          { label: "Role", value: "Super Admin" },
          { label: "Joined Date", value: "Jan 15, 2025" },
          { label: "Total Actions", value: "1,482" },
          { label: "Last Login", value: "Jun 11, 2026 — 17:14" },
        ].map((row) => (
          <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderBottom: "1px solid #1e1e1e" }}>
            <span style={{ fontSize: 13, color: "#666" }}>{row.label}</span>
            <span style={{ fontSize: 13, color: "#ddd", fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
        <button style={{ ...styles.actionBtn, marginTop: 20, width: "100%" }}>Edit Profile</button>
      </div>
    </div>
  );
}

export default ProfilePage;