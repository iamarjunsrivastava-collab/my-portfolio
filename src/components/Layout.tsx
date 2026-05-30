import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderOpen, GraduationCap, Briefcase, Wifi, Star, Award } from "lucide-react";

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

      // Gradually restore from left as time passes
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
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      const s = now.getSeconds().toString().padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "pm" : "am";
      const h12 = (now.getHours() % 12 || 12).toString().padStart(2, "0");
      setTime(`${h12}:${m}:${s} ${ampm} IST`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-xs font-mono" style={{ color: "#666" }}>
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

  return (
    <div style={{ background: "#f0ead6", minHeight: "100vh" }}>
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
                <span className="text-xs" style={{ color: "#999" }}>/</span>
                <span
                  className="text-xs font-mono"
                  style={{ color: "#c9a227" }}
                >
                  {section}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Arrow icon */}
            <span className="text-xs" style={{ color: "#999" }}>↳</span>
            {/* Yellow dot */}
            <span
              className="animate-pulse-dot inline-block rounded-full"
              style={{ width: 10, height: 10, background: "#f5c518" }}
            />
            <LiveClock />
          </div>
        </div>

        {/* Page content with fade transition */}
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
              className="flex flex-col items-center gap-0.5 group"
            >
              <div className="relative">
                <Icon
                  size={20}
                  strokeWidth={active ? 2 : 1.5}
                  style={{ color: active ? "#c9a227" : "#555" }}
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
