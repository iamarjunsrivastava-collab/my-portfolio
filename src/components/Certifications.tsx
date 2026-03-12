import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section id="certifications" className="section-padding relative">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Professional Credentials
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Certifications & <span className="gradient-text">Achievements</span>
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            Industry-recognized certifications that validate my expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-primary font-medium mb-2">{cert.date}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        View Certificate
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
