import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationList = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "United University",
      location: "Prayagraj, India",
      period: "September 2023 – Present",
      type: "Undergraduate",
      color: "from-emerald-500/20 to-teal-500/20",
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
      degree: "Intermediate (Class XII) - PCM",
      institution: "Kendriya Vidyalaya",
      location: "Prayagraj, India",
      period: "2021 – 2023",
      type: "Higher Secondary",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      degree: "High School (Class X)",
      institution: "Kendriya Vidyalaya",
      location: "Prayagraj, India",
      period: "2019 – 2021",
      type: "Secondary",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Education
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Academic <span className="gradient-text">background</span>
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            Building a strong foundation in computer science and engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Academic Journey</h3>
          </div>

          <div className="space-y-8">
            {educationList.map((edu, eduIndex) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + eduIndex * 0.1 }}
                className="group relative"
              >
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card border-border hover:border-primary/50">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {edu.type}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-3 transition-colors group-hover:text-primary">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {edu.coursework && (
                    <div>
                      <p className="text-sm font-medium mb-4 flex items-center gap-2">
                        <span>Relevant Coursework:</span>
                        <span className="text-xs text-muted-foreground">({edu.coursework.length} courses)</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, index) => (
                          <motion.div
                            key={course}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              duration: 0.3,
                              delay: 0.3 + eduIndex * 0.1 + index * 0.05,
                            }}
                            className="px-3 py-2 text-sm rounded-lg font-medium transition-all duration-200 bg-secondary text-foreground hover:bg-primary/20 hover:text-primary"
                          >
                            {course}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
