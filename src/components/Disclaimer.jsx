import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Truth or Drink – Disclaimer</title>
        <meta
          name="description"
          content="Play Truth or Drink online or offline with friends. Choose a mode, spin the wheel, and enjoy fun challenges!"
        />
        <meta
          name="keywords"
          content="truth or drink, online party game, spin wheel game, drink game, online game"
        />
        <meta
          property="og:title"
          content="Truth or Drink – Play Drinking Games Online or Offline"
        />
        <meta
          property="og:description"
          content="Play Truth or Drink with friends, online or offline! No signup required. Fun guaranteed!"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white p-6 flex items-center justify-center font-mono">
        <div className="max-w-2xl w-full bg-black/60 border border-purple-700 rounded-2xl p-8 shadow-xl text-center relative">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="text-yellow-400" size={40} />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
            Disclaimer
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            This game is designed for entertainment purposes only. If you are
            under 13, please use this website with parental supervision.
          </p>

          <p className="mt-6 text-sm text-gray-500 italic">
            We are not responsible for any actions taken during gameplay.
          </p>

          <Link
            aria-label="Return to Game"
            to="/"
            className="mt-8 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-black font-bold tracking-wide shadow-lg hover:scale-105 transition"
          >
            🔙 Return to Game
          </Link>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
