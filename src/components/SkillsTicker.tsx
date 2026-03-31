import { motion } from "framer-motion";

const skills = [
  "Python", "SQL", "Machine Learning", "Data Visualization", "NLP",
  "Power BI", "Scikit-learn", "TensorFlow", "Tableau", "Pandas",
  "NumPy", "PyTorch", "AWS", "IBM Cloud", "Data Science",
  "Deep Learning", "OpenAI API", "LLM", "Matplotlib", "Seaborn",
];

const SkillsTicker = () => {
  return (
    <div className="relative py-6 overflow-hidden border-y border-border bg-secondary/20">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {skill}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsTicker;
