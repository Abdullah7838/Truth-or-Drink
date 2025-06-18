import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaUserFriends, FaGlassCheers, FaUser } from "react-icons/fa";
import HowToPlay from "./HowToPlay";
import SpinnerWheel from "./SpinnerWheel ";
function Home({ setMainUsername }) {
  useEffect(() => {
    setMainUsername("");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 py-12 flex flex-col items-center text-white">
      {/* Header Box */}
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          🎉 Truth or Drink
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8">
          Pick a game mode below and invite your friends — online or offline!
        </p>

        {/* Game Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white font-semibold">
          {/* Truth or Dare - Offline */}
          <Link to="/offlinetruthordrink">
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
              <div className="absolute top-2 right-2 bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                <FaUser className="inline-block mr-1" /> Offline
              </div>
              <div className="flex items-center gap-3 mb-2 text-xl">
                <FaUserFriends className="text-white text-2xl" />
                <span>Truth or Dare</span>
              </div>
              <p className="text-sm text-white/80">
                Play together on the same device
              </p>
            </div>
          </Link>

          {/* Truth or Dare - Online */}
          <Link to="/drinkroom">
            <div className="relative bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
              <div className="absolute top-2 right-2 bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                <FaWifi className="inline-block mr-1" /> Online
              </div>
              <div className="flex items-center gap-3 mb-2 text-xl">
                <FaGlassCheers className="text-white text-2xl" />
                <span>Truth or Dare</span>
              </div>
              <p className="text-sm text-white/80">
                Invite friends to join remotely
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* <!-- Spinner Wheel Section --> */}
      <div className="w-full max-w-4xl mb-12">
        <SpinnerWheel />
      </div>
      {/* How to Play Section */}
      <div className="w-full max-w-6xl">
        <HowToPlay />
      </div>
    </div>
  );
}

export default Home;
