import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import {
  SQLIcon, PandasIcon, NumpyIcon, ScikitIcon, TensorFlowIcon,
  PyTorchIcon, NLPIcon, PowerBIIcon, TableauIcon, MatplotlibIcon,
  SeabornIcon, PlotlyIcon, MySQLIcon, AWSIcon, IBMIcon, GitIcon,
  GitHubIcon, VSCodeIcon, ExcelIcon, OpenAIIcon, LLMIcon,
  HuggingFaceIcon, FlaskIcon,
} from "../components/TechIcon";

const skills: { name: string; Icon: () => JSX.Element }[] = [
  { name: "Python",       Icon: () => <img src="https://cdn.simpleicons.org/python/3776AB" width={14} height={14} alt="Python" /> },
  { name: "SQL",          Icon: SQLIcon },
  { name: "Pandas",       Icon: PandasIcon },
  { name: "NumPy",        Icon: NumpyIcon },
  { name: "Scikit-learn", Icon: ScikitIcon },
  { name: "TensorFlow",   Icon: TensorFlowIcon },
  { name: "PyTorch",      Icon: PyTorchIcon },
  { name: "NLP",          Icon: NLPIcon },
  { name: "Power BI",     Icon: PowerBIIcon },
  { name: "Tableau",      Icon: TableauIcon },
  { name: "Matplotlib",   Icon: MatplotlibIcon },
  { name: "Seaborn",      Icon: SeabornIcon },
  { name: "Plotly",       Icon: PlotlyIcon },
  { name: "MySQL",        Icon: MySQLIcon },
  { name: "AWS",          Icon: AWSIcon },
  { name: "IBM Cloud",    Icon: IBMIcon },
  { name: "Git",          Icon: GitIcon },
  { name: "GitHub",       Icon: GitHubIcon },
  { name: "VS Code",      Icon: VSCodeIcon },
  { name: "Excel",        Icon: ExcelIcon },
  { name: "OpenAI API",   Icon: OpenAIIcon },
  { name: "LLMs",         Icon: LLMIcon },
  { name: "Hugging Face", Icon: HuggingFaceIcon },
  { name: "Flask",        Icon: FlaskIcon },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Profile photo */}
      <div className="mb-6">
        <div
          style={{
            width: 80,
            height: 80,
            border: "1px solid #c0b89a",
            overflow: "hidden",
            background: "#e8e0c8",
          }}
        >
          <img
            src="/profile.jpg"
            alt="Arjun Srivastava"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const p = t.parentElement;
              if (p && !p.querySelector(".av-fb")) {
                const d = document.createElement("div");
                d.className = "av-fb";
                d.style.cssText =
                  "width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#888;font-family:Arial,sans-serif;";
                d.textContent = "AS";
                p.appendChild(d);
              }
            }}
          />
        </div>
      </div>

      {/* Intro paragraph */}
      <p className="mb-5 leading-relaxed" style={{ fontSize: 15, color: "#1a1a1a", maxWidth: 500 }}>
        Hey, I'm Arjun Srivastava, a{" "}
        <span className="highlight">final-year Computer Science undergraduate</span>{" "}
        specializing in Data Science, with internship experience at Infosys and
        AICTE. Skilled in Python, SQL, Power BI, and machine learning. I enjoy
        working with data — analyzing it, modeling it, and turning it into clear
        visual insights. Open to roles in Data Science, Data Analysis, and
        Power BI Development.
      </p>

      {/* Open to work line */}
      <div className="mb-7" style={{ fontSize: 15, color: "#1a1a1a" }}>
        <span>By the way, I'm open to internships and work. </span>
        <span style={{ color: "#999" }}>→ </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, verticalAlign: "middle" }}>
          <a
            href="mailto:iamarjunsrivastava@gmail.com"
            className="inline-flex items-center justify-center rounded-full border"
            style={{ width: 26, height: 26, borderColor: "#c0b89a", color: "#555" }}
            aria-label="Email"
          >
            <Mail size={13} />
          </a>
          <span style={{ color: "#bbb" }}>/</span>
          <a
            href="https://www.linkedin.com/in/arjun-srivastava-228021282/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border"
            style={{ width: 26, height: 26, borderColor: "#c0b89a", color: "#555" }}
            aria-label="LinkedIn"
          >
            <Linkedin size={13} />
          </a>
        </span>
      </div>

      {/* Skills section */}
      <div>
        <p className="mb-3 flex items-center gap-2" style={{ fontSize: 14, color: "#555" }}>
          <span style={{ color: "#c9a227" }}>✦</span>
          <span>Skills and Technologies</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map(({ name, Icon }) => (
            <span
              key={name}
              className="skill-tag"
              style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
            >
              <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <Icon />
              </span>
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
