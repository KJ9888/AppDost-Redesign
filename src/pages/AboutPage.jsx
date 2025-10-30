import { motion } from "framer-motion";
import {
  Target,
  Heart,
  TrendingUp,
  Users,
  GraduationCap,
  Rocket,
  DollarSign,
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Empowering{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text">
                Rural India
              </span>
              <br />
              with Technology
            </h1>
            <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
              Making professional IT solutions affordable and accessible for rural businesses,
              educational institutions, and startups across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white">
              Our Mission: Digital Inclusion for All
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              We believe technology should reach every corner of India. That&apos;s why we&apos;re committed
              to providing world-class IT solutions at prices that rural entrepreneurs, schools, and
              startups can afford.
            </p>
          </motion.div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Rural Businesses",
                desc: "Helping local businesses transform digitally with affordable websites, mobile apps, and e-commerce solutions. Bringing your village shop to the global market.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: GraduationCap,
                title: "Education",
                desc: "Empowering schools, colleges, and training centers with learning management systems, student portals, and educational apps at special discounted rates.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Rocket,
                title: "Startups",
                desc: "Supporting new entrepreneurs with cost-effective MVP development, scalable solutions, and technical guidance to turn ideas into successful businesses.",
                color: "from-pink-500 to-rose-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 transition-all duration-300 border bg-slate-800/40 border-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600/70"
              >
                <div
                  className={`inline-flex p-4 mb-6 rounded-xl bg-gradient-to-br ${item.color}`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">{item.title}</h3>
                <p className="leading-relaxed text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold text-white">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Founded in 2025, AppDost was born from a simple yet powerful vision: to bridge the
                  digital divide in rural India. We noticed that quality IT services were either too
                  expensive or unavailable for small businesses, schools, and entrepreneurs in rural
                  areas.
                </p>
                <p className="leading-relaxed">
                  As developers who understand the challenges faced by underserved communities, we
                  decided to create a company that puts social impact alongside profit. We believe
                  that every business owner, teacher, and startup founder deserves access to
                  professional technology solutions.
                </p>
                <p className="leading-relaxed">
                  Today, we&apos;re proud to serve clients from both urban and rural areas, offering the
                  same quality of service but with pricing models designed to be truly affordable for
                  everyone.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "Rural Businesses Served", color: "blue" },
                  { value: "15+", label: "Projects Completed", color: "purple" },
                  { value: "10+", label: "Educational Institutions", color: "pink" },
                  { value: "40%", label: "Lower Than Market Rates", color: "green" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 text-center border bg-slate-800/40 border-slate-700/50 rounded-xl backdrop-blur-sm"
                  >
                    <div className="mb-2 text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white">Our Core Values</h2>
            <p className="text-lg text-gray-300">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: "Affordability",
                desc: "Fair pricing that doesn't compromise on quality. Special packages for rural areas and non-profits.",
              },
              {
                icon: Users,
                title: "Accessibility",
                desc: "Easy-to-use solutions with training and support in local languages. No technical jargon.",
              },
              {
                icon: Award,
                title: "Quality",
                desc: "Professional-grade solutions that compete with expensive alternatives. No compromise on excellence.",
              },
              {
                icon: TrendingUp,
                title: "Growth",
                desc: "We grow when our clients grow. Your success is our success.",
              },
              {
                icon: GraduationCap,
                title: "Education",
                desc: "Free training, documentation, and ongoing support to make technology easy to adopt.",
              },
              {
                icon: Heart,
                title: "Social Impact",
                desc: "Beyond business - we're here to create positive change in rural communities.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-6 transition-all duration-200 border bg-slate-800/40 border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600/70"
              >
                <value.icon className="w-10 h-10 mb-4 text-purple-400" />
                <h3 className="mb-3 text-xl font-bold text-white">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white">Our Commitment to You</h2>
            <p className="text-lg text-gray-300">What you can expect when you work with AppDost</p>
          </motion.div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "For Rural Businesses",
                features: [
                  "40-60% lower pricing than market rates",
                  "Flexible payment plans",
                  "Free basic maintenance for 6 months",
                  "Training in local languages",
                  "No hidden costs",
                ],
              },
              {
                icon: GraduationCap,
                title: "For Educational Institutions",
                features: [
                  "Special education sector discounts",
                  "Free software upgrades",
                  "Student & teacher training included",
                  "Custom learning management systems",
                  "Long-term partnership programs",
                ],
              },
              {
                icon: Rocket,
                title: "For Startups",
                features: [
                  "MVP development at startup-friendly rates",
                  "Scalable architecture from day one",
                  "Technical consultation included",
                  "Deferred payment options available",
                  "Growth partnership opportunities",
                ],
              },
            ].map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border bg-slate-800/40 border-slate-700/50 rounded-2xl backdrop-blur-sm"
              >
                <commitment.icon className="w-12 h-12 mb-6 text-purple-400" />
                <h3 className="mb-6 text-2xl font-bold text-white">{commitment.title}</h3>
                <ul className="space-y-3">
                  {commitment.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 mt-0.5 text-green-400" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="relative py-20 overflow-hidden bg-slate-900/10">
        {/* Animated background elements */}
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 " />
        
        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-10 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-300 md:text-xl"
              >
                Join hundreds of rural businesses, schools, and startups who are already growing with AppDost
              </motion.p>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center gap-3 p-6 transition-all duration-300 border bg-slate-800/40 border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600/70 hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold tracking-wider text-purple-400 uppercase">Our Locations</p>
                      <p className="text-sm font-medium text-white">Banka (HQ), Motihari, Patna</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center gap-3 p-6 transition-all duration-300 border bg-slate-800/40 border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600/70 hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold tracking-wider text-blue-400 uppercase">Call Us</p>
                      <p className="text-sm font-medium text-white">+91 76350 75422</p>
                      <p className="text-xs text-gray-400">+91 11 6929 0750</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center gap-3 p-6 transition-all duration-300 border bg-slate-800/40 border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600/70 hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                      <Mail className="w-6 h-6 text-pink-400" />
                    </div>
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold tracking-wider text-pink-400 uppercase">Email Us</p>
                      <p className="text-sm font-medium text-white">contact@appdost.in</p>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <a
                    href="/contact"
                    className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 group rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-100" />
                  </a>
                  <a
                    href="/services"
                    className="px-8 py-4 font-semibold text-white transition-all duration-300 border group rounded-xl border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      View Our Services
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
