import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsTicker from "@/components/SkillsTicker";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import ExtracurricularActivities from "@/components/ExtracurricularActivities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SkillsTicker />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <ExtracurricularActivities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
