"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/features/auth/actions/register";
import SplashCursor from "@/components/animations/SplashCursor";

// ─── WebnD Logo Mark ───────────────────────────────────────────────────────────
function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="8,8 8,92 60,92 92,50 60,8" fill="#0D0D0D" stroke="#F5C518" strokeWidth="8" />
      <polygon points="28,28 28,72 55,72 75,50 55,28" fill="#F5C518" />
      <polygon points="38,38 38,62 52,62 64,50 52,38" fill="#0D0D0D" />
    </svg>
  );
}

// ─── Floating preview cards shown in the left panel ────────────────────────────
const PREVIEW_CARDS = [
  { icon: "🏆", label: "UI Sprint", sub: "Competition live now", accent: true },
  { icon: "⚡", label: "4,820 XP", sub: "+340 this week" },
  { icon: "📈", label: "Rank #4", sub: "↑2 from last week" },
];

export default function RegisterForm() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      await registerUser(formData);

      router.push("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800&display=swap');

        .register-root {
          min-height: 100vh;
          background: #0D0D0D;
          display: flex;
          font-family: 'DM Mono', monospace;
        }

        /* ── LEFT PANEL ── */
        .register-panel {
          display: none;
          width: 420px;
          flex-shrink: 0;
          background: #111;
          border-right: 1px solid #2A2A2A;
          padding: 48px 40px;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 900px) { .register-panel { display: flex; } }

        /* subtle grid pattern */
        .register-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#F5C51806 1px, transparent 1px),
            linear-gradient(90deg, #F5C51806 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        /* large bg text */
        .panel-bg-text {
          position: absolute;
          bottom: -16px;
          left: -10px;
          font-family: 'Syne', sans-serif;
          font-size: 120px;
          font-weight: 800;
          color: #F5C51808;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.04em;
        }

        .panel-logo-row {
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          z-index: 1;
        }

        .panel-wordmark {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #F5C518;
          letter-spacing: 0.04em;
        }

        .panel-iit {
          font-size: 10px;
          color: #444;
          letter-spacing: 0.08em;
          margin-left: 2px;
        }

        .panel-mid {
          position: relative;
          z-index: 1;
        }

        .panel-headline {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #F5F5F5;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .panel-headline span {
          color: #F5C518;
        }

        .panel-desc {
          font-size: 12px;
          color: #888;
          line-height: 1.8;
          max-width: 280px;
        }

        /* preview cards */
        .preview-cards {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          z-index: 1;
        }

        .preview-card {
          background: #0D0D0D;
          border: 1px solid #2A2A2A;
          border-radius: 10px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, border-color 0.2s;
        }
        .preview-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #F5C518;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .preview-card:hover { transform: translateX(4px); border-color: #F5C51840; }
        .preview-card:hover::before { transform: scaleX(1); }

        .preview-card.accent {
          border-color: #F5C51830;
          background: #F5C51808;
        }
        .preview-card.accent::before { transform: scaleX(1); }

        .preview-icon {
          font-size: 18px;
          flex-shrink: 0;
        }

        .preview-label {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #F5F5F5;
        }
        .preview-sub {
          font-size: 10px;
          color: #888;
          margin-top: 1px;
        }

        .panel-bottom-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: #444;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }
        .panel-bottom-tag::before {
          content: '';
          width: 20px;
          height: 1px;
          background: #333;
        }

        /* ── RIGHT FORM PANEL ── */
        .register-form-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
        }

        .register-form-box {
          width: 100%;
          max-width: 400px;
          animation: formReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes formReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* mobile-only logo */
        .mobile-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 36px;
        }
        @media (min-width: 900px) { .mobile-logo { display: none; } }

        .form-eyebrow {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #F5C518;
          margin-bottom: 8px;
        }

        .form-title {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #F5F5F5;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .form-subtitle {
          font-size: 12px;
          color: #888;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        /* error box */
        .form-error {
          margin-bottom: 20px;
          padding: 11px 14px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.25);
          border-left: 2px solid #ef4444;
          border-radius: 8px;
          font-size: 12px;
          color: #f87171;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: formReveal 0.3s ease both;
        }

        /* field group */
        .field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
        }

        .field-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
        }

        .field-wrap {
          position: relative;
        }

        .field-input {
          width: 100%;
          background: #1A1A1A;
          border: 1px solid #2A2A2A;
          border-radius: 8px;
          padding: 11px 14px;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: #F5F5F5;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .field-input::placeholder { color: #444; }
        .field-input:focus {
          border-color: #F5C518;
          box-shadow: 0 0 0 3px rgba(245,197,24,0.08);
          background: #1e1e1e;
        }
        .field-input:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .field-input.has-toggle {
          padding-right: 42px;
        }

        .pw-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #555;
          padding: 4px;
          display: flex;
          align-items: center;
          transition: color 0.15s;
          font-size: 14px;
        }
        .pw-toggle:hover { color: #F5C518; }

        /* submit button */
        .submit-btn {
          width: 100%;
          margin-top: 8px;
          background: #F5C518;
          color: #0D0D0D;
          border: none;
          border-radius: 8px;
          padding: 12px;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .submit-btn:hover { background: #C49A00; box-shadow: 0 6px 24px rgba(245,197,24,0.2); }
        .submit-btn:hover::after { transform: translateX(100%); }
        .submit-btn:active { transform: scale(0.98); }
        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .submit-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        /* spinner */
        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(13,13,13,0.3);
          border-top-color: #0D0D0D;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .form-footer {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          font-size: 12px;
          color: #888;
        }

        .form-footer a {
          color: #F5C518;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }
        .form-footer a:hover { color: #C49A00; }
      `}</style>

      <div className="register-root">
        <SplashCursor />

        {/* ── LEFT PANEL ── */}
        <aside className="register-panel">
          <div className="panel-bg-text">WebnD</div>

          {/* Top: logo */}
          <div className="panel-logo-row">
            <LogoMark size={32} />
            <span className="panel-wordmark">WebnD</span>
            <span className="panel-iit">/ IIT BBS</span>
          </div>

          {/* Mid: headline */}
          <div className="panel-mid">
            <div className="panel-headline">
              Build.<br />
              Compete.<br />
              <span>Level up.</span>
            </div>
            <p className="panel-desc">
              Your society dashboard — tasks, mentorship, competitions, and leaderboards in one place.
            </p>
          </div>

          {/* Preview cards */}
          <div className="preview-cards">
            {PREVIEW_CARDS.map((c, i) => (
              <div key={i} className={`preview-card${c.accent ? " accent" : ""}`}>
                <span className="preview-icon">{c.icon}</span>
                <div>
                  <div className="preview-label">{c.label}</div>
                  <div className="preview-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom tag */}
          <div className="panel-bottom-tag">
            Science &amp; Technology Council, IIT Bhubaneswar
          </div>
        </aside>

        {/* ── RIGHT FORM ── */}
        <main className="register-form-side">
          <div className="register-form-box">

            {/* Mobile-only logo */}
            <div className="mobile-logo">
              <LogoMark size={28} />
              <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "16px", fontWeight: 800, color: "#F5C518", letterSpacing: "0.04em" }}>
                WebnD
              </span>
            </div>

            {/* Heading */}
            <div className="form-eyebrow">Member Portal</div>
            <h1 className="form-title">Create account</h1>
            <p className="form-subtitle">Join WebnD and start earning XP</p>

            {/* Error */}
            {error && (
              <div className="form-error">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="field-group">
                <label htmlFor="name" className="field-label">Full Name</label>
                <div className="field-wrap">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    disabled={loading}
                    className="field-input"
                    autoComplete="name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="field-group">
                <label htmlFor="email" className="field-label">Email</label>
                <div className="field-wrap">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@iitbbs.ac.in"
                    required
                    disabled={loading}
                    className="field-input"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="field-group">
                <label htmlFor="password" className="field-label">Password</label>
                <div className="field-wrap">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    disabled={loading}
                    className="field-input has-toggle"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="pw-toggle"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="submit-btn"
                style={{ marginTop: "24px" }}
              >
                <span className="submit-inner">
                  {loading && <span className="spinner" />}
                  {loading ? "Creating account..." : "Create account"}
                </span>
              </button>
            </form>

            {/* Footer */}
            <p className="form-footer">
              Already have an account?{" "}
              <a href="/login">Sign in</a>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}