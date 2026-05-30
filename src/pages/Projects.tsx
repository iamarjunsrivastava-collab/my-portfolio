import { motion } from "framer-motion";
import { FolderOpen, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Chat Cleaner — NLP Chat Classification System",
    description:
      "An NLP-based tool to analyze and filter live chat messages at scale. Reduces duplicate messages by 70% using semantic similarity detection and implements toxicity detection filtering 95%+ irrelevant content.",
    tags: ["Python", "Sentence-BERT", "Flask", "Hugging Face"],
    github: "https://github.com/iamarjunsrivastava-collab/Chat-Cleaner---Chat-Classifier-Extension",
    live: null,
  },
  {
    title: "Sentiment Analysis on Amazon Reviews (80k+ Records)",
    description:
      "Sentiment analysis pipeline processing 80,000+ product reviews. Applied TF-IDF feature extraction and compared multiple ML models. Achieved 87% F1-score after rigorous model optimization.",
    tags: ["Python", "Pandas", "Scikit-learn", "NLP"],
    github: "https://github.com/iamarjunsrivastava-collab/Sentiment-Analysis-Classifier",
    live: null,
  },
  {
    title: "Customer Churn Prediction & Retention Analysis",
    description:
      "Churn prediction model on telecom customer datasets. Performed EDA and feature engineering to identify key churn drivers. Achieved 85%+ accuracy with Logistic Regression and Random Forest.",
    tags: ["Python", "SQL", "Scikit-learn", "Power BI"],
    github: "https://github.com/iamarjunsrivastava-collab/Customer-Churn-Prediction",
    live: null,
  },
  {
    title: "House Price Prediction System",
    description:
      "Price prediction system using Linear Regression on historical data. Implemented serverless backend for real-time predictions with confidence scores and built an interactive web interface with visualization dashboard.",
    tags: ["Python", "Pandas", "Scikit-learn", "JavaScript"],
    github: "https://github.com/iamarjunsrivastava-collab/House-Pricing-Prediction",
    live: null,
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {projects.map((project, i) => (
        <div key={i} className="work-item">
          {/* Title row */}
          <div className="flex items-center gap-2 mb-2">
            <FolderOpen size={14} style={{ color: "#555" }} strokeWidth={1.5} />
            <span
              className="font-mono font-semibold"
              style={{ fontSize: 13, color: "#1a1a1a" }}
            >
              {project.title}
            </span>
          </div>

          {/* Description */}
          <p
            className="mb-3 leading-relaxed"
            style={{ fontSize: 12, color: "#444", maxWidth: 480 }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-opacity hover:opacity-50"
                style={{ fontSize: 11, color: "#555" }}
              >
                <Github size={12} strokeWidth={1.5} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-opacity hover:opacity-50"
                style={{ fontSize: 11, color: "#555" }}
              >
                <ExternalLink size={12} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
