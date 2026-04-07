import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const educationList = [
  {
    institution: "United University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "September 2023 – Present",
    location: "Prayagraj, India",
    bullets: [
      "Specialization in Data Science & Analytics",
      "Relevant Coursework: Database Management System, Data Visualization, Artificial Intelligence, Soft Computing, Natural Language Processing, Data Analytics, Machine Learning, Data Science",
    ],
  },
  {
    institution: "Sri Chaitanya Educational Institute",
    degree: "Intermediate (Class XII) - PCM",
    period: "2020 – 2022",
    location: "Visakhapatnam, India",
    bullets: [],
  },
  {
    institution: "Y.M.C.A Centenary School & College",
    degree: "High School (Class X)",
    period: "2019 – 2020",
    location: "Prayagraj, India",
    bullets: [],
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="education" className="section-padding relative">
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
              Education
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Where I've{" "}
            <span className="italic font-normal text-primary">learned</span>
          </h2>
          <p className="text-muted-foreground">
            Academic journey focused on data science, analytics, and visualization coursework.
          </p>
        </motion.div>

        {/* Tab layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto flex gap-8"
        >
          {/* Left: institution tabs */}
          <div className="flex flex-col gap-1 min-w-[180px]">
            {educationList.map((edu, index) => (
              <button
                key={edu.institution}
                onClick={() => setActive(index)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === index
                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {edu.institution}
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
            <h3 className="text-xl font-bold mb-1">{educationList[active].degree}</h3>
            <p className="text-sm text-primary font-medium mb-1">{educationList[active].institution}</p>
            <p className="text-xs text-muted-foreground mb-5">
              {educationList[active].period} · {educationList[active].location}
            </p>

            {educationList[active].bullets.length > 0 && (
              <ul className="space-y-3">
                {educationList[active].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
