import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const educationList = [
  {
    type: "Undergraduate",
    period: "Sep 2023 – Present",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "United University",
    location: "Prayagraj, India",
    coursework: [
      "Database Management System",
      "Data Visualization",
      "Artificial Intelligence",
      "Soft Computing",
      "Natural Language Processing",
      "Data Analytics",
      "Machine Learning",
      "Data Science",
    ],
  },
  {
    type: "Higher Secondary",
    period: "2020 – 2022",
    degree: "Intermediate (Class XII) — PCM",
    institution: "Sri Chaitanya Educational Institute",
    location: "Visakhapatnam, India",
    coursework: [],
  },
  {
    type: "Secondary",
    period: "2019 – 2020",
    degree: "High School (Class X)",
    institution: "Y.M.C.A. Centenary School & College",
    location: "Prayagraj, India",
    coursework: [],
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Building a strong{" "}
            <span className="italic font-normal text-primary">foundation</span>
          </h2>
          <p className="text-muted-foreground">
            The academic journey that shaped my thinking and technical depth.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="flex gap-0 rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              {/* Left blue accent bar */}
              <div className="w-1 bg-primary shrink-0" />

              {/* Left: badge + period */}
              <div className="flex flex-col items-center justify-start gap-2 px-4 py-5 min-w-[130px] border-r border-border">
                <span className="px-2.5 py-1 text-xs font-semibold border border-primary/40 text-primary rounded-full text-center">
                  {edu.type}
                </span>
                <span className="text-xs text-muted-foreground text-center">{edu.period}</span>
              </div>

              {/* Right: content */}
              <div className="flex-1 px-6 py-5">
                <h3 className="font-bold text-base mb-1">{edu.degree}</h3>
                <p className="text-sm text-primary font-medium mb-1">{edu.institution}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                  <MapPin className="w-3 h-3 text-primary" />
                  {edu.location}
                </div>

                {edu.coursework.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      Relevant Coursework ({edu.coursework.length} courses)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
