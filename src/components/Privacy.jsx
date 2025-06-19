import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-400 px-6 py-12 text-white flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl max-w-3xl w-full p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-md text-center">Privacy Policy</h1>
        
        <p className="mb-4 text-white/90">
          Your privacy is important to us. This policy explains how we collect, use, and protect your data when you use the Truth or Drink game.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-white/90 mb-4">
          <li>No personal data is required to play the game.</li>
          <li>For online multiplayer, usernames are temporarily stored for session tracking.</li>
          <li>We may collect IP address or browser info for analytics and moderation.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2">2. How We Use Data</h2>
        <ul className="list-disc list-inside text-white/90 mb-4">
          <li>To maintain fair gameplay and remove inactive rooms.</li>
          <li>To improve performance and prevent abuse.</li>
          <li>To help us understand how the app is used (analytics only).</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2">3. Data Sharing</h2>
        <p className="text-white/90 mb-4">
          We do not sell or share your personal data with third parties. All multiplayer data is deleted regularly and used only for live gameplay.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">4. Your Choices</h2>
        <p className="text-white/90 mb-4">
          You may play the offline version of the game without providing any info. If you're uncomfortable with any part of this policy, you may avoid using the online mode.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">5. Updates</h2>
        <p className="text-white/90 mb-4">
          This privacy policy may be updated as our app evolves. Major changes will be notified on the website.
        </p>

        <p className="text-white/70 text-sm mt-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Privacy;
