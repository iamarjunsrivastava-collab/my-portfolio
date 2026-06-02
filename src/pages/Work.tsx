import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

const experiences = [
  {
    company: "Infosys",
    role: "Data Visualization Intern",
    period: "Sep 2025", end: "Nov 2025",
    description: "Led a team to create interactive dashboards on the 2019 Indian General Election for media and journalist use. Designed data visualizations in Power BI and Tableau highlighting regional and party-wise performance. Collected, cleaned, and analyzed large election datasets for accuracy and clarity.",
    tags: ["Power BI", "Tableau", "Python", "Data Analysis", "Excel"],
  },
  {
    company: "Edunet Foundation",
    role: "AI and Cloud Intern",
    period: "Jul 2025", end: "Aug 2025",
    description: "Built an AI chatbot using IBM Cloud and Watson Assistant for automated query responses. Applied NLP techniques to improve intent detection and response accuracy. Designed conversational dialogue flows and trained datasets for better performance.",
    tags: ["IBM Cloud", "Watson Assistant", "NLP", "Python"],
  },
];

export default function Work() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {experiences.map((exp, i) => (
        <div key={i} className="work-item">
          <div className="flex items-center gap-2 mb-1">
            <FolderOpen size={14} style={{ color: "var(--icon-color)" }} strokeWidth={1.5} />
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-main)" }}>{exp.company}</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span style={{ fontSize: 13, color: "#c9a227" }}>{exp.role}</span>
            <span style={{ fontSize: 12, color: "var(--text-faint)" }}>{exp.period} – {exp.end}</span>
          </div>
          <p className="mb-3 leading-relaxed" style={{ fontSize: 13, color: "var(--text-muted)", maxWidth: 480 }}>
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => <span key={tag} className="skill-tag">{tag}</span>)}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
