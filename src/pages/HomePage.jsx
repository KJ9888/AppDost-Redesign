import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/sections/HeroSection";
import TrustBar from "../components/sections/TrustBar";

// Lazy load sections
const ServicesSection = lazy(() => import("../components/sections/ServicesSection"));
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const ProjectsSection = lazy(() => import("../components/sections/ProjectsSection"));
const TestimonialsSection = lazy(() => import("../components/sections/TestimonialsSection"));
const TechStackSection = lazy(() => import("../components/sections/TechStackSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <section id="home">
        <HeroSection />
      </section>
      <TrustBar />

      <Suspense fallback={<SectionLoader />}>
        <section id="services">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ServicesSection />
          </motion.div>
        </section>

        <section id="about">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutSection />
          </motion.div>
        </section>

        <section id="projects">
          <ProjectsSection />
          <TestimonialsSection />
        </section>

        <section id="tech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TechStackSection />
          </motion.div>
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </Suspense>
    </div>
  );
};

export default HomePage;
