import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white p-6 flex items-center justify-center font-mono">
      <div className="max-w-2xl w-full bg-black/60 border border-purple-700 rounded-2xl p-8 shadow-xl text-center relative">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-yellow-400" size={40} />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
          Disclaimer
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          This game is designed for entertainment purposes only. It may contain
          mature or bold content not suitable for all ages. By continuing, you
          acknowledge that you are of appropriate age and understand the risks
          involved in participation. Drink responsibly and play at your own
          discretion.If you are under 13, please use this website with parental supervision.
        </p>

        <p className="mt-6 text-sm text-gray-500 italic">
          We are not responsible for any actions taken during gameplay.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-black font-bold tracking-wide shadow-lg hover:scale-105 transition"
        >
          🔙 Return to Game
        </Link>
      </div>
    </div>
  );
};

export default Disclaimer;
