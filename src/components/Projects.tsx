import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, MessageSquare, BarChart3, Home, Users } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Chat Cleaner-NLP Chat Classification System",
      period: "2025",
      description: [
        "Built an NLP based chat classification tool to analyze and filter live chat messages",
        "Reduced duplicate messages by 70% using semantic similarity detection",
        "Implemented toxicity detection models filtering 95%+ irrelevant content"
      ],
      tags: ["Python", "Sentence-BERT", "Flask", "Hugging Face"],
      icon: MessageSquare,
      github: "https://github.com/iamarjunsrivastava-collab/Chat-Cleaner---Chat-Classifier-Extension",
      demo: "",
    },
    {
      title: "Sentiment Analysis on Amazon Reviews (80k+ Records)",
      period: "2025",
      description: [
        "Developed a sentiment analysis pipeline processing 80,000+ product reviews",
        "Applied text preprocessing, TF-IDF feature extraction, and ML model comparison",
        "Achieved 87% F1-score after model optimization"
      ],
      tags: ["Python", "Pandas", "Scikit-learn", "NLP"],
      icon: BarChart3,
      github: "https://github.com/iamarjunsrivastava-collab/Sentiment-Analysis-Classifier",
      demo: "",
    },
    {
      title: "Customer Churn Prediction & Retention Analysis",
      period: "2025",
      description: [
        "Developed a customer churn prediction model using telecom customer datasets",
        "Performed data preprocessing, exploratory data analysis, and feature engineering to identify churn drivers",
        "Implemented classification models (Logistic Regression, Random Forest) achieving 85%+ accuracy"
      ],
      tags: ["Python", "SQL", "Scikit-learn", "Power BI"],
      icon: Users,
      github: "https://github.com/iamarjunsrivastava-collab/Customer-Churn-Prediction",
      demo: "",
    },
    {
      title: "House Price Prediction",
      period: "2025",
      description: [
        "Developed a House Price Prediction system using Linear Regression on historical housing data",
        "Implemented serverless backend for real-time predictions with confidence scores",
        "Built interactive web interface with visualization dashboard for property insights"
      ],
      tags: ["Python", "Pandas", "Scikit-learn", "JavaScript", "HTML/CSS"],
      icon: Home,
      github: "https://github.com/iamarjunsrivastava-collab/House-Pricing-Prediction",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Featured Projects
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Data-driven solutions I've built
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">{project.period}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {Array.isArray(project.description) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
