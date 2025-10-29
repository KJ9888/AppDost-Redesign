import { motion } from "framer-motion";
import { Star, TrendingUp, Globe2, CheckCircle2 } from "lucide-react";

const companies = [
  {
    name: "Google",
    textOnly: true,
  },
  {
    name: "Microsoft",
    textOnly: true,
  },
  {
    name: "Amazon",
    textOnly: true,
  },
  {
    name: "Stripe",
    textOnly: true,
  },
  {
    name: "Shopify",
    textOnly: true,
  },
  {
    name: "Slack",
    textOnly: true,
  },
  {
    name: "Netflix",
    textOnly: true,
  },
  {
    name: "Spotify",
    textOnly: true,
  },
];

export default function TrustBar() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background gradient effects - seamless with other sections */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 rounded-full left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 rounded-full right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header - matching other sections style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-blue-500/10 border-blue-500/20"
            >
              <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
              <span className="text-sm font-medium text-blue-300">Trusted Worldwide</span>
            </motion.div>

            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Trusted by{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                Industry Leaders
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-gray-400">
              Join hundreds of successful businesses that have transformed their digital presence
              with our solutions
            </p>
          </motion.div>

          {/* Sliding Logos Carousel */}
          <div className="relative py-2 mb-4 overflow-hidden">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 z-10 w-32 pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 z-10 w-32 pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />

            <div className="flex gap-12 items-center animate-[scroll_35s_linear_infinite]">
              {[...companies, ...companies, ...companies].map((company, i) => (
                <div key={`${company.name}-${i}`} className="flex-shrink-0 group">
                  <div className="flex items-center justify-center h-20 px-8 transition-all duration-300 border rounded-xl w-44 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/20">
                    <span className="text-xl font-bold transition-colors duration-300 text-white/60 group-hover:text-white whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards - matching Services section style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: TrendingUp,
                title: "Growing Fast",
                description: "Join our rapidly expanding client base",
                details: "300% average increase in digital engagement within 6 months of launch",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Globe2,
                title: "Worldwide Reach",
                description: "Serving clients across continents",
                details: "Operating in 5+ countries with 24/7 support and localized solutions",
                image:
                  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop&q=80",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: CheckCircle2,
                title: "Proven Track Record",
                description: "Consistently delivering excellence",
                details: "99% success rate with 50+ projects completed and zero failures",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group"
                >
                  <div className="relative h-full overflow-hidden transition-all duration-300 border rounded-2xl bg-slate-900/50 border-white/10 backdrop-blur-sm hover:bg-slate-900/70 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10">
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-40 mix-blend-overlay`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6">
                        <div
                          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="mb-3 text-2xl font-bold text-white">{feature.title}</h3>

                      <p className="mb-3 text-base text-gray-300">{feature.description}</p>

                      <p className="text-sm leading-relaxed text-gray-400">{feature.details}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
