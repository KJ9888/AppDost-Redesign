import { motion } from "framer-motion";
import { BookOpen, Clock, User, ArrowRight, Search, Calendar, Tag, TrendingUp, Sparkles } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "10 UI/UX Design Principles Every Developer Should Know",
    excerpt:
      "Learn the fundamental design principles that will help you create better user experiences and more intuitive interfaces for your applications.",
    category: "Design",
    readTime: "8 min",
    author: "AppDost Team",
    date: "Oct 28, 2025",
    image: "https://www.truemark.dev/static/91713f3abc6c9fa56f275b1be4e052f3/47498/ux-design-principles.jpg",
    gradient: "from-blue-500 to-purple-500",
    featured: true,
    url: "https://appdost.in/blog/1760299622897",
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to serverless architecture and beyond.",
    category: "Development",
    readTime: "12 min",
    author: "AppDost Team",
    date: "Oct 25, 2025",
    image:"https://deftsoft.com/wp-content/uploads/2024/11/Future-of-Web-Development-Trends-to-Watch-in-2025.png",
    gradient: "from-purple-500 to-pink-500",
    featured: false,
    url: "https://appdost.in/blog/1760299622897",
  },
  {
    id: 3,
    title: "Building Scalable Mobile Apps with React Native",
    excerpt:
      "A comprehensive guide to building cross-platform mobile applications that scale efficiently and deliver native-like performance.",
    category: "Mobile",
    readTime: "15 min",
    author: "AppDost Team",
    date: "Oct 20, 2025",
    image: "https://iconflux.com/uploads/article/image20230621t060606962z-a4d1d354a7.png",
    gradient: "from-blue-500 to-cyan-500",
    featured: false,
    url: "https://appdost.in/blog/1760299622897",
  },
  {
    id: 4,
    title: "Mastering TypeScript for Modern Web Applications",
    excerpt:
      "Deep dive into TypeScript best practices and advanced patterns for building robust, type-safe web applications.",
    category: "Development",
    readTime: "10 min",
    author: "AppDost Team",
    date: "Oct 18, 2025",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQEFWolNuSOEqg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1698753860922?e=2147483647&v=beta&t=gII5Find1ibTAA-17HohpYg9AGVzBKTOcrQQPwmERh0",
    gradient: "from-indigo-500 to-blue-500",
    featured: false,
    url: "https://appdost.in/blog/1760299622897",
  },
  {
    id: 5,
    title: "AI-Powered Development Tools That Boost Productivity",
    excerpt:
      "Discover the latest AI tools and techniques that are revolutionizing how developers write, test, and deploy code.",
    category: "Technology",
    readTime: "9 min",
    author: "AppDost Team",
    date: "Oct 15, 2025",
    image: "https://smartlifewithai.com/wp-content/uploads/2024/04/AI-Productivity-Tools.png",
    gradient: "from-pink-500 to-rose-500",
    featured: false,
    url: "https://appdost.in/blog/1760299622897",
  },
  {
    id: 6,
    title: "Creating Engaging User Onboarding Experiences",
    excerpt:
      "Learn how to design and implement user onboarding flows that convert and retain users from day one.",
    category: "Design",
    readTime: "7 min",
    author: "AppDost Team",
    date: "Oct 12, 2025",
    image: "https://whatfix.com/blog/wp-content/uploads/2022/12/image1-1.jpg",
    gradient: "from-purple-500 to-indigo-500",
    featured: false,
    url: "https://appdost.in/blog/1760299622897",
  },
];

const categories = ["All Posts", "Design", "Development", "Mobile", "Technology"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-slate-800/40 border-slate-700/50 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-gray-300">Tech Insights & Stories</span>
            </motion.div>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Insights &{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text">
                Stories
              </span>
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-gray-300">
              Tutorials, tech trends, and development insights from the AppDost team
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-4 top-1/2" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 pl-12 pr-4 text-white transition-all duration-200 border bg-slate-800/40 border-slate-700/50 rounded-xl focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 backdrop-blur-sm placeholder:text-gray-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-slate-800/40 text-gray-300 border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600/70"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All Posts" && !searchQuery && (
        <section className="py-12 bg-slate-900">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Featured Article</h2>
            </div>
            
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden transition-all duration-300 border group bg-slate-800/40 border-slate-700/50 rounded-3xl backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600/70"
            >
              <div className="grid gap-8 md:grid-cols-5">
                {/* Image/Gradient */}
                <div className={`relative md:col-span-2 h-64 md:h-auto ${!featuredPost.image && `bg-gradient-to-br ${featuredPost.gradient}`} flex items-center justify-center overflow-hidden`}>
                  {featuredPost.image ? (
                    <>
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </>
                  ) : (
                    <BookOpen className="w-24 h-24 transition-transform duration-500 text-white/80 group-hover:scale-110 group-hover:rotate-6" />
                  )}
                  <div className="absolute px-4 py-2 text-xs font-bold tracking-wider text-white uppercase rounded-lg bg-slate-900/50 backdrop-blur-sm top-6 left-6">
                    {featuredPost.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:col-span-3 md:p-10">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-3xl font-bold leading-tight text-white transition-colors md:text-4xl group-hover:text-purple-400">
                    {featuredPost.title}
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-300">{featuredPost.excerpt}</p>

                  <a
                    href={featuredPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-200 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Tag className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">
                {selectedCategory === "All Posts" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <span className="px-3 py-1 text-sm font-semibold text-gray-300 border rounded-full bg-slate-800/40 border-slate-700/50">
                {regularPosts.length}
              </span>
            </div>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col h-full overflow-hidden transition-all duration-300 border group bg-slate-800/40 border-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600/70 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  {/* Featured Image / Gradient */}
                  <div
                    className={`relative h-48 ${!post.image && `bg-gradient-to-br ${post.gradient}`} flex items-center justify-center overflow-hidden`}
                  >
                    {post.image ? (
                      <>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      </>
                    ) : (
                      <BookOpen className="w-16 h-16 transition-all duration-500 text-white/80 group-hover:scale-110 group-hover:rotate-12" />
                    )}
                    <div className="absolute px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase rounded-lg bg-slate-900/50 backdrop-blur-sm top-4 left-4">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors line-clamp-2 group-hover:text-purple-400">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-3">{post.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 mt-auto text-xs text-gray-500 border-t border-slate-700/50">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-purple-400 transition-all duration-200 group-hover:gap-3"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform duration-200" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl p-12 mx-auto text-center border bg-slate-800/40 border-slate-700/50 rounded-2xl backdrop-blur-sm"
            >
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-500" />
              <h3 className="mb-2 text-xl font-bold text-white">No Articles Found</h3>
              <p className="text-gray-400">
                Try adjusting your search or category filter to find what you&apos;re looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 " />
        
        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Never Miss an Update
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              Subscribe to our newsletter for the latest articles, tutorials, and tech insights delivered to your inbox
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-200 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              Subscribe Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
