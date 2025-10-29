import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".contact-title", {
      scrollTrigger: {
        trigger: ".contact-title",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@appdost.in", "hr@appdost.in"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 76350 75422", "+91 11 6929 0750"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["HQ: Banka, Bihar", "Motihari | Patna"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-12 overflow-hidden md:py-20 bg-slate-900">
      {/* Background */}
      <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-purple-500/10 blur-3xl" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-6 border rounded-full shadow-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30"
          >
            <MessageSquare className="w-5 h-5 text-green-400 animate-pulse" />
            <span className="text-sm font-semibold text-green-300">Let's Chat!</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-black leading-tight text-white contact-title md:text-5xl lg:text-6xl">
            Ready to Make Something{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text">
              Awesome Together?
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300 md:text-xl">
            Share your idea with us - no pressure, no commitments. Just a friendly conversation
            about making your vision come to life ✨
          </p>
        </div>
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-pink-500/10 border-pink-500/20"
          >
            <MessageSquare className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-pink-400">Get In Touch</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-white contact-title md:text-5xl lg:text-6xl">
            Ready to Start Your <span className="gradient-text-2">Project?</span>
          </h2>
          <p className="text-lg text-gray-400 md:text-xl">
            Let's discuss how we can help transform your ideas into reality with cutting-edge
            technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-6 text-2xl font-bold text-white">Contact Information</h3>
              </motion.div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="p-6 cursor-pointer glass-strong rounded-2xl group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-white">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-gray-400 transition-colors hover:text-blue-400"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 glass-strong rounded-2xl"
              >
                <h4 className="mb-3 text-lg font-semibold text-white">Working Hours</h4>
                <p className="text-gray-400">
                  Monday - Saturday: 9:00 AM - 6:00 PM IST
                  <br />
                  Sunday: Closed
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 glass-strong rounded-2xl"
            >
              <h3 className="mb-6 text-2xl font-bold text-white">📩 Send Us a Message</h3>
              <form className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                    👤 Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 text-white placeholder-gray-500 transition-all border-2 bg-white/5 border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:bg-white/10 hover:border-white/20"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                    ✉️ Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 text-white placeholder-gray-500 transition-all border-2 bg-white/5 border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 hover:bg-white/10 hover:border-white/20"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                    📱 Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-6 py-4 text-white placeholder-gray-500 transition-all border-2 bg-white/5 border-white/10 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 hover:bg-white/10 hover:border-white/20"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                    💬 Tell Us About Your Project
                  </label>
                  <textarea
                    rows="5"
                    placeholder="I need help with..."
                    className="w-full px-6 py-4 text-white placeholder-gray-500 transition-all border-2 resize-none bg-white/5 border-white/10 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 hover:bg-white/10 hover:border-white/20"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full py-6 text-lg text-white transition-all duration-300 shadow-2xl bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 rounded-xl shadow-blue-500/40 hover:shadow-blue-500/60 group"
                >
                  <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Message
                  <span className="ml-2">✨</span>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-20 text-center"
        >
          <div className="p-8 glass-strong rounded-2xl md:p-12">
            <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Start Building Your <span className="gradient-text">Digital Future</span>
            </h3>
            <p className="mb-8 text-lg text-gray-400">
              Join 50+ satisfied clients who have transformed their businesses with our solutions
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="xl"
                className="text-white shadow-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-green-500/50"
              >
                Get Free Consultation
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="text-white border-2 border-white/30 bg-white/5 hover:bg-white/10"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
