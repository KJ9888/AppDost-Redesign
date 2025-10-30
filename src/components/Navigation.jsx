import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-blue-500/10"
          : "bg-gradient-to-b from-slate-950/95 to-slate-950/70 backdrop-blur-lg border-b border-white/5"
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-50 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg group-hover:opacity-75" />
              <div className="relative flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                <i className="text-2xl text-white fas fa-rocket"></i>
              </div>
            </motion.div>
            <div>
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text">AppDost</span>
              <p className="text-xs font-medium text-blue-300/80">Complete IT Solution</p>
            </div>
          </Link>

          <div className="items-center hidden gap-8 md:flex">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.href} className="relative">
                <motion.span whileHover={{ scale: 1.05, y: -2 }} className={`font-medium transition-colors group block ${isActive(link.href) ? "text-white" : "text-gray-200 hover:text-white"}`}>
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 rounded-full ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
                </motion.span>
              </Link>
            ))}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white transition-colors border rounded-lg md:hidden hover:bg-white/10 backdrop-blur-sm border-white/10" aria-label="Toggle menu">
            {isMobileMenuOpen ? <i className="text-xl fas fa-times"></i> : <i className="text-xl fas fa-bars"></i>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t md:hidden bg-slate-950/98 backdrop-blur-xl border-white/10">
            <div className="container px-4 py-6 mx-auto space-y-4">
              {navLinks.map((link, index) => (
                <Link key={index} to={link.href} className="block">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className={`px-4 py-3 font-medium transition-all border rounded-lg ${isActive(link.href) ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20" : "text-gray-200 border-transparent hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-white/10"}`}>
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
