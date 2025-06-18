import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-8 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-2xl font-bold tracking-wide drop-shadow-md">
          🎮 TruthOrDare
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 text-base font-medium text-white/90">
          <Link to="/privacy" className="hover:underline hover:text-white transition-all duration-300">Privacy Policy</Link>
          <Link to="/tms" className="hover:underline hover:text-white transition-all duration-300">Terms and Conditions</Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/Abdullah7838" target="_blank" rel="noopener noreferrer" className="hover:text-black transition duration-300">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-white/70">
        Made with <FaHeart className="inline text-red-400" /> by Wibzr  &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
