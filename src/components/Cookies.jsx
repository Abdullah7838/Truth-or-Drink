import React from "react";

function Cookies() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center text-white pt-12">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Cookie Policy
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          Our website uses cookies only for analytics and user experience monitoring purposes.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-base sm:text-lg">
          <li>
            <strong>Google Analytics</strong> – helps us understand how users interact with our site.
          </li>
          <li>
            <strong>Microsoft Clarity</strong> – provides insights into user behavior through heatmaps and session recordings.
          </li>
        </ul>
        <p className="text-lg">
          We do <strong>not use any third-party advertising</strong> cookies, tracking pixels, or personal targeting cookies.
          Your privacy is respected and protected.
        </p>
      </div>
    </div>
  );
}

export default Cookies;
