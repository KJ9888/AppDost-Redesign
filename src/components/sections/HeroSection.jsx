import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import {} from "../ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // Real-time active users state
  const [activeUsers, setActiveUsers] = useState(1);
  const [userGrowth, setUserGrowth] = useState(0);

  useEffect(() => {
    // Simulate real-time user tracking
    const baseUsers = Math.floor(Math.random() * 5) + 1; // Random starting point 1-5
    setActiveUsers(baseUsers);

    // Update active users every 3-5 seconds
    const userInterval = setInterval(() => {
      const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
      setActiveUsers((prev) => {
        const newCount = Math.max(1, prev + change); // Minimum 1 user
        const growth = prev > 0 ? (((newCount - prev) / prev) * 100).toFixed(0) : 0;
        setUserGrowth(growth);
        return newCount;
      });
    }, Math.random() * 2000 + 3000); // Random interval 3-5 seconds

    return () => clearInterval(userInterval);
  }, []);

  useEffect(() => {
    // Defer GSAP animations slightly to prioritize initial render
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Animate main title
        gsap.from(".hero-title", {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        });

        // Animate subtitle
        gsap.from(".hero-subtitle", {
          opacity: 0,
          y: 30,
          duration: 0.5,
          delay: 0.3,
          ease: "power2.out",
        });

        // Animate stats
        gsap.from(".hero-stat", {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          delay: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        });

        // Animate visual mockup
        gsap.from(".hero-visual", {
          opacity: 0,
          x: 50,
          scale: 0.95,
          duration: 0.6,
          delay: 0.6,
          ease: "power3.out",
        });
      }, containerRef);

      return () => ctx.revert();
    }, 100); // Defer by 100ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative flex items-center justify-center min-h-screen pt-20 pb-12 overflow-hidden bg-slate-900"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient Orbs - Subtle Background Glow */}
      <div className="absolute rounded-full top-20 left-20 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute delay-1000 rounded-full bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Floating Dots - Reduced for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-purple-400 shadow-blue-500/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content - Split Layout */}
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* LEFT SIDE - Text Content */}
          <div className="space-y-8 text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 border rounded-full shadow-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border-white/30 shadow-blue-500/20"
            >
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">
                 Trusted by 50+ Businesses | Award-Winning Digital Solutions
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="space-y-2">
              <div className="hero-title">
                <span className="block text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Transform Your Vision Into
                </span>
              </div>
              <div className="hero-title">
                <span className="text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                  Digital Success
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-lg leading-relaxed text-gray-300 hero-subtitle">
              We create beautiful digital experiences that your customers love.{" "}
              <span className="font-semibold text-blue-400">Simple. Fast. Effective.</span>
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { label: "Happy Clients", value: "50+", gradient: "from-blue-500 to-cyan-400" },
                { label: "Projects", value: "15+", gradient: "from-purple-500 to-pink-400" },
                { label: "Countries", value: "5+", gradient: "from-green-500 to-emerald-400" },
                { label: "Success Rate", value: "100%", gradient: "from-orange-500 to-red-400" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-left hero-stat"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Visual Illustrations */}
          <div className="relative hero-visual hidden lg:block h-[600px]">
            {/* Main Mockup Container */}
            <motion.div
              className="relative z-10 flex items-center justify-center h-full"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Modern Dashboard/App Preview */}
              <div className="relative w-full max-w-xl">
                {/* Glassmorphism Card */}
                <div className="relative overflow-hidden border shadow-2xl rounded-3xl border-white/10 backdrop-blur-sm bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                  {/* Stunning Tech Image - More Impactful */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&q=90"
                      alt="AI Technology"
                      className="object-cover w-full h-full"
                    />

                    {/* Modern gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-pink-600/40 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                    {/* Animated Stats/Metrics Overlay */}
                    <div className="absolute flex gap-3 top-6 left-6 right-6">
                      <motion.div
                        className="flex-1 p-4 border bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <div className="text-3xl font-bold text-white">99.9%</div>
                        <div className="text-xs text-gray-300">Client Satisfaction Rate</div>
                        <div className="mt-2 h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                            initial={{ width: 0 }}
                            animate={{ width: "98%" }}
                            transition={{ delay: 1.5, duration: 1.5 }}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex-1 p-4 border bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-3xl font-bold text-white">{activeUsers}</div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-xs text-gray-300">Active Users Now</div>
                        <div className="flex items-center gap-1 mt-2">
                          <svg
                            className={`w-3 h-3 ${
                              userGrowth >= 0 ? "text-green-400" : "text-red-400"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span
                            className={`text-xs font-semibold ${
                              userGrowth >= 0 ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {userGrowth > 0 ? "+" : ""}
                            {userGrowth}%
                          </span>
                          <span className="ml-1 text-xs text-gray-400">vs last check</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Action Card */}
                    <motion.div
                      className="absolute p-5 border bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-sm font-semibold text-white">Project Dashboard</div>
                          <div className="text-xs text-gray-400">Real-time analytics</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400">Live</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-2 overflow-hidden rounded-full bg-blue-500/30">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ delay: 1.8, duration: 1 }}
                          />
                        </div>
                        <div className="flex-1 h-2 overflow-hidden rounded-full bg-purple-500/30">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            initial={{ width: 0 }}
                            animate={{ width: "60%" }}
                            transition={{ delay: 2, duration: 1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Stronger Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 -z-10"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20 -z-20 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Floating Tech Badges - Improved Position */}
            <motion.div
              className="absolute p-5 shadow-2xl top-16 -left-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-blue-500/40"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute p-5 shadow-2xl bottom-20 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-purple-500/40"
              animate={{
                y: [0, 12, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>

            {/* Smaller Floating Code Badge */}
            <motion.div
              className="absolute px-4 py-3 border shadow-lg top-32 right-8 bg-slate-800/90 backdrop-blur-sm border-purple-400/30 rounded-xl"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <code className="font-mono text-sm text-purple-300">{"</> Code"}</code>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -translate-x-1/2 bottom-8 left-1/2"
      >
        <div className="flex items-start justify-center w-6 h-10 p-2 border-2 rounded-full border-white/30">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
