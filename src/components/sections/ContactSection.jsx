import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Toast } from "../ui/toast";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email Us",
      details: ["contact@appdost.in", "hr@appdost.in"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "fas fa-phone",
      title: "Call Us",
      details: ["+91 76350 75422", "+91 11 6929 0750"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Visit Us",
      details: ["HQ: Banka, Bihar", "Motihari | Patna"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please fill in required fields");
      return;
    }

    // Save name before resetting
    setSubmittedName(formData.name);

    // Show success toast
    setShowToast(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Log form data (replace with actual API call)
    console.log("Form submitted:", formData);
  };

  return (
    <section ref={sectionRef} className="relative py-12 overflow-hidden bg-slate-900">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-cyan-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 delay-1000 rounded-full w-96 h-96 bg-purple-500/10 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 border rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-cyan-500/30 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-cyan-500/10"
          >
            <motion.i
              className="text-cyan-400 fas fa-comment-dots"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold tracking-wide text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Let&apos;s Chat!
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-black leading-tight text-white contact-title md:text-5xl lg:text-6xl"
          >
            Ready to Make Something <br />
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
              Awesome Together?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            Share your idea with us - no pressure, no commitments. Just a friendly conversation
            about making your vision come to life ✨
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left: Contact Info Cards */}
            <div className="space-y-6 lg:col-span-1">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative p-6 overflow-hidden transition-all duration-300 border cursor-pointer bg-slate-800/40 border-slate-700/50 rounded-2xl backdrop-blur-sm group hover:bg-slate-800/60 hover:border-slate-600/70"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <i className={`${info.icon} text-white text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-lg font-bold text-white">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-gray-400 transition-colors hover:text-cyan-400"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Working Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative p-6 overflow-hidden border bg-slate-800/40 border-slate-700/50 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 shadow-lg rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
                    <i className="text-xl text-white fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-white">Working Hours</h4>
                    <p className="text-sm text-gray-400">
                      Mon - Sat: 9:00 AM - 6:00 PM IST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative p-8 overflow-hidden border md:p-10 bg-slate-800/40 border-slate-700/50 rounded-2xl backdrop-blur-sm">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      <i className="text-lg text-white fas fa-envelope"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white md:text-3xl">Send Us a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-300">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="w-full px-4 py-3.5 text-white placeholder-gray-500 transition-all border-2 bg-slate-900/50 border-slate-700/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-slate-600"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-300">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3.5 text-white placeholder-gray-500 transition-all border-2 bg-slate-900/50 border-slate-700/50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-slate-600"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 text-white placeholder-gray-500 transition-all border-2 bg-slate-900/50 border-slate-700/50 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 hover:border-slate-600"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-300">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        rows="6"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="I need help with..."
                        className="w-full px-4 py-3.5 text-white placeholder-gray-500 transition-all border-2 resize-none bg-slate-900/50 border-slate-700/50 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 hover:border-slate-600"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 text-lg font-semibold text-white transition-all duration-300 shadow-2xl rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group"
                    >
                      <i className="mr-3 transition-transform fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                      Send Message
                      <span className="ml-2">✨</span>
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="relative p-8 overflow-hidden border md:p-12 bg-slate-800/40 border-slate-700/50 rounded-3xl backdrop-blur-sm">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/10 to-purple-500/0 hover:opacity-100" />

            <div className="relative text-center">
              <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Start Building Your{" "}
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                  Digital Future
                </span>
              </h3>
              <p className="mb-8 text-lg text-gray-400">
                Join 50+ satisfied clients who have transformed their businesses with our solutions
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg font-semibold text-white transition-all shadow-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-cyan-500/50 hover:shadow-cyan-500/70"
                >
                  Get Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg font-semibold text-white transition-all border-2 bg-slate-800/50 border-slate-600/50 hover:bg-slate-800/70 hover:border-slate-500/70 rounded-xl"
                >
                  View Our Services
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Toast */}
      <Toast
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        type="success"
        title="🎉 Congratulations!"
        message={`Thank you, ${submittedName}! Your message has been sent successfully. We'll get back to you soon!`}
      />
    </section>
  );
};

export default ContactSection;
