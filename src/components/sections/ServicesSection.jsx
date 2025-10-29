import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  Database,
  Cloud,
  Shield,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS & Android apps that users love to use daily",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/50",
    features: ["Cross-Platform", "App Store Ready", "Push Notifications"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, responsive websites that convert visitors to customers",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    borderColor: "border-purple-500/50",
    features: ["SEO Optimized", "Mobile Responsive", "CMS Integration"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful interfaces that provide exceptional user experience",
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
    borderColor: "border-pink-500/50",
    features: ["Wireframing", "Prototyping", "User Research"],
  },
  {
    icon: Database,
    title: "Custom Software",
    description: "Tailored solutions that streamline your business operations",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    borderColor: "border-green-500/50",
    features: ["API Integration", "Automation", "Cloud-Based"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure, scalable infrastructure for modern businesses",
    color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/50",
    features: ["AWS/Azure", "Auto-Scaling", "24/7 Monitoring"],
  },
  {
    icon: Shield,
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your online presence",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    borderColor: "border-orange-500/50",
    features: ["SEO/SEM", "Social Media", "Content Strategy"],
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div
        className={`relative h-full p-8 rounded-2xl bg-slate-800/50 border ${service.borderColor} backdrop-blur-sm overflow-hidden transition-all duration-200 hover:bg-slate-800/70 hover:shadow-xl`}
      >
        {/* Simple gradient background on hover */}
        <div
          className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-200`}
        />

        {/* Icon */}
        <div className="mb-6">
          <div className={`inline-flex p-4 rounded-xl ${service.color} shadow-lg`}>
            <Icon className="text-white w-7 h-7" />
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>

          <p className="mb-6 text-sm leading-relaxed text-gray-400">{service.description}</p>

          {/* Features List */}
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="flex-shrink-0 w-4 h-4 text-green-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom accent */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
        />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative py-12 overflow-hidden md:py-20 bg-slate-900">
      {/* Simplified Background - no animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 rounded-full top-1/4 w-96 h-96 bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 rounded-full bottom-1/4 w-96 h-96 bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header - No animations for instant display */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 border rounded-full border-blue-500/30 bg-blue-500/10">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">OUR SERVICES</span>
            </div>

            <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Everything You Need to{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                Grow Online
              </span>
            </h2>

            <p className="text-lg text-gray-400">
              From stunning websites to powerful mobile apps - we have got all your digital needs
              covered
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
