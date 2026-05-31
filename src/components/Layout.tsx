import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderOpen, GraduationCap, Briefcase, Wifi, Star, Award } from "lucide-react";

// ── Bulb icon SVG ──────────────────────────────────────────────────
function BulbIcon({ on }: { on: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={on ? "#c9a227" : "#888"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bulb glass */}
      <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.4-1.3 4.5-3 5.7V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.3C7.3 13.5 6 11.4 6 9a6 6 0 0 1 6-6z" />
      {/* Filament glow when on */}
      {on && (
        <path d="M10 14.5c.6-.8 1-1.7 1-2.5M14 14.5c-.6-.8-1-1.7-1-2.5" stroke="#c9a227" strokeWidth="1.2" />
      )}
    </svg>
  );
}

// ── Glitch name component ──────────────────────────────────────────
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function GlitchName() {
  const original = "Arjun Srivastava";
  const [display, setDisplay] = useState(original);
  const [glitching, setGlitching] = useState(false);

  const startGlitch = () => {
    if (glitching) return;
    setGlitching(true);
    let elapsed = 0;
    const total = 2000;
    const interval = 50;

    const timer = setInterval(() => {
      elapsed += interval;
      const progress = elapsed / total;

      if (elapsed >= total) {
        clearInterval(timer);
        setDisplay(original);
        setGlitching(false);
        return;
      }

      const restored = Math.floor(progress * original.length);
      const scrambled = original
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < restored) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setDisplay(scrambled);
    }, interval);
  };

  return (
    <span
      onMouseEnter={startGlitch}
      className="cursor-pointer font-mono text-sm font-semibold tracking-wide select-none"
      style={{ fontFamily: "'Courier New', monospace" }}
    >
      {display}
    </span>
  );
}

// ── Live clock ─────────────────────────────────────────────────────
function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ampm = now.getHours() >= 12 ? "pm" : "am";
      const h12 = (now.getHours() % 12 || 12).toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      const s = now.getSeconds().toString().padStart(2, "0");
      setTime(`${h12}:${m}:${s} ${ampm} IST`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
      {time}
    </span>
  );
}

// ── Section label map ──────────────────────────────────────────────
const sectionLabels: Record<string, string> = {
  "/": "",
  "/projects": "Projects",
  "/education": "Education",
  "/work": "Work",
  "/extracurricular": "Extracurricular",
  "/certificates": "Certificates",
  "/contact": "Contact",
};

// ── Dock nav items ─────────────────────────────────────────────────
const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/projects", icon: FolderOpen, label: "Projects" },
  { href: "/education", icon: GraduationCap, label: "Education" },
  { href: "/work", icon: Briefcase, label: "Work" },
  { href: "/extracurricular", icon: Star, label: "Extracurricular" },
  { href: "/certificates", icon: Award, label: "Certificates" },
  { href: "/contact", icon: Wifi, label: "Contact" },
];

// ── Layout ─────────────────────────────────────────────────────────
export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const section = sectionLabels[location.pathname] ?? "";
  const [dark, setDark] = useState(false);

  // Apply dark class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }
  }, [dark]);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", transition: "background 0.3s, color 0.3s" }}>
      {/* Right vertical ornament line */}
      <div className="right-ornament" />
      <div className="right-ornament-dot animate-swing" />

      {/* Page content */}
      <div className="page-layout">
        {/* Top header */}
        <div className="top-header">
          <div className="flex items-center gap-1.5">
            <GlitchName />
            {section && (
              <>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>/</span>
                <span className="text-xs font-mono" style={{ color: "#c9a227" }}>
                  {section}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            {/* Bulb theme toggle */}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              title={dark ? "Switch to light" : "Switch to dark"}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <BulbIcon on={dark} />
            </button>

            {/* Arrow */}
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>↳</span>
            {/* Yellow dot */}
            <span
              className="animate-pulse-dot inline-block rounded-full"
              style={{ width: 10, height: 10, background: "#f5c518" }}
            />
            <LiveClock />
          </div>
        </div>

        {/* Page content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom dock navigation */}
      <nav className="dock-nav">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = location.pathname === href;
          return (
            <Link
              key={href}
              to={href}
              aria-label={label}
              className="flex flex-col items-center gap-0.5"
            >
              <div className="relative">
                <Icon
                  size={20}
                  strokeWidth={active ? 2 : 1.5}
                  style={{ color: active ? "#c9a227" : "var(--icon-color)" }}
                />
                {active && (
                  <span
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                    style={{ width: 4, height: 4, background: "#c9a227" }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
