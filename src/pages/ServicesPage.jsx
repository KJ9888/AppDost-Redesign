import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  Database,
  Cloud,
  Shield,
  CheckCircle,
  ArrowRight,
  Code,
  Zap,
  Target,
  Rocket,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Custom Android applications built with the latest technologies to bring your ideas to life.",
    features: ["Native & Hybrid Apps", "Play Store Deployment", "App Maintenance & Support"],
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/50",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive and scalable web applications tailored to your business needs.",
    features: ["Responsive Web Design", "E-commerce Solutions", "Progressive Web Apps"],
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/50",
  },
  {
    icon: Palette,
    title: "UI/UX Development",
    description: "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
    features: ["User Research & Testing", "Wireframing & Prototyping", "Brand Identity Design"],
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/50",
  },
  {
    icon: Database,
    title: "CRM Software",
    description:
      "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
    features: ["Custom CRM Development", "Integration Services", "Training & Support"],
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/50",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["AWS, Azure, Google Cloud", "Migration Services", "Performance Optimization"],
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/50",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with robust security solutions and best practices.",
    features: ["Security Audits", "Threat Protection", "Compliance Solutions"],
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/50",
  },
];

const developmentProcess = [
  {
    icon: Target,
    title: "Discovery",
    desc: "We understand your requirements, goals, and target audience to create a strategic plan.",
    color: "blue",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Our designers create intuitive and beautiful interfaces that enhance user experience.",
    color: "purple",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Our expert developers bring designs to life using cutting-edge technologies.",
    color: "cyan",
  },
  {
    icon: Settings,
    title: "Testing",
    desc: "Rigorous testing ensures quality, performance, and security of your solution.",
    color: "green",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "We launch your solution and ensure smooth deployment to production.",
    color: "pink",
  },
  {
    icon: Zap,
    title: "Support",
    desc: "Ongoing maintenance and support to keep your solution running smoothly.",
    color: "orange",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />

        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text">
                Services
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
              Comprehensive IT Solutions Tailored to Your Business Needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white">What We Offer</h2>
            <p className="text-lg text-gray-300">
              From stunning websites to powerful mobile apps - we have got all your digital needs
              covered
            </p>
          </motion.div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative p-8 transition-all duration-300 border ${service.borderColor} bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 group`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-300">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-slate-900/50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white">Our Development Process</h2>
            <p className="text-lg text-gray-300">
              A proven methodology that ensures your project succeeds from concept to launch
            </p>
          </motion.div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-8 transition-all duration-300 border bg-slate-800/40 border-blue-500/30 rounded-2xl backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-400/50"
              >
                {/* Step number */}
                <div className="absolute text-6xl font-black text-blue-400 opacity-5 -top-4 -right-4">
                  {index + 1}
                </div>

                <div className="relative">
                  <step.icon className="w-12 h-12 mb-6 text-blue-400" />
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        
        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main CTA Card */}
            <div className="relative p-1 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20">
              <div className="relative p-8 md:p-12 bg-slate-900/95 rounded-[22px] backdrop-blur-xl">
                <div className="mb-10 text-center">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                  >
                    Let&apos;s Build Something{" "}
                    <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text">
                      Amazing Together
                    </span>
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-gray-300 md:text-xl"
                  >
                    Contact us today to discuss your project requirements and get a free consultation
                  </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-4 mb-12"
                >
                  <a
                    href="/contact"
                    className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 group rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:opacity-100" />
                  </a>
                  <a
                    href="/portfolio"
                    className="px-8 py-4 font-semibold text-white transition-all duration-300 border group rounded-xl border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      View Our Work
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </motion.div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                  >
                    <div className="mb-2 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text">
                      50+
                    </div>
                    <div className="text-sm font-medium text-gray-400">Happy Clients</div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                  >
                    <div className="mb-2 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text">
                      15+
                    </div>
                    <div className="text-sm font-medium text-gray-400">Projects Delivered</div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-center"
                  >
                    <div className="mb-2 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text">
                      100%
                    </div>
                    <div className="text-sm font-medium text-gray-400">Satisfaction Rate</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
