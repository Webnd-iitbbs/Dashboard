"use client"
import { useState } from "react";
import SectionHeader from "@/components/admin-comp/SectionHeader";
import styles from "@/components/admin-comp/styles";

const STATS = [
  { label: "Total Members", value: "1,284", sub: "+38 this week", icon: "ti-users" },
  { label: "Total Mentors", value: "47", sub: "3 pending approval", icon: "ti-user-star" },
  { label: "Top Performer", value: "Sneha", sub: "7,100 XP", icon: "ti-trophy" },
  { label: "Weekly XP Growth", value: "+8,420", sub: "vs last week", icon: "ti-trending-up" },
];

const ACTIVITY = [
  { who: "Arjun S.", action: "completed Task-12", when: "2 min ago", type: "task" },
  { who: "Priya M.", action: "joined under Mentor Divya", when: "14 min ago", type: "member" },
  { who: "Mentor Raj", action: "reviewed 4 submissions", when: "31 min ago", type: "review" },
  { who: "Sneha K.", action: "reached Level 5", when: "3 hr ago", type: "xp" },
];


const actIcon = (type) => ({
  task: "ti-checklist",
  member: "ti-users",
  review: "ti-eye",
  xp: "ti-star",
}[type] ?? "ti-point");


function AdminDashboardPage() {
  return (
    <div>
      <div style={styles.statsGrid}>
        {STATS.map((s) => (
          <div key={s.label} style={styles.statCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <p style={styles.statLabel}>{s.label}</p>
              <i className={`ti ${s.icon}`} style={{ fontSize: 18, color: "#F5C518", opacity: 0.7 }} aria-hidden="true" />
            </div>
            <p style={styles.statVal}>{s.value}</p>
            <p style={styles.statSub}>{s.sub}</p>
          </div>
        ))}
      </div>

      <div style={styles.twoCol}>
        <div style={styles.card}>
          <SectionHeader title="Recent Activity" />
          {ACTIVITY.map((a, i) => (
            <div key={i} style={styles.actRow}>
              <div style={styles.actIconWrap}>
                <i className={`ti ${actIcon(a.type)}`} style={{ fontSize: 14, color: "#F5C518" }} aria-hidden="true" />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 13, color: "#ddd", fontWeight: 500 }}>{a.who} </span>
                <span style={{ fontSize: 13, color: "#888" }}>{a.action}</span>
              </div>
              <span style={{ fontSize: 11, color: "#555", flexShrink: 0 }}>{a.when}</span>
            </div>
          ))}
        </div>

        <div style={styles.card}>
          <SectionHeader title="Quick Stats" />
          {[
            { label: "Task Completion Rate", val: "74%", bar: 74 },
            { label: "Mentor Satisfaction", val: "91%", bar: 91 },
            { label: "Active Members (30d)", val: "68%", bar: 68 },
            { label: "Competition Joined", val: "43%", bar: 43 },
          ].map((q) => (
            <div key={q.label} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 12, color: "#888" }}>{q.label}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#F5C518" }}>{q.val}</span>
              </div>
              <div style={{ height: 5, background: "#2a2a2a", borderRadius: 4 }}>
                <div style={{ height: 5, width: `${q.bar}%`, background: "#F5C518", borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;