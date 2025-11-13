import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

/* Parent/menu item variants (entry staggered, exit simple) */
const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
      duration: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

/* overlay clip-path transition */
const overlayTransition = {
  duration: 0.7,
  ease: [0.4, 0, 0.2, 1],
};

const origin = "95% 8%"; // circle origin near hamburger (adjust if needed)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[90] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="relative z-[92] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-300 hover:to-amber-500 transition-all duration-300"
          >
            Sushant.
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Reach Out */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-amber-700 rounded-full text-white font-semibold hover:opacity-90 transition duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail size={18} />
              Reach Out
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="md:hidden focus:outline-none text-white hover:text-yellow-400 transition-colors duration-200 relative z-[95]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 md:hidden z-[80]"
            initial={{ clipPath: `circle(0% at ${origin})` }}
            animate={{ clipPath: `circle(150% at ${origin})` }}
            exit={{ clipPath: `circle(0% at ${origin})` }}
            transition={overlayTransition}
            
            style={{ pointerEvents: "auto" }}
          >
            {/* animated clipped background (expands from origin) */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

          
            <motion.div
              variants={parentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative h-full flex flex-col items-center justify-center gap-2 px-8"
              style={{ pointerEvents: "auto" }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  variants={itemVariants}
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="block text-white hover:text-yellow-500 font-medium transition-colors duration-200 py-3 text-center text-xl"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                variants={itemVariants}
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-700 rounded-full text-white font-semibold hover:opacity-90 transition duration-200 mt-4 shadow-lg"
              >
                <Mail size={18} />
                Reach Out
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
