import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Ultimate", path: "/ultimate" },
  { name: "Spinner", path: "/spin" },
  { name: "Quiz", path: "/quiz" },
  { name: "Blog", path: "/blogs" },
  { name: "About", path: "/about" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (

      <nav className="bg-[#0f0f0f] shadow-lg sticky top-0 z-50 font-mono">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/icon.jpg"
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-bl-3xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-lg font-semibold items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-md transition-all duration-200 tracking-wider ${
                    isActive
                      ? "bg-gradient-to-r from-purple-400 to-pink-500 text-black font-bold shadow-lg"
                      : "text-white hover:text-cyan-300 hover:scale-105"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black z-40"
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#1f1f1f] to-black z-50 p-6 space-y-5 shadow-xl border-r border-purple-700"
              >
                <div className="text-2xl text-white font-extrabold mb-4 tracking-wider">
                  <Link to="/" className="flex items-center gap-2">
                    <img
                      src="/icon.jpg"
                      alt="Logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-bl-3xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-3 rounded-md text-lg font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-400 to-pink-500 text-black font-bold shadow"
                          : "text-white hover:text-fuchsia-400 hover:pl-6"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
  );
};

export default Navbar;
