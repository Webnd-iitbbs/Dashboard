"use client";
import { useState } from "react";
import './admin.css'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { key: "dashboard", label: "Dashboard", icon: "ti-layout-dashboard", href: '/admin/dashboard' },
  { key: "mentors", label: "Mentors", icon: "ti-user-star", href: '/admin/mentors' },
  { key: "members", label: "Members", icon: "ti-users", href: '/admin/members' },
  { key: "leaderboard", label: "Leaderboard", icon: "ti-trophy", href: '/admin/leaderboard' },
  { key: "profile", label: "Profile", icon: "ti-user-circle", href: '/admin/profile' },
];



export default function AdminDashboard({children}) {
  const pathname = usePathname();
  const isActive = (path) => pathname.startsWith(path);
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentNav = NAV.find((n) => isActive(n.href));

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      <div className="wd-root">
        {/* Sidebar */}
        <aside className={`wd-sidebar${sidebarOpen ? "" : " collapsed"}`}>
          <div className="wd-brand">
            <span className="wd-brand-name-full">WebnD</span>
            <span className="wd-brand-sub">Admin</span>
          </div>

          <div className="wd-nav-scroll">
            {NAV.map(({ key, label, icon, href }) => (
              <Link
                key={key}
                className={`wd-nav-btn${isActive(href) ? " active" : ""}`}
                onClick={() => setActive(key)}
                href={href}
              >
                <i className={`ti ${icon}`} aria-hidden="true" />
                <span className="wd-nav-label">{label}</span>
              </Link>
            ))}
          </div>

          <div className="wd-sidebar-foot">
            <div className="wd-user-row">
              <div className="wd-user-dot">A</div>
              <div className="wd-user-info">
                <b>Admin</b>
                <p>Super Admin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main area */}
        <div className="wd-main">
          {/* Topbar */}
          <div className="wd-topbar">
            <button className="wd-toggle" onClick={() => setSidebarOpen((v) => !v)} aria-label="Toggle sidebar">
              <i className="ti ti-menu-2" aria-hidden="true" />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
              <i className={`ti ${currentNav?.icon}`} style={{ color: "#F5C518", fontSize: 17 }} aria-hidden="true" />
              <span className="wd-topbar-title">{currentNav?.label}</span>
            </div>
            <div className="wd-search-wrap">
              <i className="ti ti-search" aria-hidden="true" />
              <input className="wd-search" placeholder="Search…" />
            </div>
            <button style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center" }}>
              <i className="ti ti-bell" aria-hidden="true" />
            </button>
          </div>

          {/* Page content */}
          <div className="wd-content">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}