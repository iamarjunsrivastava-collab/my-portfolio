import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    company: "Infosys",
    title: "Data Visualization Intern",
    period: "Sep 2025 – Nov 2025",
    location: "Remote",
    bullets: [
      "Led a team to create interactive dashboards on the 2019 Indian General Election for media and journalist use",
      "Designed data visualizations in Power BI and Tableau highlighting regional and party-wise performance",
      "Collected, cleaned, and analyzed large election datasets for accuracy and clarity",
      "Strengthened leadership and teamwork skills through effective project coordination",
    ],
  },
  {
    company: "Edunet Foundation",
    title: "AI and Cloud Intern",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    bullets: [
      "Built an AI chatbot using IBM Cloud and Watson Assistant for automated query responses",
      "Applied NLP techniques to improve intent detection and response accuracy",
      "Designed conversational dialogue flows and trained datasets for better performance",
      "Deployed and tested the chatbot on IBM Cloud to ensure seamless functionality",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="section-padding relative">
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
              Work History
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Where I've{" "}
            <span className="italic font-normal text-primary">contributed</span>
          </h2>
          <p className="text-muted-foreground">
            Professional journey across internships and hands-on industry roles.
          </p>
        </motion.div>

        {/* Tab layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto flex gap-8"
        >
          {/* Left: company tabs */}
          <div className="flex flex-col gap-1 min-w-[160px]">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActive(index)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === index
                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Right: details */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <h3 className="text-xl font-bold mb-1">{experiences[active].title}</h3>
            <p className="text-sm text-primary font-medium mb-1">{experiences[active].company}</p>
            <p className="text-xs text-muted-foreground mb-5">
              {experiences[active].period} · {experiences[active].location}
            </p>

            <ul className="space-y-3">
              {experiences[active].bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
