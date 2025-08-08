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

      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center text-white pt-12 px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl max-w-3xl w-full p-8 text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="text-yellow-400" size={40} />
          </div>

          <h1 className="text-3xl md:text-4xl text-white font-extrabold mb-4 bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
            Disclaimer
          </h1>

          <p className="text-lg text-white/80 leading-relaxed">
            This game is designed for entertainment purposes only. If you are
            under 13, please use this website with parental supervision.
          </p>

          <p className="mt-6 text-sm text-white/60 italic">
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
