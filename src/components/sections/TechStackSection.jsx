import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    name: "React",
    icon: "fab fa-react",
    color: "#61DAFB",
    category: "Frontend",
    description: "UI Development",
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "#339933",
    category: "Backend",
    description: "Server Runtime",
  },
  {
    name: "Python",
    icon: "fab fa-python",
    color: "#3776AB",
    category: "Backend",
    description: "AI & Data Science",
  },
  {
    name: "MongoDB",
    icon: "fas fa-leaf",
    color: "#47A248",
    category: "Database",
    description: "NoSQL Database",
  },
  {
    name: "AWS",
    icon: "fab fa-aws",
    color: "#FF9900",
    category: "Cloud",
    description: "Cloud Computing",
  },
  {
    name: "Docker",
    icon: "fab fa-docker",
    color: "#2496ED",
    category: "DevOps",
    description: "Containerization",
  },
  {
    name: "TypeScript",
    icon: "fas fa-code",
    color: "#3178C6",
    category: "Language",
    description: "Type Safety",
  },
  {
    name: "GraphQL",
    icon: "fas fa-project-diagram",
    color: "#E10098",
    category: "API",
    description: "Query Language",
  },
  {
    name: "Laravel",
    icon: "fab fa-laravel",
    color: "#FF2D20",
    category: "Backend",
    description: "PHP Framework",
  },
  {
    name: "Firebase",
    icon: "fas fa-fire",
    color: "#FFCA28",
    category: "Backend",
    description: "BaaS Platform",
  },
  {
    name: "HTML5",
    icon: "fab fa-html5",
    color: "#E34F26",
    category: "Frontend",
    description: "Markup Language",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    color: "#1572B6",
    category: "Frontend",
    description: "Styling",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    color: "#F7DF1E",
    category: "Language",
    description: "Programming Language",
  },
  {
    name: "Angular",
    icon: "fab fa-angular",
    color: "#DD0031",
    category: "Frontend",
    description: "Web Framework",
  },
  {
    name: "Vue.js",
    icon: "fab fa-vuejs",
    color: "#4FC08D",
    category: "Frontend",
    description: "Progressive Framework",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    color: "#F05032",
    category: "DevOps",
    description: "Version Control",
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
    color: "#6e40c9",
    category: "DevOps",
    description: "Code Hosting",
  },
  {
    name: "npm",
    icon: "fab fa-npm",
    color: "#CB3837",
    category: "DevOps",
    description: "Package Manager",
  },
];

