import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Calendar, MapPin } from "lucide-react";

const ExtracurricularActivities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      title: "Campus Mantri | GeeksforGeeks",
      organization: "GeeksforGeeks",
      description: [
        "Appointed as Campus Mantri (Official Representative) of GeeksforGeeks for United University Prayagraj",
        "Serve as the primary point of contact between GeeksforGeeks and the student community",
        "Promoting tech initiatives, organizing campus-level events and activities",
        "Acting as a brand ambassador to increase student engagement with educational resources and platforms"
      ],
      type: "Leadership",
      date: "2026",
      icon: Users,
    },
    {
      title: "Campus Ambassador | Entrepreneurship Development Cell (eDC), IIT Delhi",
      organization: "IIT Delhi",
      description: [
        "Selected as Campus Ambassador (2025–26) representing Entrepreneurship Development Cell, IIT Delhi",
        "Promoted entrepreneurship initiatives and events through campus and digital outreach",
        "Strengthening leadership and communication skills"
      ],
      type: "Leadership",
      date: "2025-26",
      icon: Users,
    },
    {
      title: "Campus Ambassador for E-Summit'25",
      organization: "IIT Indore",
      description: [
        "Served as Campus Ambassador for E-Summit'25 organized by IIT Indore",
        "Contributed to student outreach and event promotion",
        "Supported engagement and participation for a national-level entrepreneurship event held on August 30–31, 2025",
        "Enhancing leadership and communication skills"
      ],
      type: "Leadership",
      date: "2025",
      icon: Users,
    },
    {
      title: "Co-Organized HackDiwas 2.0",
      organization: "United University",
      description: [
        "Co-organised HackDiwas 2.0, a 2-day National Hackathon at United University, Prayagraj (May 1–2, 2025)",
        "Coordinating planning and on-ground execution",
        "Facilitated participation of 150+ students from multiple cities including Prayagraj, Kanpur, Delhi, Lucknow, and Varanasi",
        "Fostering innovation and real-world problem solving"
      ],
      type: "Event Management",
      date: "2025",
      icon: Trophy,
    },
  ];

  return (
    <section id="extracurricular" className="section-padding relative bg-muted/30">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Beyond Academics
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Extracurricular <span className="gradient-text">Activities</span>
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            Leadership roles and community involvement that shaped my journey
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full min-h-[320px] p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {activity.type}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {activity.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {activity.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-4 h-4" />
                          {activity.organization}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-muted-foreground leading-relaxed flex-1">
                      {Array.isArray(activity.description) ? (
                        <ul className="list-disc list-inside space-y-2">
                          {activity.description.map((point, idx) => (
                            <li key={idx} className="text-sm">{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{activity.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularActivities;