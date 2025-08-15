import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Ultimate() {
  return (
    <>
      <Helmet>
        <title>Truth or Drink– Play Ultimate Mode With Friends</title>
        <meta
          name="description"
          content="Truth or Drink– Play Ultimate Mode With Friends. Choose a mode of truth or drink, spin the wheel, and enjoy fun challenges!"
        />
        <meta
          name="keywords"
          content="truth or drink, online and offline party game, online and offline game, drink game , offline truth or drink "
        />
        <meta
          property="og:title"
          content="Truth or Drink– Play Ultimate Mode With Friends"
        />
        <meta
          property="og:description"
          content="Truth or Drink– Play Ultimate Mode With Friends. Choose a mode of truth or drink, spin the wheel, and enjoy fun challenges!"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center text-center text-white font-mono">
        {/* Background fog effect */}
        <div className="absolute inset-0 bg-red-400 opacity-5 z-0" />

        {/* Horror red glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black z-0 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 p-10 bg-black/80 rounded-2xl shadow-2xl border border-red-700 max-w-xl w-full"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 tracking-wide animate-pulse">
            Welcome to the Ultimate Challenge
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Choose your fate... but beware. Once you enter, there's no turning
            back.
          </p>

          <div className="flex flex-col gap-6">
            <Link 
              aria-label="Play Ultimate Truth & Drink"
            to="/ultimate-truth-and-drink">
              <motion.button
                aria-label="Play Ultimate Truth & Drink"
                type="button"
                whileHover={{ scale: 1.1, boxShadow: "0 0 25px #a855f7" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-xl bg-purple-700 hover:bg-purple-800 transition-all duration-300 text-white text-xl font-semibold shadow-md shadow-purple-900"
              >
                🍷 Truth & Drink (Demon’s Choice)
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Fog overlay animation (optional eerie effect) */}
        <motion.div
          className="absolute inset-0 pointer-events-none bg-red-400 opacity-10 z-0"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </>
  );
}

export default Ultimate;