const TechBubble = ({ tech, index, isAnyHovered, setAnyHovered }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnyHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setAnyHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="relative group perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
          transition: "transform 0.3s ease-out",
        }}
      >
        <motion.div
          className="relative flex flex-col items-center justify-center w-32 h-32 gap-3 p-4 overflow-hidden transition-all duration-300 ease-out border-2 md:w-36 md:h-36 rounded-2xl bg-slate-800/40 border-slate-700/50 hover:border-slate-600/70 backdrop-blur-sm hover:shadow-2xl"
          animate={{
            y: isHovered ? 0 : [0, -20, 0],
          }}
          transition={{
            y: {
              duration: 1.5,
              ease: "easeInOut",
              repeat: isHovered ? 0 : Infinity,
              repeatDelay: 0.8,
              delay: index * 0.1, // Wave effect delay based on index
            },
          }}
        >
          {/* Animated background gradient */}
          <div
            className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-30"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${tech.color}, transparent 70%)`,
            }}
          />

          {/* Icon Container with background */}
          <div
            className="relative z-10 flex items-center justify-center w-16 h-16 transition-all duration-300 md:w-20 md:h-20 rounded-xl"
            style={{
              backgroundColor: isHovered ? `${tech.color}15` : "transparent",
              boxShadow: isHovered ? `0 0 25px ${tech.color}30` : "none",
            }}
          >
            <motion.i
              className={`${tech.icon} text-4xl md:text-5xl`}
              style={{
                color: isHovered ? tech.color : isAnyHovered ? "#6b7280" : tech.color,
              }}
              animate={{
                scale: isHovered ? [1, 1.15, 1.1] : isAnyHovered ? 1 : [1, 1.08, 1],
                opacity: isHovered ? 1 : isAnyHovered ? 0.5 : [0.6, 1, 0.6],
                filter: isHovered
                  ? `drop-shadow(0 0 8px ${tech.color})`
                  : isAnyHovered
                  ? "brightness(0.5)"
                  : [
                      `brightness(0.7) drop-shadow(0 0 2px ${tech.color}40)`,
                      `brightness(1) drop-shadow(0 0 6px ${tech.color}60)`,
                      `brightness(0.7) drop-shadow(0 0 2px ${tech.color}40)`,
                    ],
              }}
              transition={{
                duration: isHovered ? 0.5 : 2.5,
                ease: "easeInOut",
                repeat: isHovered || isAnyHovered ? 0 : Infinity,
                repeatDelay: isHovered || isAnyHovered ? 0 : 0.3,
              }}
            />
          </div>

          {/* Name */}
          <span
            className="relative z-10 text-xs font-semibold text-center transition-all duration-300 ease-out"
            style={{
              color: isHovered ? tech.color : "#9ca3af",
            }}
          >
            {tech.name}
          </span>

          {/* Category badge - appears on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-bold rounded-full whitespace-nowrap z-20 backdrop-blur-sm"
                style={{
                  backgroundColor: `${tech.color}30`,
                  color: tech.color,
                  border: `1px solid ${tech.color}50`,
                }}
              >
                {tech.category}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sparkle effects on hover */}
          {isHovered && (
            <>
              <motion.div
                className="absolute w-1 h-1 rounded-full top-2 right-2"
                style={{ backgroundColor: tech.color }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
              <motion.div
                className="absolute w-1 h-1 rounded-full bottom-3 left-3"
                style={{ backgroundColor: tech.color }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  delay: 0.2,
                }}
              />
            </>
          )}
        </motion.div>

        {/* Enhanced glow effect */}
        <div
          className="absolute inset-0 transition-all duration-500 ease-out opacity-0 rounded-2xl blur-2xl group-hover:opacity-60 -z-10 group-hover:scale-110"
          style={{ backgroundColor: tech.color }}
        />

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-white whitespace-nowrap z-30 pointer-events-none"
            >
              {tech.description}
              <div className="absolute w-2 h-2 transform rotate-45 -translate-x-1/2 border-t border-l -top-1 left-1/2 bg-gray-900/95 border-white/10" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const TechStackSection = () => {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState("All");
  const [isAnyHovered, setAnyHovered] = useState(false);

  const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "DevOps", "Language"];

  const filteredTechs =
    filter === "All" ? technologies : technologies.filter((tech) => tech.category === filter);

  useEffect(() => {
    // Floating animation for background particles
    gsap.to(".floating-particle", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 1.5,
        from: "random",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 overflow-hidden bg-slate-900">
      {/* Enhanced Background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]" /> */}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full floating-particle bg-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 border rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-cyan-500/30 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-cyan-500/10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <i className="fas fa-code text-cyan-400"></i>
            </motion.div>
            <span className="text-sm font-semibold tracking-wide text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Our Technology Arsenal
            </span>
          </motion.div>

          <motion.h2
            className="mb-6 text-5xl font-black leading-tight text-white tech-title md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block"></span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text">
                Technologies We Master
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-sm"
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text"></span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We leverage the most powerful and modern tech stack to build{" "}
            <span className="font-semibold text-cyan-400">scalable</span>,{" "}
            <span className="font-semibold text-blue-400">robust</span>, and{" "}
            <span className="font-semibold text-purple-400">innovative</span> solutions that drive
            results
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 scale-105"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Tech Grid with AnimatePresence for smooth filtering */}
        <motion.div
          layout
          className="flex flex-wrap items-center justify-center max-w-6xl gap-6 mx-auto mb-16 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech, index) => (
              <TechBubble
                key={tech.name}
                tech={tech}
                index={index}
                isAnyHovered={isAnyHovered}
                setAnyHovered={setAnyHovered}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-lg text-gray-400">
            ...and many more cutting-edge tools and frameworks
          </p>
          <motion.div
            className="inline-flex items-center gap-2 cursor-pointer text-cyan-400 hover:text-cyan-300 group"
            whileHover={{ x: 5 }}
          >
            <i className="transition-transform fas fa-sparkles group-hover:rotate-12"></i>
            <span className="text-sm font-medium">Constantly expanding our tech arsenal</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
