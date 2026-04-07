import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      label: "Email Me",
      icon: Mail,
      href: "mailto:iamarjunsrivastava@gmail.com",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arjun-srivastava-228021282/",
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/iamarjunsrivastava-collab",
    },
    {
      label: "Portfolio",
      icon: Globe,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container px-6 relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Get in Touch
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Let's build <br />
            something{" "}
            <span className="italic text-primary">great</span>
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Open to internships, research collaborations, and interesting projects.
            If you think we'd work well together, I'd love to hear from you.
          </p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {links.map(({ label, icon: Icon, href }, index) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:shadow-lg hover:shadow-primary/10"
              >
                <Icon className="w-4 h-4" />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
