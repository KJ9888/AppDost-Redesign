import { useEffect, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import TrustBar from "./components/sections/TrustBar";
import "./App.css";

// Lazy load sections that are below the fold
const ServicesSection = lazy(() => import("./components/sections/ServicesSection"));
const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const ProjectsSection = lazy(() => import("./components/sections/ProjectsSection"));
const TestimonialsSection = lazy(() => import("./components/sections/TestimonialsSection"));
const TechStackSection = lazy(() => import("./components/sections/TechStackSection"));
const ContactSection = lazy(() => import("./components/sections/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));
const FloatingCTA = lazy(() => import("./components/FloatingCTA"));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
  </div>
);

function App() {
  const floatingCTARef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with performance-optimized settings
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
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
            <ProjectsSection floatingCTARef={floatingCTARef} />
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
      </main>

      <Suspense fallback={null}>
        <Footer />
        <FloatingCTA ref={floatingCTARef} />
      </Suspense>
    </div>
  );
}

export default App;
