import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, MessageSquare, BarChart3, Home, Users } from "lucide-react";

const projects = [
  {
    title: "Chat Cleaner — NLP Chat Classification System",
    period: "2026",
    icon: MessageSquare,
    bullets: [
      "Built NLP-based tool to analyze and filter live chat messages at scale",
      "Reduced duplicate messages by 70% using semantic similarity detection",
      "Implemented toxicity detection filtering 95%+ irrelevant content",
    ],
    tags: ["Python", "Sentence-BERT", "Flask", "Hugging Face"],
    github: "https://github.com/iamarjunsrivastava-collab/Chat-Cleaner---Chat-Classifier-Extension",
  },
  {
    title: "Sentiment Analysis on Amazon Reviews (80k+ Records)",
    period: "2026",
    icon: BarChart3,
    bullets: [
      "Built sentiment analysis pipeline processing 80,000+ product reviews",
      "Applied TF-IDF feature extraction and compared multiple ML models",
      "Achieved 87% F1-score after rigorous model optimization",
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "NLP"],
    github: "https://github.com/iamarjunsrivastava-collab/Sentiment-Analysis-Classifier",
  },
  {
    title: "Customer Churn Prediction & Retention Analysis",
    period: "2026",
    icon: Users,
    bullets: [
      "Built churn prediction model on telecom customer datasets",
      "Performed EDA and feature engineering to identify key churn drivers",
      "Achieved 85%+ accuracy with Logistic Regression and Random Forest",
    ],
    tags: ["Python", "SQL", "Scikit-learn", "Power BI"],
    github: "https://github.com/iamarjunsrivastava-collab/Customer-Churn-Prediction",
  },
  {
    title: "House Price Prediction System",
    period: "2026",
    icon: Home,
    bullets: [
      "Built price prediction system using Linear Regression on historical data",
      "Implemented serverless backend for real-time predictions with confidence scores",
      "Built interactive web interface with visualization dashboard",
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "JavaScript"],
    github: "https://github.com/iamarjunsrivastava-collab/House-Pricing-Prediction",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
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
              Featured Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Data-driven{" "}
            <span className="italic font-normal text-primary">solutions</span>{" "}
            I've built
          </h2>
          <p className="text-muted-foreground">
            Production-grade ML systems and analytics tools — built on real datasets, shipped with impact.
          </p>
        </motion.div>

        {/* 2-column grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col"
              >
                {/* Icon + year */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium bg-secondary px-2 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3">{project.title}</h3>

                {/* Bullets */}
                <ul className="space-y-2 mb-4 flex-1">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground font-medium hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mt-auto"
                >
                  <Github className="w-3.5 h-3.5" />
                  View on GitHub
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
