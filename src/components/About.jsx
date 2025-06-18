import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-6 py-12 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 max-w-3xl w-full text-white">
        <h1 className="text-4xl font-extrabold text-center mb-6 drop-shadow-md">
          🎉 About Truth or Drink
        </h1>

        <p className="text-white text-lg mb-6">
          Welcome to <strong>Truth or Drink</strong> — the ultimate online party game for friends, couples, and curious minds!
        </p>

        <h2 className="text-2xl font-bold mb-3">Why We Built This</h2>
        <p className="text-white mb-6">
          We created this game to bring people together, whether you're hanging out at home or playing from across the world. With both offline and online modes, it's easy to enjoy classic Truth or Drink anytime, anywhere.
        </p>

        <h2 className="text-2xl font-bold mb-3">Features</h2>
        <ul className="list-disc list-inside text-white mb-6 space-y-2">
          <li>🎮 Offline & Multiplayer online modes</li>
          <li>💬 Fun and challenging truths & Drinks</li>
          <li>⚡ Fast, responsive, and mobile-friendly design</li>
          <li>🎨 Modern UI with animated interactions</li>
        </ul>

        <p className="text-white text-sm text-center mt-10">
          Made with ❤️ by passionate developers. Play responsibly and have fun!
        </p>
      </div>
    </div>
  );
}

export default About;
