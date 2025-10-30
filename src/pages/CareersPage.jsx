import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Lightbulb,
  Award,
  Heart,
  Coffee,
  Briefcase,
  Mail,
  ArrowRight,
  Upload,
} from "lucide-react";
import { Toast } from "../components/ui/toast";

const benefits = [
  {
    icon: Users,
    title: "Expert Team",
    desc: "Work alongside 20+ talented developers who are passionate about technology and innovation.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Continuous learning opportunities, skill development programs, and clear career progression paths.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Projects",
    desc: "Work on cutting-edge projects using the latest technologies and industry best practices.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    desc: "Flexible working hours, remote work options, and a supportive work environment.",
  },
  {
    icon: Award,
    title: "Recognition",
    desc: "Performance-based rewards, employee recognition programs, and competitive compensation.",
  },
  {
    icon: Heart,
    title: "Learning Culture",
    desc: "Regular training sessions, workshops, certifications, and conference sponsorships.",
  },
];

const CareersPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    experience: "",
    message: "",
    resume: null,
  });

  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    setShowToast(true);
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      interest: "",
      experience: "",
      message: "",
      resume: null,
    });
    
    // Hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden md:py-24 bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />

        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold text-white border rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border-white/30"
            >
              <Users className="w-4 h-4 mr-2" />
              Join 20+ talented developers
            </motion.div>
            
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Build Your Career with{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                AppDost
              </span>
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-300 md:text-xl">
              Join our innovative team and work on cutting-edge projects that make a difference
            </p>

            {/* Quick Stats */}
            <div className="grid max-w-3xl grid-cols-3 gap-4 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4 border md:p-6 rounded-2xl bg-slate-800/50 border-white/10 backdrop-blur-sm"
              >
                <div className="mb-1 text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  20+
                </div>
                <div className="text-xs text-gray-400 md:text-sm">Team Members</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-4 border md:p-6 rounded-2xl bg-slate-800/50 border-white/10 backdrop-blur-sm"
              >
                <div className="mb-1 text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  15+
                </div>
                <div className="text-xs text-gray-400 md:text-sm">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-4 border md:p-6 rounded-2xl bg-slate-800/50 border-white/10 backdrop-blur-sm"
              >
                <div className="mb-1 text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text">
                  100%
                </div>
                <div className="text-xs text-gray-400 md:text-sm">Remote OK</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Why Work With Us?</h2>
            <p className="text-base text-gray-300 md:text-lg">
              Join a team that values innovation, growth, and work-life balance
            </p>
          </motion.div>

          <div className="grid max-w-6xl grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-5 overflow-hidden transition-all duration-300 border group rounded-3xl bg-slate-800/50 border-white/10 hover:border-white/20 backdrop-blur-sm"
              >
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                    <benefit.icon className="w-6 h-6 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {benefit.desc}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 transition-all duration-500 rounded-bl-full opacity-0 bg-gradient-to-br from-blue-500/20 to-transparent group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings + Application Form Combined */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-8 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-12">
            
            {/* Left: Current Openings Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6">
                <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Current Openings</h2>
                <p className="text-base text-gray-300 md:text-lg">
                  Explore exciting opportunities to grow with us
                </p>
              </div>

              <div className="relative p-1 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20">
                <div className="relative p-6 md:p-8 text-center bg-slate-800/90 rounded-[22px] backdrop-blur-xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full md:w-20 md:h-20 md:mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  >
                    <Briefcase className="w-8 h-8 text-indigo-400 md:w-10 md:h-10" />
                  </motion.div>
                  
                  <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">No Current Openings</h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-base">
                    We don&apos;t have any job openings at the moment, but we&apos;re always looking for
                    talented individuals. Submit your resume and we&apos;ll reach out when opportunities arise!
                  </p>
                  
                  {/* Quick Benefits */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold text-indigo-400 border rounded-lg bg-slate-800/50 border-indigo-500/30">
                      Remote Work
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold text-purple-400 border rounded-lg bg-slate-800/50 border-purple-500/30">
                      Flexible Hours
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold text-pink-400 border rounded-lg bg-slate-800/50 border-pink-500/30">
                      Great Team
                    </span>
                  </div>
                  
                  <a
                    href="#application-form"
                    className="relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 group rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Application Form */}
            <motion.div
              id="application-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                  Submit Your Resume
                </h2>
                <p className="text-base text-gray-300 md:text-lg">
                  We&apos;ll keep your profile on file for future opportunities
                </p>
              </div>

              <div className="relative p-1 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20">
                <div className="p-5 md:p-8 bg-slate-800/90 rounded-[22px] backdrop-blur-xl">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="block mb-2 text-xs font-semibold text-gray-300 md:text-sm">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 text-sm text-white transition-all duration-200 border rounded-xl bg-slate-900/50 border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-2 text-xs font-semibold text-gray-300 md:text-sm">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 text-sm text-white transition-all duration-200 border rounded-xl bg-slate-900/50 border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-xs font-semibold text-gray-300 md:text-sm">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 text-sm text-white transition-all duration-200 border rounded-xl bg-slate-900/50 border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label htmlFor="experience" className="block mb-2 text-xs font-semibold text-gray-300 md:text-sm">
                          Experience (Years) *
                        </label>
                        <input
                          type="number"
                          id="experience"
                          name="experience"
                          required
                          min="0"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 text-sm text-white transition-all duration-200 border rounded-xl bg-slate-900/50 border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500"
                          placeholder="3"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block mb-2 text-xs font-semibold text-gray-300 md:text-sm">
                        Area of Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 text-sm text-white transition-all duration-200 border rounded-xl bg-slate-900/50 border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      >
                        <option value="">Select...</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile Development</option>
                        <option value="uiux">UI/UX Design</option>
                        <option value="backend">Backend Development</option>
                        <option value="devops">DevOps</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-xs font-semibold text-gray-300 md:text-sm">
                        About Yourself *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 text-sm text-white transition-all duration-200 border rounded-xl resize-none bg-slate-900/50 border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500"
                        placeholder="Tell us about your skills and experience..."
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="resume" className="block mb-2 text-xs font-semibold text-gray-300 md:text-sm">
                        Resume (PDF, DOC)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="resume"
                          className="flex items-center justify-center w-full gap-2 px-3 py-2.5 text-sm text-gray-300 transition-all duration-200 border cursor-pointer rounded-xl bg-slate-900/50 border-white/10 hover:border-blue-400 hover:bg-slate-900/70"
                        >
                          <Upload className="w-4 h-4" />
                          <span className="text-xs md:text-sm">
                            {formData.resume ? formData.resume.name : "Choose file"}
                          </span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="relative flex items-center justify-center w-full gap-2 px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 group rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-[1.02]"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                        <Mail className="w-4 h-4 md:w-5 md:h-5" />
                        Submit Application
                      </span>
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:opacity-100" />
                    </button>

                    <p className="text-xs text-center text-gray-400">
                      By submitting, you agree to our{" "}
                      <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Success Toast */}
      <Toast
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        type="success"
        title="🎉 Congratulations!"
        message="Your application has been submitted successfully! We'll review it and get back to you soon."
      />
    </div>
  );
};

export default CareersPage;
