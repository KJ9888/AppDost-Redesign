import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe, Heart, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "proj_beumate_2024",
    title: "BEU Mate - Bihar Engineering",
    subtitle: "AI-Powered Educational Platform",
    description:
      "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation. Available as both web and mobile app.",
    image: "https://play-lh.googleusercontent.com/VPmyh1MCkxc9ier9zI3KXZ-jg8vjg8DXB4hhnl9PSX0gWn2qaCXS2r-uZfkm4NnQvXarVoiDUYiwstkVW7t4",
    fallbackGradient: "from-blue-600 to-purple-600",
    category: "Mobile Apps",
    tech: ["React Native", "Node.js", "AI/ML", "Firebase", "MongoDB"],
    features: [
      "AI-powered study recommendations",
      "Career guidance system",
      "Placement preparation tools",
      "Progress tracking dashboard",
      "Interactive learning modules",
    ],
    stats: {
      users: "5000+",
      rating: "4.8",
      downloads: "10K+"
    },
    links: {
      demo: "https://beumate.app/",
    },
  },
  {
    id: "proj_devskillquest_2024",
    title: "DevSkillQuest",
    subtitle: "Interactive Learning Platform",
    description:
      "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, coding challenges, and industry-relevant content.",
    image: "https://devskill.com/img/hero/hero.png",
    fallbackGradient: "from-cyan-600 to-teal-600",
    category: "Web Development",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket"],
    features: [
      "Hands-on coding challenges",
      "Real-time collaboration",
      "Project-based learning",
      "Skill assessment system",
      "Industry mentor network",
    ],
    stats: {
      users: "3000+",
      rating: "4.9",
      projects: "500+"
    },
    links: {
      demo: "https://devskillquest.com/",
    },
  },
  {
    id: "proj_weddingschapter_2024",
    title: "The Weddings Chapter",
    subtitle: "Premium Wedding Planning Portal",
    description:
      "A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor portfolios, booking management, budget tracking, and event coordination.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWj8xoojpPDZIgkYp0muJkVu5zRHWLrJNag&s",
    fallbackGradient: "from-pink-600 to-rose-600",
    category: "E-commerce",
    tech: ["PHP", "Laravel", "MySQL", "Vue.js", "Google Maps API"],
    features: [
      "Vendor marketplace",
      "Budget management tools",
      "Event timeline planner",
      "Guest list management",
      "Real-time booking system",
    ],
    stats: {
      vendors: "200+",
      rating: "4.7",
      bookings: "1K+"
    },
    links: {
      demo: "https://theweddingschapter.com/",
    },
  },
];

const categories = ["All Projects", "Web Development", "Mobile Apps", "E-commerce"];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = selectedCategory === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                Portfolio
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
              Real projects. Real results. See how we&apos;ve helped businesses transform their
              digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-slate-800/50 text-gray-300 border border-cyan-500/30 hover:bg-slate-800/70 hover:border-cyan-400/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Project count */}
          
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-950">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Main Project Card */}
                  <div className="relative h-full overflow-hidden transition-all duration-500 border bg-slate-900/50 border-cyan-500/30 rounded-3xl backdrop-blur-sm hover:bg-slate-900/80 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                    
                    {/* Project Image/Visual */}
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <div
                        className={`flex items-center justify-center w-full h-full bg-gradient-to-br ${project.fallbackGradient} transition-all duration-700 group-hover:scale-110`}
                      >
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 object-contain w-full h-full p-8 transition-transform duration-700 bg-white group-hover:scale-110"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        )}
                        {!project.image && (
                          <div className="text-center">
                            {project.category === "Mobile Apps" ? (
                              <Smartphone className="w-20 h-20 mx-auto mb-4 text-white/90" />
                            ) : (
                              <Globe className="w-20 h-20 mx-auto mb-4 text-white/90" />
                            )}
                          </div>
                        )}
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent group-hover:opacity-100" />
                      
                      {/* Category badge */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="absolute px-4 py-2 font-semibold text-white border rounded-lg bg-slate-950/80 backdrop-blur-md top-4 left-4 border-cyan-500/30"
                      >
                        {project.category}
                      </motion.div>

                      {/* Quick stats overlay - shows on hover */}
                      <motion.div 
                        className="absolute inset-x-0 bottom-0 flex justify-around px-6 py-4 transition-all duration-500 transform translate-y-full border-t bg-slate-950/90 backdrop-blur-md border-cyan-500/30 group-hover:translate-y-0"
                      >
                        {Object.entries(project.stats).map(([key, value], i) => (
                          <div key={i} className="text-center">
                            <div className="text-xl font-bold text-cyan-400">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6 md:p-8">
                      <div className="mb-2 text-xs font-semibold tracking-widest uppercase text-cyan-400">
                        {project.subtitle}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                        {project.title}
                      </h3>
                      <p className="mb-6 text-gray-400 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                            className="px-3 py-1 text-xs font-semibold transition-all duration-300 border rounded-lg bg-slate-800/50 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/50"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-3 py-1 text-xs font-semibold text-gray-400">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex items-center gap-2 px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 group/btn rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                        >
                          <span className="relative z-10">View Project</span>
                          <ExternalLink className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover/btn:opacity-100" />
                        </a>
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 border group/btn rounded-xl border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-105"
                          >
                            <Github className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 transition-all duration-500 rounded-bl-full opacity-0 bg-gradient-to-br from-cyan-500/20 to-transparent group-hover:opacity-100" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-20 text-center"
            >
              <Globe className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <h3 className="mb-2 text-2xl font-bold text-white">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main CTA Card */}
            <div className="relative p-1 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20">
              <div className="relative p-8 md:p-12 bg-slate-900/95 rounded-[22px] backdrop-blur-xl">
                <div className="mb-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                  >
                    <Heart className="w-10 h-10 text-cyan-400" />
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                  >
                    Ready to Start Your{" "}
                    <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                      Project?
                    </span>
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-300 md:text-xl"
                  >
                    Join our growing list of satisfied clients and let&apos;s build something amazing together
                  </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <a
                    href="/contact"
                    className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 group rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:opacity-100" />
                  </a>
                  <a
                    href="/services"
                    className="px-8 py-4 font-semibold text-white transition-all duration-300 border group rounded-xl border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Our Services
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
