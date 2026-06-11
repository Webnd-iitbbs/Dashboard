'use client';

import { useState, useEffect, useRef } from "react";
import SplashCursor from "@/components/animations/SplashCursor";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "./global.css";


// ─── Logo SVG extracted from brand identity (yellow play/forward arrow mark) ───
const LogoMark = ({ size = 40, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bold geometric "play" arrow — WebnD mark */}
    <polygon points="8,8 8,92 60,92 92,50 60,8" fill="#0D0D0D" stroke="#F5C518" strokeWidth="8" />
    <polygon points="28,28 28,72 55,72 75,50 55,28" fill="#F5C518" />
    <polygon points="38,38 38,62 52,62 64,50 52,38" fill="#0D0D0D" />
  </svg>
);

// ─── Animated counter hook ───
function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Stats data ───
const STATS = [
  { label: "Active Members", value: 120, suffix: "+" },
  { label: "Projects Shipped", value: 47, suffix: "" },
  { label: "Competitions Run", value: 18, suffix: "" },
  { label: "Years Building", value: 6, suffix: "" },
];

// ─── Features / Roles ───
const ROLES = [
  {
    title: "Admin",
    tag: "MANAGE",
    color: "#F5C518",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    features: ["Manage Users", "Approve Mentors", "Assign Students", "Create Competitions", "View Analytics"],
  },
  {
    title: "Mentor",
    tag: "GUIDE",
    color: "#C49A00",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    features: ["Manage Students", "Create Tasks", "Review Submissions", "Answer Doubts", "Track Progress"],
  },
  {
    title: "Member",
    tag: "BUILD",
    color: "#F5C518",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    features: ["Complete Tasks", "Submit Work", "View Leaderboards", "Access Study Materials", "Ask Doubts", "Join Competitions"],
  },
];

// ─── Leaderboard preview ───
const LB_DATA = [
  { rank: "01", initials: "AK", name: "Arjun Kumar", pts: "5,820", pct: 100 },
  { rank: "02", initials: "PS", name: "Priya S.", pts: "4,990", pct: 85 },
  { rank: "03", initials: "DM", name: "Dev Mishra", pts: "4,210", pct: 72 },
  { rank: "04", initials: "SR", name: "Sneha R.", pts: "3,870", pct: 66 },
];

// ─── Floating activity cards ───
const ACTIVITY_CARDS = [
  { icon: "🏆", text: "UI Sprint competition live now", time: "Just now" },
  { icon: "✅", text: "Arjun submitted CSS Battle task", time: "2 min ago" },
  { icon: "🎯", text: "New task assigned: API Design", time: "15 min ago" },
  { icon: "🚀", text: "Dev ranked up to #3", time: "1 hr ago" },
];

