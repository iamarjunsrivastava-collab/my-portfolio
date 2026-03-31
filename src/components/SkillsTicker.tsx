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
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex">
        <motion.div
          className="flex gap-8 whitespace-nowrap shrink-0"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-default">
                {skill}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsTicker;
