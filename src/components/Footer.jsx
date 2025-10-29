import { motion } from "framer-motion";
import {
  Rocket,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  Clock,
  Shield,
  Award,
  Users,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Mobile App Development", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
    { name: "IT Consulting", href: "#services" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-cyan-500" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-700" },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600",
    },
    { icon: Github, href: "#", label: "Github", color: "hover:bg-gray-700" },
  ];

  const trustBadges = [
    { icon: Shield, label: "100% Secure", description: "Data Protection" },
    { icon: Users, label: "50+ Clients", description: "Trusted Worldwide" },
    { icon: Award, label: "Top Rated", description: "5 Star Reviews" },
    { icon: Clock, label: "24/7 Support", description: "Always Available" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute rounded-full -top-40 -left-40 w-80 h-80 bg-blue-500/10 blur-3xl" />
        <div className="absolute rounded-full -top-20 right-20 w-60 h-60 bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 -translate-x-1/2 rounded-full left-1/2 w-96 h-96 bg-pink-500/5 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Company Info - Wider Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-[2px]">
                <div className="flex items-center justify-center w-full h-full bg-slate-900 rounded-xl">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">AppDost</h2>
                <p className="text-xs text-gray-400">Complete IT Solutions</p>
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-gray-400">
              Transforming businesses through innovative technology solutions. We specialize in web
              development, mobile apps, and digital experiences that drive growth and success.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-4 text-center rounded-lg glass">
                <div className="mb-1 text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  10+
                </div>
                <div className="text-xs text-gray-400 uppercase">Web Projects</div>
              </div>
              <div className="p-4 text-center rounded-lg glass">
                <div className="mb-1 text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  4+
                </div>
                <div className="text-xs text-gray-400 uppercase">Mobile Apps</div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="mb-3 text-sm font-semibold text-gray-300">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative inline-flex items-center text-gray-400 transition-colors group hover:text-white"
                  >
                    <span className="absolute left-0 w-0 h-0.5 transition-all duration-300 bg-blue-400 group-hover:w-5 -translate-x-6" />
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="relative inline-flex items-center text-gray-400 transition-colors group hover:text-white"
                  >
                    <span className="absolute left-0 w-0 h-0.5 transition-all duration-300 bg-purple-400 group-hover:w-5 -translate-x-6" />
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="mb-1 text-xs font-medium text-gray-500 uppercase">Email</p>
                  <a
                    href="mailto:contact@appdost.in"
                    className="block text-sm text-gray-300 truncate transition-colors hover:text-blue-400"
                  >
                    contact@appdost.in
                  </a>
                  <a
                    href="mailto:hr@appdost.in"
                    className="block text-sm text-gray-300 truncate transition-colors hover:text-blue-400"
                  >
                    hr@appdost.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors rounded-lg bg-green-500/10 group-hover:bg-green-500/20">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="mb-1 text-xs font-medium text-gray-500 uppercase">Phone</p>
                  <a
                    href="tel:+917635075422"
                    className="block text-sm text-gray-300 transition-colors hover:text-green-400"
                  >
                    +91 76350 75422
                  </a>
                  <a
                    href="tel:+911169290750"
                    className="block text-sm text-gray-300 transition-colors hover:text-green-400"
                  >
                    +91 11 6929 0750
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 group">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-xs font-medium text-gray-500 uppercase">Location</p>
                  <p className="text-sm text-gray-300">HQ: Banka, Bihar</p>
                  <p className="text-sm text-gray-400">Offices: Motihari, Patna</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 border rounded-lg glass border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <p className="text-sm font-semibold text-white">Working Hours</p>
                </div>
                <p className="text-sm text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="py-10 border-t border-white/10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-5 overflow-hidden text-center transition-all duration-300 border rounded-xl glass border-white/10 group hover:border-white/20 hover:bg-white/5"
              >
                <div className="relative z-10">
                  <div className="flex justify-center mb-3">
                    <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                      <badge.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h4 className="mb-1 text-base font-bold text-white">{badge.label}</h4>
                  <p className="text-xs text-gray-500">{badge.description}</p>
                </div>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} <span className="font-semibold text-white">AppDost</span> - Complete
                IT Solutions. All rights reserved.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Built with <span className="text-red-500">❤</span> in India
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:gap-6">
              <a href="#privacy" className="text-gray-400 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <span className="text-gray-700">•</span>
              <a href="#terms" className="text-gray-400 transition-colors hover:text-white">
                Terms of Service
              </a>
              <span className="text-gray-700">•</span>
              <a href="#sitemap" className="text-gray-400 transition-colors hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