// ─── Main Component ───
export default function WebnDLanding() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Intersection Observer for counter animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle activity cards
  useEffect(() => {
    const t = setInterval(() => setCardIndex((i) => (i + 1) % ACTIVITY_CARDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const c0 = useCountUp(STATS[0].value, 1600, statsVisible);
  const c1 = useCountUp(STATS[1].value, 1400, statsVisible);
  const c2 = useCountUp(STATS[2].value, 1200, statsVisible);
  const c3 = useCountUp(STATS[3].value, 1000, statsVisible);
  const counts = [c0, c1, c2, c3];

  return (
    <div
      style={{
        fontFamily: "'DM Mono', 'Fira Code', 'Courier New', monospace",
        background: "#0D0D0D",
        color: "#F5F5F5",
        overflowX: "hidden",
      }}
    >
        <SplashCursor/>
      {/* ─── GLOBAL STYLES ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --yellow: #F5C518;
          --yellow-dark: #C49A00;
          --black: #0D0D0D;
          --charcoal: #1A1A1A;
          --surface: #111111;
          --gray: #2A2A2A;
          --muted: #888888;
          --white: #F5F5F5;
        }

        .display-font { font-family: 'Syne', sans-serif; }
        .mono-font { font-family: 'DM Mono', monospace; }

        .btn-primary {
          background: var(--yellow);
          color: var(--black);
          border: none;
          padding: 12px 28px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: background 0.15s, transform 0.12s;
          font-family: 'Syne', sans-serif;
          text-transform: uppercase;
        }
        .btn-primary:hover { background: var(--yellow-dark); }
        .btn-primary:active { transform: scale(0.97); }

        .btn-outline {
          background: transparent;
          color: var(--yellow);
          border: 1px solid var(--yellow);
          padding: 11px 28px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, transform 0.12s;
          font-family: 'Syne', sans-serif;
          text-transform: uppercase;
        }
        .btn-outline:hover { background: #F5C51815; }
        .btn-outline:active { transform: scale(0.97); }

        .wd-card {
          background: #111;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          padding: 20px;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .wd-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #F5C518;
        }
        .wd-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(245,197,24,0.12);
        }

        .nav-link {
          color: #888;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.15s;
          font-family: 'DM Mono', monospace;
        }
        .nav-link:hover { color: #F5C518; }

        .role-tab {
          padding: 8px 20px;
          border-radius: 6px;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'DM Mono', monospace;
          border: 1px solid transparent;
        }
        .role-tab.active {
          background: #F5C51820;
          border-color: #F5C518;
          color: #F5C518;
        }
        .role-tab.inactive {
          background: #1A1A1A;
          color: #888;
          border-color: #2a2a2a;
        }
        .role-tab.inactive:hover {
          border-color: #F5C51840;
          color: #F5F5F5;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #1e1e1e;
          font-size: 13px;
          color: #ccc;
          font-family: 'DM Mono', monospace;
        }
        .feature-item:last-child { border-bottom: none; }

        .lb-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: #0D0D0D;
          border-radius: 8px;
          border: 1px solid #1e1e1e;
          margin-bottom: 6px;
          animation: slideInLeft 0.4s ease both;
        }

        @keyframes slideInLeft {
          from { transform: translateX(-16px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .lb-rank { font-size: 13px; font-weight: 500; width: 24px; color: #888; font-family: 'DM Mono', monospace; }
        .lb-rank.gold { color: #F5C518; }
        .lb-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 500;
          background: #2a2a2a; color: #F5C518;
          font-family: 'Syne', sans-serif;
        }
        .lb-name { flex: 1; font-size: 13px; color: #F5F5F5; font-family: 'DM Mono', monospace; }
        .lb-pts { font-size: 13px; font-weight: 500; color: #F5C518; font-family: 'DM Mono', monospace; }
        .lb-bar-wrap { height: 3px; background: #222; border-radius: 2px; width: 56px; }
        .lb-bar { height: 3px; background: #F5C518; border-radius: 2px; transition: width 1s ease; position: relative; overflow: hidden; }
        .lb-bar::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          to { left: 200%; }
        }

        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,197,24,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(245,197,24,0); }
        }

        .activity-card {
          animation: fadeSlideUp 0.4s ease both;
        }
        @keyframes fadeSlideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .hero-grid-line {
          position: absolute;
          background: linear-gradient(to bottom, transparent, #F5C51808, transparent);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 500;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.06em;
        }
        .badge-yellow { background: #F5C518; color: #0D0D0D; }
        .badge-outline { border: 1px solid #F5C518; color: #F5C518; background: transparent; }
        .badge-muted { background: #2a2a2a; color: #888; }

        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #F5C518;
          font-family: 'DM Mono', monospace;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(20px);
          animation: reveal 0.6s ease forwards;
        }
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }

        .marquee-track {
          display: flex;
          gap: 48px;
          animation: marquee 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .hero-title-line {
          overflow: hidden;
        }
        .hero-title-word {
          display: inline-block;
          animation: wordReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes wordReveal {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        footer a { color: #888; text-decoration: none; transition: color 0.15s; }
        footer a:hover { color: #F5C518; }
      `}</style>

      {/* ═══════════════════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════════════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: "rgba(13,13,13,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1e1e1e",
          padding: "0 40px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* <LogoMark size={32} /> */}
          <Image src="/logo.png" alt="logo" width={30} height={30}/>
          <span
            className="display-font"
            style={{ fontSize: "16px", fontWeight: 700, color: "#F5C518", letterSpacing: "0.04em" }}
          >
            WebnD
          </span>
          <span
            className="mono-font"
            style={{ fontSize: "10px", color: "#555", letterSpacing: "0.08em", marginLeft: "4px" }}
          >
            / IIT BBS
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden-mobile">
          <a href="#features" className="nav-link">Platform</a>
          <a href="#roles" className="nav-link">Roles</a>
          <a href="#leaderboard" className="nav-link">Leaderboard</a>
          <a href="#about" className="nav-link">About</a>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Link href="/login">
            <button className="btn-outline" style={{ padding: "8px 18px", fontSize: "12px" }}>
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="btn-primary" style={{ padding: "8px 18px", fontSize: "12px" }}>
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "100vh",
          paddingTop: "60px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "60px 40px 80px",
        }}
      >
        {/* Background grid lines */}
        {[15, 35, 55, 75, 95].map((p, i) => (
          <div
            key={i}
            className="hero-grid-line"
            style={{
              left: `${p}%`,
              top: 0,
              bottom: 0,
              width: "1px",
            }}
          />
        ))}

        {/* Large background text */}
        <div
          className="display-font"
          style={{
            position: "absolute",
            bottom: "-20px",
            right: "-20px",
            fontSize: "clamp(80px, 18vw, 240px)",
            fontWeight: 800,
            color: "#F5C51806",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          WebnD
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          
          {/* Left: Hero Copy */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <span className="badge badge-outline">
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F5C518", display: "inline-block" }} />
                IIT Bhubaneswar · S&amp;T Council
              </span>
            </div>

            <div className="hero-title-line">
              <h1
                className="display-font hero-title-word"
                style={{
                  fontSize: "clamp(42px, 6vw, 80px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "#F5F5F5",
                  letterSpacing: "-0.02em",
                  animationDelay: "0.1s",
                }}
              >
                Where
              </h1>
            </div>
            <div className="hero-title-line">
              <h1
                className="display-font hero-title-word"
                style={{
                  fontSize: "clamp(42px, 6vw, 80px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "#F5C518",
                  letterSpacing: "-0.02em",
                  animationDelay: "0.2s",
                }}
              >
                Builders
              </h1>
            </div>
            <div className="hero-title-line">
              <h1
                className="display-font hero-title-word"
                style={{
                  fontSize: "clamp(42px, 6vw, 80px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "#F5F5F5",
                  letterSpacing: "-0.02em",
                  animationDelay: "0.3s",
                }}
              >
                Connect.
              </h1>
            </div>

            <p
              className="mono-font"
              style={{
                fontSize: "14px",
                color: "#888",
                lineHeight: 1.8,
                maxWidth: "420px",
                marginTop: "24px",
                marginBottom: "36px",
                animation: "fadeSlideUp 0.6s 0.5s ease both",
              }}
            >
              Web &amp; Design Society of IIT Bhubaneswar — one platform for members to learn, mentors to guide, and admins to orchestrate.
            </p>

            <div
              style={{ display: "flex", gap: "12px", flexWrap: "wrap", animation: "fadeSlideUp 0.6s 0.6s ease both" }}
            >
              <Link href="/register">
                <button className="btn-primary">Join the Society</button>
              </Link>
              <Link href="/platform">
                <button className="btn-outline">Explore Platform</button>
              </Link>
            </div>

            {/* Mini stat strip */}
            <div
              style={{
                display: "flex",
                gap: "28px",
                marginTop: "44px",
                paddingTop: "28px",
                borderTop: "1px solid #1e1e1e",
                animation: "fadeSlideUp 0.6s 0.7s ease both",
              }}
            >
              {[
                { n: "120+", l: "Members" },
                { n: "47", l: "Projects" },
                { n: "#1", l: "Web Society" },
              ].map((s, i) => (
                <div key={i}>
                  <div
                    className="display-font"
                    style={{ fontSize: "22px", fontWeight: 700, color: "#F5C518" }}
                  >
                    {s.n}
                  </div>
                  <div className="mono-font" style={{ fontSize: "11px", color: "#888", letterSpacing: "0.08em" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Preview Card */}
          <div style={{ position: "relative" }}>
            {/* Main preview card */}
            <div
              style={{
                background: "#111",
                border: "1px solid #2a2a2a",
                borderRadius: "16px",
                padding: "20px",
                position: "relative",
                animation: "fadeSlideUp 0.7s 0.4s ease both",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid #1e1e1e",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  {["#ff5f57", "#ffbd2e", "#28ca41"].map((c, i) => (
                    <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <span className="mono-font" style={{ fontSize: "11px", color: "#555", letterSpacing: "0.08em" }}>
                  member_dashboard.jsx
                </span>
                <div style={{ width: "24px" }} />
              </div>

              {/* Stat cards row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "16px" }}>
                {[
                  { label: "Total XP", value: "4,820", sub: "+340 this week" },
                  { label: "Tasks Done", value: "12", sub: "3 pending review" },
                  { label: "Rank", value: "#4", sub: "↑2 from last week" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="pulse-glow"
                    style={{
                      background: "#0D0D0D",
                      border: "1px solid #2a2a2a",
                      borderRadius: "8px",
                      padding: "10px 12px",
                      position: "relative",
                      overflow: "hidden",
                      animationDelay: `${i * 0.7}s`,
                    }}
                  >
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "#F5C518" }} />
                    <div className="mono-font" style={{ fontSize: "10px", color: "#888", marginBottom: "4px" }}>
                      {s.label}
                    </div>
                    <div
                      className="display-font"
                      style={{ fontSize: "18px", fontWeight: 700, color: "#F5C518" }}
                    >
                      {s.value}
                    </div>
                    <div className="mono-font" style={{ fontSize: "10px", color: "#555", marginTop: "2px" }}>
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Leaderboard preview */}
              <div
                className="section-label"
                style={{ marginBottom: "10px", fontSize: "10px" }}
              >
                Live Leaderboard
              </div>
              {LB_DATA.map((r, i) => (
                <div key={i} className="lb-item" style={{ animationDelay: `${0.6 + i * 0.08}s` }}>
                  <span className={`lb-rank ${i === 0 ? "gold" : ""}`}>{r.rank}</span>
                  <div className="lb-avatar">{r.initials}</div>
                  <span className="lb-name">{r.name}</span>
                  <div className="lb-bar-wrap">
                    <div className="lb-bar" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="lb-pts">{r.pts}</span>
                </div>
              ))}
            </div>

            {/* Floating activity card */}
            <div
              key={cardIndex}
              className="activity-card"
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-30px",
                background: "#1A1A1A",
                border: "1px solid #2a2a2a",
                borderRadius: "10px",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                minWidth: "240px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <span style={{ fontSize: "18px" }}>{ACTIVITY_CARDS[cardIndex].icon}</span>
              <div>
                <div className="mono-font" style={{ fontSize: "11px", color: "#F5F5F5" }}>
                  {ACTIVITY_CARDS[cardIndex].text}
                </div>
                <div className="mono-font" style={{ fontSize: "10px", color: "#555", marginTop: "2px" }}>
                  {ACTIVITY_CARDS[cardIndex].time}
                </div>
              </div>
            </div>

            {/* Top-right floating badge */}
            <div
              style={{
                position: "absolute",
                top: "-16px",
                right: "-20px",
                background: "#F5C518",
                color: "#0D0D0D",
                borderRadius: "8px",
                padding: "8px 14px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 4px 20px rgba(245,197,24,0.3)",
              }}
            >
              <span style={{ fontSize: "14px" }}>🔥</span>
              <span className="display-font" style={{ fontSize: "12px", fontWeight: 700 }}>
                UI Sprint LIVE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MARQUEE TICKER
      ═══════════════════════════════════════════════════ */}
      <div
        style={{
          borderTop: "1px solid #1e1e1e",
          borderBottom: "1px solid #1e1e1e",
          background: "#0D0D0D",
          padding: "12px 0",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="marquee-track">
            {[
              "WEB DEVELOPMENT", "UI/UX DESIGN", "DEVOPS",
              "COMPETITIONS", "OPEN SOURCE", "FULL STACK",
              "MENTORSHIP", "IIT BHUBANESWAR", "TYPESCRIPT",
              "WEB DEVELOPMENT", "UI/UX DESIGN", "DEVOPS",
              "COMPETITIONS", "OPEN SOURCE", "FULL STACK",
              "MENTORSHIP", "IIT BHUBANESWAR", "TYPESCRIPT",
            ].map((item, i) => (
              <span
                key={i}
                className="mono-font"
                style={{
                  fontSize: "11px",
                  color: i % 3 === 0 ? "#F5C518" : "#444",
                  letterSpacing: "0.14em",
                }}
              >
                {item}
                <span style={{ color: "#F5C518", margin: "0 24px" }}>▶</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          STATS SECTION
      ═══════════════════════════════════════════════════ */}
      <section ref={statsRef} style={{ padding: "80px 40px", borderBottom: "1px solid #1e1e1e" }} id="features">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "#1e1e1e",
              border: "1px solid #1e1e1e",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#0D0D0D",
                  padding: "40px 32px",
                  textAlign: "center",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#111")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#0D0D0D")}
              >
                <div
                  className="display-font"
                  style={{
                    fontSize: "clamp(36px, 4vw, 56px)",
                    fontWeight: 800,
                    color: "#F5C518",
                    lineHeight: 1,
                  }}
                >
                  {counts[i]}
                  {s.suffix}
                </div>
                <div
                  className="mono-font"
                  style={{
                    fontSize: "11px",
                    color: "#888",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "8px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ROLES SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 40px" }} id="roles">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "48px" }}>
            <div className="section-label" style={{ marginBottom: "12px" }}>
              Platform Roles
            </div>
            <h2
              className="display-font"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              One Platform,{" "}
              <span style={{ color: "#F5C518" }}>Three Dimensions</span>
            </h2>
            <p
              className="mono-font"
              style={{ color: "#888", fontSize: "13px", marginTop: "12px", maxWidth: "480px", lineHeight: 1.8 }}
            >
              Whether you&apos;re learning the ropes, shaping the future, or running the show — the dashboard adapts to your role.
            </p>
          </div>

          {/* Role tabs */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
            {ROLES.map((r, i) => (
              <button
                key={i}
                className={`role-tab ${activeTab === i ? "active" : "inactive"}`}
                onClick={() => setActiveTab(i)}
              >
                {r.tag} — {r.title}
              </button>
            ))}
          </div>

          {/* Role content */}
          <div
            key={activeTab}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              animation: "fadeSlideUp 0.4s ease both",
            }}
          >
            {/* Left: Feature list */}
            <div
              className="wd-card"
              style={{ padding: "32px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div
                  style={{
                    color: "#F5C518",
                    width: "40px",
                    height: "40px",
                    background: "#F5C51815",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {ROLES[activeTab].icon}
                </div>
                <div>
                  <div className="display-font" style={{ fontSize: "20px", fontWeight: 700, color: "#F5F5F5" }}>
                    {ROLES[activeTab].title}
                  </div>
                  <div className="mono-font" style={{ fontSize: "11px", color: "#888", letterSpacing: "0.08em" }}>
                    {ROLES[activeTab].tag} MODE
                  </div>
                </div>
              </div>

              {ROLES[activeTab].features.map((f, i) => (
                <div key={i} className="feature-item" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#F5C518",
                      flexShrink: 0,
                    }}
                  />
                  {f}
                </div>
              ))}
            </div>

            {/* Right: Role visual card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Notification preview */}
              {[
                activeTab === 0
                  ? { icon: "👥", text: "3 new user registrations pending approval", time: "now" }
                  : activeTab === 1
                  ? { icon: "📝", text: "Priya submitted the API Design task", time: "just now" }
                  : { icon: "🎯", text: "New task assigned: CSS Battle Round 2", time: "just now" },
                activeTab === 0
                  ? { icon: "📊", text: "Society analytics updated — 12% XP growth this week", time: "2 hr ago" }
                  : activeTab === 1
                  ? { icon: "❓", text: "Arjun asked: 'How to handle CORS in Express?'", time: "5 min ago" }
                  : { icon: "🏆", text: "You moved up to rank #4 on the leaderboard!", time: "1 hr ago" },
              ].map((n, i) => (
                <div
                  key={i}
                  style={{
                    background: "#111",
                    border: "1px solid #2a2a2a",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: i === 0 ? "#F5C518" : "#2a2a2a",
                      marginTop: "4px",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div className="mono-font" style={{ fontSize: "12px", color: "#F5F5F5" }}>
                      {n.text}
                    </div>
                    <div className="mono-font" style={{ fontSize: "10px", color: "#555", marginTop: "4px" }}>
                      {n.time}
                    </div>
                  </div>
                  <span style={{ fontSize: "16px" }}>{n.icon}</span>
                </div>
              ))}

              {/* Progress bar card */}
              <div className="wd-card" style={{ padding: "20px" }}>
                <div
                  className="mono-font"
                  style={{ fontSize: "11px", color: "#888", marginBottom: "12px", letterSpacing: "0.08em" }}
                >
                  {activeTab === 0 ? "SOCIETY PROGRESS" : activeTab === 1 ? "MENTEE PROGRESS" : "YOUR PROGRESS"}
                </div>
                {[
                  { label: "Web Dev", pct: 72 },
                  { label: "Design", pct: 58 },
                  { label: "DevOps", pct: 34 },
                ].map((p, i) => (
                  <div key={i} style={{ marginBottom: "12px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "4px",
                      }}
                    >
                      <span className="mono-font" style={{ fontSize: "11px", color: "#888" }}>
                        {p.label}
                      </span>
                      <span
                        className="mono-font"
                        style={{ fontSize: "11px", color: "#F5C518" }}
                      >
                        {p.pct}%
                      </span>
                    </div>
                    <div
                      style={{ height: "4px", background: "#1e1e1e", borderRadius: "2px", overflow: "hidden" }}
                    >
                      <div
                        className="lb-bar"
                        style={{ width: `${p.pct}%`, height: "4px" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LEADERBOARD SECTION
      ═══════════════════════════════════════════════════ */}
      <section
        id="leaderboard"
        style={{
          padding: "80px 40px",
          background: "#0A0A0A",
          borderTop: "1px solid #1e1e1e",
          borderBottom: "1px solid #1e1e1e",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          {/* Left copy */}
          <div>
            <div className="section-label" style={{ marginBottom: "12px" }}>
              Gamified Learning
            </div>
            <h2
              className="display-font"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "20px" }}
            >
              Compete.<br />
              <span style={{ color: "#F5C518" }}>Level Up.</span><br />
              Ship.
            </h2>
            <p
              className="mono-font"
              style={{ color: "#888", fontSize: "13px", lineHeight: 1.8, marginBottom: "32px", maxWidth: "380px" }}
            >
              Earn XP for every task you complete, submission you make, and competition you enter. Climb the leaderboard. Prove yourself.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "⚡", text: "XP for every completed task" },
                { icon: "🏆", text: "Weekly &amp; seasonal competitions" },
                { icon: "📈", text: "Real-time rank tracking" },
                { icon: "🎖️", text: "Skill badges &amp; certifications" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "16px" }}>{item.icon}</span>
                  <span
                    className="mono-font"
                    style={{ fontSize: "13px", color: "#ccc" }}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Leaderboard card */}
          <div className="wd-card" style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <span className="section-label" style={{ fontSize: "10px" }}>
                Top Members · This Month
              </span>
              <span className="badge badge-yellow">Live</span>
            </div>

            {LB_DATA.map((r, i) => (
              <div
                key={i}
                className="lb-item"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  borderColor: i === 0 ? "#F5C51830" : "#1e1e1e",
                  background: i === 0 ? "#F5C51808" : "#0D0D0D",
                }}
              >
                <span className={`lb-rank ${i === 0 ? "gold" : ""}`}>{r.rank}</span>
                <div
                  className="lb-avatar"
                  style={{
                    border: i === 0 ? "1px solid #F5C518" : "1px solid #2a2a2a",
                  }}
                >
                  {r.initials}
                </div>
                <span className="lb-name">{r.name}</span>
                <div className="lb-bar-wrap">
                  <div className="lb-bar" style={{ width: `${r.pct}%` }} />
                </div>
                <span className="lb-pts">{r.pts}</span>
              </div>
            ))}

            <div
              className="mono-font"
              style={{
                textAlign: "center",
                marginTop: "16px",
                fontSize: "11px",
                color: "#555",
                paddingTop: "12px",
                borderTop: "1px solid #1e1e1e",
              }}
            >
              156 members ranked · updates every 5 min
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT / WHAT IS WEBND
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 40px" }} id="about">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "start" }}>
            {/* Left */}
            <div>
              <div className="section-label" style={{ marginBottom: "12px" }}>
                About WebnD
              </div>
              <h2
                className="display-font"
                style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                The Society Behind IIT BBS&apos;s Digital Face
              </h2>
            </div>

            {/* Right */}
            <div>
              <p
                className="mono-font"
                style={{ color: "#888", fontSize: "13px", lineHeight: 1.9, marginBottom: "24px" }}
              >
                Web &amp; Design Society is one of the largest technical societies at IIT Bhubaneswar, operating under the Science and Technology Council. We manage and design all institute websites, train students in web development and design, and build the visual identity of every major event.
              </p>
              <p
                className="mono-font"
                style={{ color: "#888", fontSize: "13px", lineHeight: 1.9, marginBottom: "32px" }}
              >
                From building Wissenaire&apos;s web presence to running internal hackathons, WebnD is where passionate developers connect, ideate, and ship. The member dashboard is our next step — giving every member a structured, gamified path from learning to mastery.
              </p>

              {/* Tech tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Docker"].map((t, i) => (
                  <span key={i} className="badge badge-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginTop: "60px",
            }}
          >
            {[
              {
                icon: "📚",
                title: "Structured Learning",
                desc: "Curated study materials, task-based learning paths, and mentor guidance built into the platform.",
              },
              {
                icon: "⚔️",
                title: "Design Competitions",
                desc: "Regular sprints and hackathons with real judging, public leaderboards, and recognized winners.",
              },
              {
                icon: "🤝",
                title: "Mentorship System",
                desc: "Every member is assigned a mentor. Ask doubts, get tasks reviewed, and track your growth.",
              },
            ].map((c, i) => (
              <div key={i} className="wd-card" style={{ padding: "24px" }}>
                <div
                  style={{
                    fontSize: "28px",
                    marginBottom: "14px",
                    background: "#F5C51815",
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {c.icon}
                </div>
                <div
                  className="display-font"
                  style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", color: "#F5F5F5" }}
                >
                  {c.title}
                </div>
                <div className="mono-font" style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 40px",
          background: "#0A0A0A",
          borderTop: "1px solid #1e1e1e",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#F5C51815",
              border: "1px solid #F5C51840",
              borderRadius: "60px",
              padding: "8px 20px",
              marginBottom: "24px",
            }}
          >
            <span
              className="mono-font"
              style={{ fontSize: "11px", color: "#F5C518", letterSpacing: "0.12em" }}
            >
              OPEN ENROLLMENT · SEM I 2025–26
            </span>
          </div>

          <h2
            className="display-font"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Ready to{" "}
            <span style={{ color: "#F5C518" }}>Ship</span>{" "}
            Something Real?
          </h2>

          <p
            className="mono-font"
            style={{ color: "#888", fontSize: "14px", lineHeight: 1.8, marginBottom: "40px", maxWidth: "480px", margin: "0 auto 40px" }}
          >
            Register for the WebnD member dashboard and join the next cohort. Build projects, earn XP, compete with peers.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/register">
              <button className="btn-primary" style={{ padding: "14px 36px", fontSize: "14px" }}>
                Create Account
              </button>
            </Link>
            <Link href="/login">
              <button className="btn-outline" style={{ padding: "14px 36px", fontSize: "14px" }}>
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer
        style={{
          background: "#0D0D0D",
          borderTop: "1px solid #1e1e1e",
          padding: "48px 40px 32px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "40px",
              paddingBottom: "40px",
              borderBottom: "1px solid #1e1e1e",
            }}
          >
            {/* Brand column */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <LogoMark size={28} />
                <span
                  className="display-font"
                  style={{ fontSize: "16px", fontWeight: 700, color: "#F5C518" }}
                >
                  WebnD
                </span>
              </div>
              <p
                className="mono-font"
                style={{ fontSize: "12px", color: "#555", lineHeight: 1.8, maxWidth: "260px" }}
              >
                Web &amp; Design Society, IIT Bhubaneswar. Part of the Science &amp; Technology Council.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                {["Twitter / X", "Instagram", "GitHub", "LinkedIn"].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="mono-font"
                    style={{ fontSize: "10px", color: "#555", letterSpacing: "0.08em" }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { heading: "Platform", links: ["Login", "Register", "Dashboard", "Leaderboard", "Competitions"] },
              { heading: "Roles", links: ["Member Portal", "Mentor Portal", "Admin Portal", "Study Materials", "Submissions"] },
              { heading: "Society", links: ["About WebnD", "Our Projects", "Workshops", "Contact", "IIT BBS"] },
            ].map((col, i) => (
              <div key={i}>
                <div
                  className="mono-font"
                  style={{
                    fontSize: "10px",
                    color: "#F5C518",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {col.heading}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {col.links.map((l, j) => (
                    <a
                      key={j}
                      href="#"
                      className="mono-font"
                      style={{ fontSize: "12px", color: "#555" }}
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "24px",
            }}
          >
            <span
              className="mono-font"
              style={{ fontSize: "11px", color: "#333" }}
            >
              © 2025 Web &amp; Design Society, IIT Bhubaneswar. All rights reserved.
            </span>
            <div style={{ display: "flex", gap: "20px" }}>
              {["Privacy Policy", "Terms of Use"].map((t, i) => (
                <a
                  key={i}
                  href="#"
                  className="mono-font"
                  style={{ fontSize: "11px", color: "#333" }}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}