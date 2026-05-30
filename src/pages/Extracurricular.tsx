import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const activities = [
  {
    title: "Campus Mantri",
    org: "GeeksforGeeks · United University, Prayagraj",
    type: "Leadership",
    date: "2026",
    bullets: [
      "Appointed as Official Campus Representative of GFG for United University",
      "Primary liaison between GeeksforGeeks and the student community",
      "Organizing campus-level tech events and educational activities",
      "Brand ambassador increasing student engagement with GFG resources",
    ],
  },
  {
    title: "Campus Ambassador — EDC, IIT Delhi",
    org: "Entrepreneurship Development Cell · IIT Delhi",
    type: "Leadership",
    date: "2025–26",
    bullets: [
      "Selected as Campus Ambassador representing eDC, IIT Delhi",
      "Promoted entrepreneurship initiatives through campus and digital outreach",
      "Strengthened leadership and communication skills at national level",
    ],
  },
  {
    title: "Campus Ambassador — E-Summit'25",
    org: "IIT Indore",
    type: "Leadership",
    date: "2025",
    bullets: [
      "Served as Campus Ambassador for E-Summit'25 organized by IIT Indore",
      "Contributed to student outreach and event promotion at national scale",
      "Supported national-level entrepreneurship event · Aug 30–31, 2025",
    ],
  },
  {
    title: "Co-Organized HackDiwas 2.0",
    org: "United University, Prayagraj",
    type: "Event Management",
    date: "2025",
    bullets: [
      "Co-organised 2-day National Hackathon (May 1–2, 2025)",
      "Coordinated planning and on-ground execution end-to-end",
      "Facilitated 150+ students from Prayagraj, Kanpur, Delhi, Lucknow, Varanasi",
      "Fostered innovation and real-world problem solving culture",
    ],
  },
];

export default function Extracurricular() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {activities.map((act, i) => (
        <div key={i} className="work-item">
          {/* Badge + date */}
          <div className="flex items-center justify-between mb-1">
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#c9a227",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {act.type}
            </span>
            <span style={{ fontSize: 13, color: "#aaa" }}>{act.date}</span>
          </div>

          {/* Title */}
          <p style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>
            {act.title}
          </p>

          {/* Org */}
          <div
            className="flex items-center gap-1 mb-3"
            style={{ fontSize: 13, color: "#666" }}
          >
            <MapPin size={12} color="#c9a227" />
            {act.org}
          </div>

          {/* Bullets */}
          <ul style={{ paddingLeft: 0, listStyle: "none", margin: 0 }}>
            {act.bullets.map((b, j) => (
              <li
                key={j}
                className="flex items-start gap-2 mb-1"
                style={{ fontSize: 14, color: "#444" }}
              >
                <span
                  style={{
                    marginTop: 7,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#c9a227",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}
