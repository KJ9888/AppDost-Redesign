import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Users,
  Zap,
  Award,
  TrendingUp,
  Heart,
  Code,
  Lightbulb,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "We Handle Everything",
    description:
      "From the first idea to launching your product - we take care of every single step for you",
    color: "text-blue-400",
  },
  {
    icon: Zap,
    title: "Always Up-to-Date",
    description: "We use the newest and best technology to make sure you stay ahead of competition",
    color: "text-yellow-400",
  },
  {
    icon: TrendingUp,
    title: "Fast & Flexible",
    description: "Quick updates, constant communication, and we adapt to your changing needs",
    color: "text-green-400",
  },
  {
    icon: Award,
    title: "Top-Notch Quality",
    description: "We triple-check everything to make sure it works perfectly before you get it",
    color: "text-purple-400",
  },
  {
    icon: Rocket,
    title: "Grows With You",
    description: "Whether you are just starting or already big, our solutions scale as you grow",
    color: "text-pink-400",
  },
  {
    icon: Heart,
    title: "You Come First",
    description: "Your happiness and success is what matters most to us, every single day",
    color: "text-red-400",
  },
];

const values = [
  { icon: Lightbulb, title: "We Love Innovation", desc: "Fresh ideas always" },
  { icon: Users, title: "Team Players", desc: "We work together" },
  { icon: Code, title: "Always Learning", desc: "Getting better daily" },
  { icon: TrendingUp, title: "Growth Focused", desc: "Your success drives us" },
];

const CountUpStat = ({ end, suffix = "", prefix = "", label }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="mb-2 text-4xl font-bold md:text-5xl gradient-text">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="relative py-20 overflow-hidden md:py-24 bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Your Success is{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text">
              Our Mission
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            We are not just developers - we are your partners in growth. With passion, expertise,
            and dedication, we turn your digital dreams into reality
          </p>
        </div>

        {/* Stats - More Prominent */}
        <div className="grid max-w-6xl grid-cols-2 gap-8 mx-auto mb-24 md:grid-cols-4">
          <CountUpStat end={10} suffix="+" label="Web Projects" />
          <CountUpStat end={4} suffix="+" label="Mobile Apps" />
          <CountUpStat end={50} suffix="+" label="Happy Clients" />
          <CountUpStat end={100} suffix="%" label="Satisfaction" />
        </div>

        {/* Why Choose Us - Redesigned */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Why Partner With{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                AppDost
              </span>
            </h3>
            <p className="text-gray-400">
              We bring expertise, dedication, and innovation to every project
            </p>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="relative p-6 overflow-hidden transition-all duration-200 border cursor-pointer bg-slate-800/40 border-slate-700/50 rounded-xl backdrop-blur-sm group hover:bg-slate-800/60 hover:border-slate-600"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 transition-opacity duration-200 opacity-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 transition-transform duration-200 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-110">
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="mb-2 text-lg font-semibold text-white">{feature.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Culture - Redesigned */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                Core Values
              </span>
            </h3>
            <p className="text-gray-400">The principles that drive everything we do</p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="relative p-6 overflow-hidden text-center transition-all duration-200 border group bg-slate-800/40 border-slate-700/50 rounded-xl hover:bg-slate-800/60 hover:border-slate-600"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 transition-opacity duration-200 opacity-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform duration-200 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:scale-110">
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
