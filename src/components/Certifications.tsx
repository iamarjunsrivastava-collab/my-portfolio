import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    link: "https://drive.google.com/file/d/1Dgf-TOAgK1ALb0WjS3KECtbjnSs8KCzc/view?usp=drive_link",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "2024",
    link: "https://drive.google.com/file/d/1GHyFybgPhrOCcN3wPemPN_jVWLYC4C_1/view?usp=drive_link",
  },
  {
    title: "Data Visualization Job Simulation",
    issuer: "TATA (via Forage)",
    date: "2024",
    link: "https://drive.google.com/file/d/1Q6p_r0HIMVeMpmXrkH1JMoplZT7exbMK/view?usp=drive_link",
  },
  {
    title: "Big Data",
    issuer: "Infosys",
    date: "2024",
    link: "https://drive.google.com/file/d/1hG5sTPL03-b8Oeax71hkIJN1r68aCYVz/view?usp=drive_link",
  },
  {
    title: "Data Science",
    issuer: "Infosys",
    date: "2024",
    link: "https://drive.google.com/file/d/15XVtDnLnr0F97aYUTIMtxe_QpakzH_ZI/view?usp=drive_link",
  },
  {
    title: "Data Analytics using Power BI Foundation",
    issuer: "Infosys",
    date: "2024",
    link: "https://drive.google.com/file/d/14S8rwb8mnoog04HWjbUhamkYd7zWrxDi/view?usp=drive_link",
  },
  {
    title: "Cloud Technologies",
    issuer: "Infosys",
    date: "2024",
    link: "https://drive.google.com/file/d/1lCyqazkXjb3wzRpvLYdqCB-eJ-tKl8Lx/view?usp=drive_link",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container px-6 relative z-10">
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
              Credentials
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Certifications &{" "}
            <span className="italic font-normal text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground">
            Industry-recognized credentials validating expertise across data science, cloud, and analytics.
          </p>
        </motion.div>

        {/* 2-column grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-primary font-medium">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>

              {/* Arrow */}
              <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
