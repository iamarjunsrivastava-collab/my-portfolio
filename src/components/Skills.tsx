import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Skill tiles with emoji icons for visual flair (inspired by amancodes.in icon tiles)
const skillTiles = [
  { name: "Python", icon: "🐍", color: "from-blue-500/10 to-yellow-500/10" },
  { name: "SQL", icon: "🗄️", color: "from-orange-500/10 to-red-500/10" },
  { name: "Pandas", icon: "🐼", color: "from-purple-500/10 to-blue-500/10" },
  { name: "NumPy", icon: "🔢", color: "from-blue-500/10 to-cyan-500/10" },
  { name: "Scikit-learn", icon: "🤖", color: "from-orange-500/10 to-yellow-500/10" },
  { name: "TensorFlow", icon: "🧠", color: "from-orange-500/10 to-red-500/10" },
  { name: "PyTorch", icon: "🔥", color: "from-red-500/10 to-orange-500/10" },
  { name: "NLP", icon: "💬", color: "from-green-500/10 to-teal-500/10" },
  { name: "Power BI", icon: "📊", color: "from-yellow-500/10 to-orange-500/10" },
  { name: "Tableau", icon: "📈", color: "from-blue-500/10 to-indigo-500/10" },
  { name: "Matplotlib", icon: "📉", color: "from-cyan-500/10 to-blue-500/10" },
  { name: "Seaborn", icon: "🎨", color: "from-teal-500/10 to-cyan-500/10" },
  { name: "Plotly", icon: "📐", color: "from-purple-500/10 to-pink-500/10" },
  { name: "MySQL", icon: "🐬", color: "from-blue-500/10 to-cyan-500/10" },
  { name: "AWS", icon: "☁️", color: "from-orange-500/10 to-yellow-500/10" },
  { name: "IBM Cloud", icon: "🌐", color: "from-blue-500/10 to-indigo-500/10" },
  { name: "Git", icon: "🌿", color: "from-red-500/10 to-orange-500/10" },
  { name: "GitHub", icon: "🐙", color: "from-gray-500/10 to-slate-500/10" },
  { name: "VS Code", icon: "💻", color: "from-blue-500/10 to-cyan-500/10" },
  { name: "Excel", icon: "📋", color: "from-green-500/10 to-emerald-500/10" },
  { name: "OpenAI API", icon: "✨", color: "from-emerald-500/10 to-teal-500/10" },
  { name: "LLMs", icon: "🦾", color: "from-violet-500/10 to-purple-500/10" },
];

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
  const tilesRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tilesInView = useInView(tilesRef, { once: true, margin: "-100px" });

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
            The full arsenal I bring to every data challenge — from raw data to production-ready models.
          </p>
        </motion.div>

        {/* Visual skill tiles grid */}
        <div ref={tilesRef} className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {skillTiles.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={tilesInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 + index * 0.04 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-br ${skill.color} border border-border hover:border-primary/50 cursor-default transition-colors duration-200 group`}
              >
                <span className="text-xl leading-none">{skill.icon}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category breakdown */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
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
