import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Smartphone, Globe, Briefcase } from "lucide-react";
import { Card, CardContent } from "../ui/card";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "BEU Mate - Bihar Engineering",
    category: "Educational Platform",
    description:
      "AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.",
    tech: ["React Native", "Node.js", "AI/ML", "Firebase"],
    image:
      "https://spectrum.ieee.org/media-library/an-illustration-showing-young-people-sitting-with-computers-behind-and-over-them-are-icons-representing-ai-and-education-topics.jpg?id=50859218&width=2000&height=1500&coordinates=376%2C0%2C0%2C0",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.priyesranjan.beumate",
      website: "https://beumate.app/",
    },
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "DevSkillQuest",
    category: "Learning Platform",
    description:
      "Interactive learning platform for aspiring developers to master coding skills through hands-on projects and challenges.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    links: {
      website: "https://devskillquest.com/",
    },
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "The Weddings Chapter",
    category: "Wedding Planning Portal",
    description:
      "Premium wedding planning platform connecting couples with top vendors, venues, and services with beautiful portfolios.",
    tech: ["PHP", "Laravel", "MySQL", "Vue.js"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    links: {
      website: "https://theweddingschapter.com/",
    },
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "DeepFake Detection",
    category: "AI/ML Research",
    description:
      "Advanced deep learning model for detecting manipulated media using computer vision and neural networks.",
    tech: ["Python", "TensorFlow", "OpenCV", "Jupyter"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    links: {
      github: "https://github.com/priyesranjan/DeepFake",
    },
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "NooBot",
    category: "Automation Bot",
    description:
      "Intelligent Python automation bot for task scheduling, data processing, and workflow automation.",
    tech: ["Python", "Automation", "APIs", "Scheduling"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    links: {
      github: "https://github.com/priyesranjan/NooBot",
    },
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "DialogFlow Chatbot",
    category: "Conversational AI",
    description:
      "Intelligent chatbot using Google DialogFlow ES for natural language processing and customer support.",
    tech: ["DialogFlow", "NLP", "Node.js", "Express"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    links: {
      github: "https://github.com/priyesranjan/chatbot",
    },
    color: "from-orange-500 to-red-500",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: index * 0.05,
        ease: "power2.out",
      }
    );
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full group"
      style={{ opacity: 0 }}
    >
      <Card className="relative h-full overflow-hidden transition-all duration-300 bg-slate-900/40 backdrop-blur-xl border-white/10 hover:border-white/20">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden md:h-56">
          <motion.img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          {/* Subtle overlay on hover - not full color */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.15 : 0,
            }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20">
            {project.category}
          </div>

          {/* Icon - subtle appearance on hover */}
          {/* <motion.div
            animate={{
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <div className="flex items-center justify-center w-16 h-16 border rounded-full shadow-xl bg-white/10 backdrop-blur-md border-white/20"></div>
          </motion.div> */}
        </div>

        <CardContent className="relative p-6">
          {/* Subtle glow effect */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.15 : 0,
            }}
            transition={{ duration: 0.4 }}
            className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} blur-xl -z-10 rounded-2xl`}
          />

          {/* Title */}
          <h3 className="mb-3 text-xl font-bold text-white transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            {project.links.website && (
              <motion.a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20 hover:border-blue-500/30"
              >
                <Globe className="w-4 h-4" />
                <span>Visit</span>
              </motion.a>
            )}
            {project.links.playstore && (
              <motion.a
                href={project.links.playstore}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-400 transition-all duration-300 border rounded-lg bg-green-500/10 hover:bg-green-500/20 border-green-500/20 hover:border-green-500/30"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download</span>
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-400 transition-all duration-300 border rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20 hover:border-purple-500/30"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </motion.a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = ({ floatingCTARef }) => {
  const sectionRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const titleElement = document.querySelector(".projects-title");
    if (!titleElement) return;

    gsap.fromTo(
      titleElement,
      {
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: titleElement,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  // Scroll-triggered popup
  useEffect(() => {
    if (!sectionRef.current || hasShownPopup) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Show popup when user scrolls 40% into the section
      const scrolledIntoSection = viewportHeight - rect.top;
      const scrollPercentage = (scrolledIntoSection / sectionHeight) * 100;

      if (scrollPercentage > 40 && !hasShownPopup) {
        setShowPopup(true);
        setHasShownPopup(true);
        // Hide the floating button when popup shows
        if (floatingCTARef?.current) {
          floatingCTARef.current.hideButton();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownPopup, floatingCTARef]);

  const handleStartProject = () => {
    setShowPopup(false);
    // Open the FloatingCTA form
    if (floatingCTARef?.current) {
      floatingCTARef.current.openForm();
    }
  };

  const handleMaybeLater = () => {
    setShowPopup(false);
    // Show the floating button again
    if (floatingCTARef?.current) {
      floatingCTARef.current.showButton();
    }
  };

  return (
    <section ref={sectionRef} className="relative py-12 overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-blue-500/10 blur-3xl" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-green-500/10 border-green-500/20"
          >
            <Briefcase className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Our Work</span>
          </motion.div>

          <h2
            className="mb-6 text-4xl font-bold text-white projects-title md:text-5xl lg:text-6xl"
            style={{ opacity: 0 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 md:text-xl">
            Real solutions for real businesses - transforming ideas into successful products
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Scroll-Triggered Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
          onClick={handleMaybeLater}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative max-w-lg p-8 overflow-hidden border shadow-2xl md:p-10 bg-slate-900/95 border-slate-700/50 rounded-3xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleMaybeLater}
              className="absolute text-gray-400 transition-colors top-4 right-4 hover:text-white"
            >
              <i className="text-2xl fas fa-times"></i>
            </button>

            {/* Decorative gradient border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

            {/* Animated icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center w-16 h-16 mx-auto mb-6 shadow-2xl rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-cyan-500/50"
            >
              <i className="text-3xl text-white fas fa-rocket"></i>
            </motion.div>

            {/* Content */}
            <h3 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">
              Ready to Start Your{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                Project?
              </span>
            </h3>

            <p className="mb-8 text-center text-gray-400">
              Let&apos;s bring your vision to life! Get a free consultation and see how we can help
              transform your ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 text-lg font-semibold text-white transition-all duration-300 shadow-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 rounded-xl shadow-blue-500/40 hover:shadow-blue-500/60"
                onClick={handleStartProject}
              >
                <i className="mr-2 fas fa-paper-plane"></i>
                Start Your Project Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 text-lg font-semibold text-white transition-all border-2 bg-slate-800/50 border-slate-600/50 hover:bg-slate-800/70 hover:border-slate-500/70 rounded-xl"
                onClick={handleMaybeLater}
              >
                Maybe Later
              </motion.button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
              <i className="fas fa-check-circle text-cyan-400"></i>
              <span>Join 50+ satisfied clients</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
