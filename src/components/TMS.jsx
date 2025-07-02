import React from 'react';
import { Link } from 'react-router-dom';
const TMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-700 px-6 py-12 text-white flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl max-w-3xl w-full p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-md text-center">Terms & Conditions</h1>

        <p className="mb-4 text-white/90">
          Welcome to Truth or Drink! By accessing or using this website and game, you agree to the following terms and conditions.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">1. Use of the Game</h2>
        <p className="text-white/90 mb-4">
          This game is intended for fun and entertainment. You agree to use it responsibly and not misuse the features for harassment, bullying, or inappropriate behavior.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">2. Age Requirement</h2>
        <p className="text-white/90 mb-4">
          Users under 13 years old should play with parental guidance. Content is generally safe but can vary depending on user interaction.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">3. Online Room Usage</h2>
        <ul className="list-disc list-inside text-white/90 mb-4">
          <li>Do not spam or flood the room chat.</li>
          <li>Respect all other players in the room.</li>
          <li>Rooms inactive for 1 minute will be deleted automatically.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2">4. Data & Privacy</h2>
        <p className="text-white/90 mb-4">
          We collect minimal data only to support multiplayer functionality. You can read more in our <Link to="/privacy" className="underline text-white font-semibold hover:text-black">Privacy Policy</Link>.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">5. Limitation of Liability</h2>
        <p className="text-white/90 mb-4">
          We are not responsible for any discomfort, offense, or damage caused by user-generated drink or truths. Use your own judgment before participating.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">6. Changes to Terms</h2>
        <p className="text-white/90 mb-4">
          We may update these terms from time to time. Continued use of the app constitutes agreement to the new terms.
        </p>

        <p className="text-white/70 text-sm mt-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TMS;
