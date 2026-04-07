import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Programming",
    skills: ["Python", "SQL"],
  },
  {
    label: "ML Libraries",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "NLP"],
  },
  {
    label: "Visualization",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    label: "Cloud & DB",
    skills: ["MySQL", "AWS", "IBM Cloud"],
  },
  {
    label: "Dev Tools",
    skills: ["Git", "GitHub", "VS Code", "Excel", "OpenAI API"],
  },
  {
    label: "Soft Skills",
    skills: ["Team Leadership", "Communication", "Collaboration", "Deadline Adherence"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
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
              Tech Stack
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Tools &{" "}
            <span className="italic font-normal text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground">
            The full arsenal I bring to every data challenge from raw data to production-ready models.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-4 bg-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  {category.label}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
