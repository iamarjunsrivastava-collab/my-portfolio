import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const activities = [
  {
    title: "Campus Mantri | GeeksforGeeks",
    organization: "GeeksforGeeks · United University Prayagraj",
    type: "Leadership",
    date: "2026",
    bullets: [
      "Appointed as Official Representative of GFG for United University",
      "Primary liaison between GeeksforGeeks and the student community",
      "Organizing campus-level tech events and educational activities",
      "Brand ambassador increasing student engagement with GFG resources",
    ],
  },
  {
    title: "Campus Ambassador | EDC, IIT Delhi",
    organization: "Entrepreneurship Development Cell · IIT Delhi",
    type: "Leadership",
    date: "2025–26",
    bullets: [
      "Selected as Campus Ambassador representing eDC, IIT Delhi",
      "Promoted entrepreneurship initiatives through campus and digital outreach",
      "Strengthening leadership and communication skills at national level",
    ],
  },
  {
    title: "Campus Ambassador for E-Summit'25",
    organization: "IIT Indore",
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
    organization: "United University, Prayagraj",
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

const ExtracurricularActivities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="extracurricular" className="section-padding relative">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-12"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Beyond Academics
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Extracurricular{" "}
            <span className="italic font-normal text-primary">Activities</span>
          </h2>
          <p className="text-muted-foreground">
            Leadership roles and community involvement that shaped my professional journey.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Badge + date */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full uppercase tracking-wide">
                  {activity.type}
                </span>
                <span className="text-xs text-muted-foreground">{activity.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-1">{activity.title}</h3>

              {/* Organization */}
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                <MapPin className="w-3 h-3 text-primary shrink-0" />
                {activity.organization}
              </div>

              {/* Bullet points */}
              <ul className="space-y-2">
                {activity.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularActivities;
