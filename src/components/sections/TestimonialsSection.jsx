import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    role: "Founder, Bloom Boutique",
    quote:
      "They transformed our online store. Sales went up and our customers love the new experience! So smooth and easy.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Rahul Verma",
    role: "CEO, UrbanFit",
    quote:
      "Professional, fast, and the design is beautiful. The process felt effortless end-to-end. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Simran Kaur",
    role: "Marketing Head, EduSpark",
    quote:
      "Our website now tells our story perfectly. Engagement and leads increased from day one.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  // const prev = () => setIndex((i) => (i - 1 + total) % total);
  // const next = () => setIndex((i) => (i + 1) % total);

  const current = useMemo(() => TESTIMONIALS[index], [index]);

  return (
    <section className="relative py-12 overflow-hidden bg-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 border rounded-full bg-indigo-500/10 border-indigo-500/30">
            <Quote className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-300">What our clients say</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
            Loved by{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
              businesses like yours
            </span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* <button
            aria-label="Previous"
            onClick={prev}
            className="absolute p-3 text-white transition-all duration-200 -translate-y-1/2 border rounded-full -left-3 md:-left-10 top-1/2 bg-slate-800/60 hover:bg-slate-700/80 border-slate-700/50 hover:border-slate-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            aria-label="Next"
            onClick={next}
            className="absolute p-3 text-white transition-all duration-200 -translate-y-1/2 border rounded-full -right-3 md:-right-10 top-1/2 bg-slate-800/60 hover:bg-slate-700/80 border-slate-700/50 hover:border-slate-600"
          >
            <ChevronRight className="w-5 h-5" />
          </button> */}

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3 }}
                className="p-8 border md:p-12 bg-slate-800/40 border-slate-700/50 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-16 h-16 rounded-full ring-4 ring-indigo-500/20"
                  />
                  <div className="text-center md:text-left">
                    <p className="text-xl leading-relaxed text-gray-200 md:text-2xl">
                      {current.quote}
                    </p>
                    <div className="mt-4 font-semibold text-white">{current.name}</div>
                    <div className="text-sm text-gray-400">{current.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  i === index ? "bg-indigo-400 w-8" : "bg-slate-600 w-2.5"
                } hover:bg-indigo-300`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
