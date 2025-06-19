import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaUserFriends, FaGlassCheers, FaUser } from "react-icons/fa";
import HowToPlay from "./HowToPlay";
import SpinnerWheel from "./SpinnerWheel ";
import { FaPlay } from "react-icons/fa";
import HomeBlogs from "./HomeBlogs";

function Home({ setMainUsername }) {
  useEffect(() => {
    setMainUsername("");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center text-white">
      {/* Header Box */}
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
           Truth or Drink
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8">
          Pick a game mode below and invite your friends — online or offline!
        </p>

        {/* Game Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-semibold w-full max-w-lg mx-auto">

          {/* Play Online */}
          <Link to="/drinkroom">
            <div className="flex items-center justify-center gap-3 bg-white text-black border border-white/20 rounded-full px-6 py-4 text-lg shadow-md hover:bg-white/10 transition-all duration-200">
              <FaPlay className="text-blue-800" />
              Play Online
            </div>
          </Link>
          {/* Play Offline */}
          <Link to="/offlinetruthordrink">
            <div className="flex items-center justify-center gap-3 bg-white text-black border border-white/20 rounded-full px-6 py-4 text-lg shadow-md hover:bg-white/10 transition-all duration-200">
              <FaPlay className="text-blue-800" />
              Play Offline
            </div>
          </Link>

        </div>
      </div>
      {/* <!-- Spinner Wheel Section --> */}
      <div className="w-full max-w-4xl mb-12">
        <SpinnerWheel />
      </div>
      
      <div className="w-full">
        <HomeBlogs />
      </div>
      
      {/* How to Play Section */}
      <div className="w-full">
        <HowToPlay />
      </div>
    </div>
  );
}

export default Home;
