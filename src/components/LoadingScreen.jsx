import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center pt-12 text-white animate-pulse">
      {/* Header skeleton box */}
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 text-center mb-16">
        <div className="h-10 sm:h-12 w-3/4 mx-auto bg-white/30 rounded-md mb-4"></div>
        <div className="h-5 w-2/3 mx-auto bg-white/20 rounded mb-10"></div>

        {/* Buttons skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto mt-8 px-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-12 bg-white/30 rounded-full"></div>
          ))}
        </div>

        {/* Quiz & Truth Running Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto mt-8 px-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-12 bg-white/30 rounded-full"></div>
          ))}
        </div>

        {/* Ultimate Button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto mt-8 px-4">
          {[...Array(1)].map((_, i) => (
            <div key={i} className="h-12 bg-white/30 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Spinner + Wheel Section Skeletons */}
      <div className="w-full max-w-4xl mb-12 flex flex-col gap-4">
        <div className="h-24 bg-white/20 rounded-xl"></div>
        <div className="h-24 bg-white/20 rounded-xl"></div>
      </div>

      {/* Blogs & HowToPlay */}
      <div className="w-full max-w-4xl flex flex-col gap-6 px-4 mb-24">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-20 bg-white/20 rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}
