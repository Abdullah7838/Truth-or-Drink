import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";

const dropdownLinks = [
  { name: "About Us", path: "/about" },
  { name: "Terms and Conditions", path: "/terms-and-conditions" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Contact Us", path: "/contact" },
  { name: "Cookie Policy", path: "/cookie-policy" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-8 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-2xl font-bold tracking-wide drop-shadow-md">
          <Link aria-label="Go to Home" to="/" className="flex items-center gap-2">
            <img
              src="/icon.jpg"
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-bl-3xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-base font-medium text-white/90">
          {dropdownLinks.map((link) => (
            <Link
              aria-label={link.name}
              key={link.path}
              to={link.path}
              className="hover:underline hover:text-white transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            aria-label="GitHub"
            href="https://github.com/Abdullah7838"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            aria-label="Twitter"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-white">
        &copy; {new Date().getFullYear()} Truth or Drink
      </div>
    </footer>
  );
};

export default Footer;
