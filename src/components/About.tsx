import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Sparkles } from "lucide-react";

const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "7+", label: "Certifications" },
  { value: "2", label: "Internships" },
  { value: "150+", label: "Students Impacted" },
];

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Pursuing B.Tech in Computer Science with specialization in Data Science & Analytics at United University, Prayagraj.",
  },
  {
    icon: Target,
    title: "Focus",
    description: "Machine Learning, Statistical Analysis, Data Visualization, and Predictive Modeling on real-world datasets.",
  },
  {
    icon: Sparkles,
    title: "Passion",
    description: "Turning complex data into meaningful stories that drive business decisions and create real impact.",
  },
];

const About = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-6 bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              About Me
            </span>
            <div className="h-px w-6 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bridging the gap between{" "}
            <span className="italic font-normal text-primary">data and decisions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a passionate data science student who believes in the power of analytics
            to solve real-world problems. With a strong foundation in statistics,
            programming, and machine learning, I'm on a mission to unlock insights
            that matter.
          </p>
        </motion.div>

        {/* Stats row */}
        <div ref={statsRef} className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;