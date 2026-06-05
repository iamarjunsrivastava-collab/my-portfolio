import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, ArrowRight, Phone } from "lucide-react";

const links = [
  { label: "Email",     icon: Mail,      href: "mailto:iamarjunsrivastava@gmail.com" },
  { label: "Phone",     icon: Phone,     href: "tel:+918810761322" },
  { label: "LinkedIn",  icon: Linkedin,  href: "https://www.linkedin.com/in/arjun-srivastava-228021282/" },
  { label: "Github",    icon: Github,    href: "https://github.com/iamarjunsrivastava-collab" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/iamarjunsrivastava" },
];

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-main)", marginBottom: 24 }}>
          Let's Work Together
        </h2>

        {/* Photo swap */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div style={{ width: 60, height: 60, border: "1px solid var(--border-color)", overflow: "hidden", background: "var(--bg-card)", transform: "rotate(-6deg)", borderRadius: 4 }}>
            <img src="/profile.jpg" alt="Arjun"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              onError={(e) => {
                const t = e.currentTarget; t.style.display = "none";
                const p = t.parentElement;
                if (p && !p.querySelector(".av-fb2")) {
                  const d = document.createElement("div"); d.className = "av-fb2";
                  d.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#888;font-family:Arial,sans-serif;";
                  d.textContent = "AS"; p.appendChild(d);
                }
              }}
            />
          </div>
          <span style={{ fontSize: 18, color: "var(--text-muted)" }}>⇌</span>
          <div style={{ width: 60, height: 60, border: "1px solid var(--border-color)", background: "var(--bg-card)", transform: "rotate(4deg)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
        </div>

        <p style={{ fontSize: 15, fontWeight: 700, color: "var(--text-main)", marginBottom: 4 }}>
          Suggestion / Idea / Thought ?
        </p>
        <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
          I'll help you get the insights you've been dreaming of. Just send me a message.
        </p>
        <div style={{ fontSize: 20, marginTop: 10 }}>🔥</div>
      </div>

      {/* Contact links */}
      <div style={{ borderTop: "1px solid var(--border-light)" }}>
        {links.map(({ label, icon: Icon, href }) => (
          <a key={label} href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="contact-row"
          >
            <div className="flex items-center gap-3">
              <Icon size={16} strokeWidth={1.5} style={{ color: "var(--icon-color)" }} />
              <span style={{ fontSize: 15, color: "var(--text-main)" }}>{label}</span>
            </div>
            <ArrowRight size={15} strokeWidth={1.5} style={{ color: "var(--text-faint)" }} />
          </a>
        ))}
      </div>

      {/* Footer strip — visitors, open badge, resume */}
      <div
        style={{
          marginTop: 32,
          paddingTop: 16,
          borderTop: "1px solid var(--border-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {/* Visitor counter */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>⇌</span>
          <img
            src="https://visitor-badge.laobi.icu/badge?page_id=iamarjunsrivastava-collab.my-portfolio&left_color=gray&right_color=gold&left_text=Visitors"
            alt="Visitor count"
            style={{ height: 20, borderRadius: 3 }}
          />
        </div>

        {/* Open badge + resume */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#1a1a1a", background: "#f5c518", padding: "3px 8px", borderRadius: 3, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            🟢 Open for Internship
          </span>
          <a
            href="/resume-arjun.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, fontWeight: 600, color: "var(--text-main)", border: "1px solid var(--border-color)", padding: "4px 10px", borderRadius: 3, display: "inline-flex", alignItems: "center", gap: 5, transition: "opacity 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
            View Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}
