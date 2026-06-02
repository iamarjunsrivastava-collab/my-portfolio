import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certificates = [
  { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "2025", link: "https://drive.google.com/file/d/1Dgf-TOAgK1ALb0WjS3KECtbjnSs8KCzc/view?usp=drive_link", color: "#C74634" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte (via Forage)", date: "2024", link: "https://drive.google.com/file/d/1GHyFybgPhrOCcN3wPemPN_jVWLYC4C_1/view?usp=drive_link", color: "#86BC25" },
  { title: "Data Visualization Job Simulation", issuer: "TATA (via Forage)", date: "2024", link: "https://drive.google.com/file/d/1Q6p_r0HIMVeMpmXrkH1JMoplZT7exbMK/view?usp=drive_link", color: "#00A3E0" },
  { title: "Big Data", issuer: "Infosys", date: "2024", link: "https://drive.google.com/file/d/1hG5sTPL03-b8Oeax71hkIJN1r68aCYVz/view?usp=drive_link", color: "#007CC3" },
  { title: "Data Science", issuer: "Infosys", date: "2024", link: "https://drive.google.com/file/d/15XVtDnLnr0F97aYUTIMtxe_QpakzH_ZI/view?usp=drive_link", color: "#007CC3" },
  { title: "Data Analytics using Power BI Foundation", issuer: "Infosys", date: "2024", link: "https://drive.google.com/file/d/14S8rwb8mnoog04HWjbUhamkYd7zWrxDi/view?usp=drive_link", color: "#007CC3" },
  { title: "Cloud Technologies", issuer: "Infosys", date: "2024", link: "https://drive.google.com/file/d/1lCyqazkXjb3wzRpvLYdqCB-eJ-tKl8Lx/view?usp=drive_link", color: "#007CC3" },
];

export default function Certificates() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {certificates.map((cert, i) => (
        <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid var(--border-light)", textDecoration: "none", transition: "opacity 0.15s", gap: 12 }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.55")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 6, background: cert.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-main)", lineHeight: 1.4 }}>{cert.title}</p>
              <p style={{ fontSize: 12, color: "#c9a227", marginTop: 2 }}>{cert.issuer} · {cert.date}</p>
            </div>
          </div>
          <ExternalLink size={13} strokeWidth={1.5} style={{ color: "var(--text-faint)", flexShrink: 0 }} />
        </a>
      ))}
    </motion.div>
  );
}
