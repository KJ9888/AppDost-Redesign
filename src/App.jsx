import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import TrustBar from "./components/sections/TrustBar";
import ServicesSection from "./components/sections/ServicesSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import TechStackSection from "./components/sections/TechStackSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import "./App.css";

function App() {
  useEffect(() => {
    // Initialize Lenis for ultra-smooth and fast scrolling
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          lenis.scrollTo(target, { offset: -80, duration: 0.6 });
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950">
      {/* Skip to content for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] bg-white text-slate-900 px-4 py-2 rounded-lg shadow"
      >
        Skip to content
      </a>
      <Navigation />

      <main>
        <section id="home">
          <HeroSection />
        </section>
        <TrustBar />

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
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
