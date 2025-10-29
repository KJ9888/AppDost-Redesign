import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Toast = ({ isVisible, onClose, type = "success", message, title }) => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (isVisible && type === "success") {
      // Generate confetti particles
      const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 400 - 200,
        y: Math.random() * -200 - 100,
        rotation: Math.random() * 360,
        color: ["#06B6D4", "#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B"][
          Math.floor(Math.random() * 5)
        ],
      }));
      setConfetti(particles);

      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, type, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed top-8 right-8 z-[200] max-w-md"
        >
          <div className="relative p-6 overflow-hidden border shadow-2xl bg-slate-900/95 border-slate-700/50 rounded-2xl backdrop-blur-xl">
            {/* Confetti Animation */}
            {type === "success" &&
              confetti.map((particle) => (
                <motion.div
                  key={particle.id}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                  }}
                  animate={{
                    x: particle.x,
                    y: particle.y,
                    opacity: 0,
                    rotate: particle.rotation,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  className="absolute w-2 h-2 rounded-full top-1/2 left-1/2"
                  style={{ backgroundColor: particle.color }}
                />
              ))}

            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute text-gray-400 transition-colors top-4 right-4 hover:text-white"
            >
              <i className="text-xl fas fa-times"></i>
            </button>

            <div className="flex items-start gap-4 pr-6">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
                className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full shadow-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-cyan-500/50"
              >
                <motion.i
                  className="text-2xl text-white fas fa-check"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-1 text-xl font-bold text-white"
                >
                  {title || "🎉 Congratulations!"}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-gray-400"
                >
                  {message ||
                    "Your message has been sent successfully! We'll get back to you soon."}
                </motion.p>
              </div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 origin-left bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
              style={{ width: "100%" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
