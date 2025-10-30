import { motion } from "framer-motion";
import { BookOpen, Clock, User, ArrowRight, Search, Calendar, Tag, TrendingUp } from "lucide-react";
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
    gradient: "from-purple-500 to-indigo-500",
    featured: false,
    url: "https://appdost.in/blog/1760299622897",
  },
];

const categories = ["All Posts", "Design", "Development", "Mobile", "Technology", "Business"];

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
    <div className="min-h-screen pt-20 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden md:py-20 bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />

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
              className="inline-flex items-center gap-2 px-6 py-3 mb-6 border rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border-white/30"
            >
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-white">Tech Insights & Stories</span>
            </motion.div>
            
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                Blog
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl">
              Insights, tutorials, and tech stories from the AppDost team
            </p>
          </motion.div>

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
                className="w-full py-4 pl-12 pr-4 text-white transition-all duration-200 border rounded-xl bg-slate-800/50 border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 backdrop-blur-sm placeholder:text-gray-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-950">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-slate-800/50 text-gray-300 border border-white/10 hover:bg-slate-800/70 hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All Posts" && (
        <section className="py-12 bg-slate-950">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-bold text-white">Featured Article</h2>
            </div>
            
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="overflow-hidden transition-all duration-300 border group bg-slate-900/50 border-white/10 rounded-3xl backdrop-blur-sm hover:border-white/20"
            >
              <div className="grid md:grid-cols-2">
                {/* Image/Gradient */}
                <div className={`relative h-64 md:h-full bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center`}>
                  <BookOpen className="w-24 h-24 text-white/80" />
                  <div className="absolute px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase rounded-lg bg-black/50 backdrop-blur-sm top-6 left-6">
                    {featuredPost.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors md:text-3xl group-hover:text-blue-400">
                    {featuredPost.title}
                  </h3>
                  <p className="mb-6 text-gray-400 line-clamp-3">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <a
                      href={featuredPost.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-200 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Tag className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold text-white">
              {selectedCategory === "All Posts" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <span className="px-3 py-1 text-sm font-semibold text-gray-400 rounded-full bg-slate-800/50">
              {regularPosts.length} {regularPosts.length === 1 ? 'Post' : 'Posts'}
            </span>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden transition-all duration-300 border group bg-slate-800/50 border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/20 hover:shadow-xl"
                >
                  {/* Featured Image / Gradient */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <BookOpen className="w-16 h-16 transition-transform duration-300 text-white/80 group-hover:scale-110" />
                    <div className="absolute px-3 py-1.5 text-xs font-semibold tracking-wider text-white uppercase rounded-lg bg-black/50 backdrop-blur-sm top-4 left-4">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-lg font-bold text-white transition-colors line-clamp-2 group-hover:text-blue-400">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-400 line-clamp-2">{post.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 pt-4 mb-4 text-xs text-gray-500 border-t border-white/10">
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
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-200 hover:gap-3"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl p-12 mx-auto text-center border bg-slate-800/50 border-white/10 rounded-2xl backdrop-blur-sm"
            >
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-500" />
              <h3 className="mb-2 text-xl font-bold text-white">No Articles Found</h3>
              <p className="text-gray-400">
                Try adjusting your search or category filter to find what you&apos;re looking for.
              </p>
            </motion.div>
          )}

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl p-1 mx-auto mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
          >
            <div className="p-8 text-center md:p-12 bg-slate-900/95 rounded-[22px] backdrop-blur-xl">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">Stay Updated!</h3>
              <p className="mb-8 text-lg text-gray-300">
                Subscribe to our newsletter and never miss our latest articles and tech insights.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-200 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                Subscribe Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
