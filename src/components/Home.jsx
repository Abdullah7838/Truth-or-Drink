import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWifi,
  FaUserFriends,
  FaGlassCheers,
  FaCommentDots,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import HowToPlay from "./HowToPlay";
import SpinnerWheel from "./SpinnerWheel ";
import { FaPlay } from "react-icons/fa";
import HomeBlogs from "./HomeBlogs";
import { Helmet } from "react-helmet-async";
import ChatBot from "./ChatBot";

function Home({ setMainUsername }) {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setMainUsername("");
  }, []);

  return (
    <>
      <Helmet>
        <title>Truth or Drink - Play Drinking Games Online or Offline</title>
        <link rel="canonical" href="https://www.truthordrink.pro/" />
        <meta
          name="description"
          content="Play Truth or Drink online or offline with friends. Choose a mode, spin the wheel, and enjoy fun challenges!"
        />
        <meta
          name="keywords"
          content="truth or drink, online party game, spin wheel game, drink game , online game "
        />
        <meta
          property="og:title"
          content="Truth or Drink– Play Drinking Games Online or Offline"
        />
        <meta
          property="og:description"
          content="Play Truth or Drink with friends, online or offline! No signup required. Fun guaranteed!"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center text-white pt-12">
        {/* Header Box */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Truth or Drink
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Pick a game mode below and invite your friends — online or offline!
          </p>

          {/* Game Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-semibold w-full max-w-lg mx-auto mt-12 px-4">
            {/* Play Online */}
            <Link to="/drink-room">
              <button className="flex items-center justify-center gap-3 w-full cursor-pointer bg-white text-black border border-gray-300 rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-blue-100 transition-all duration-200 active:scale-95">
                <div className="bg-blue-600 p-2 rounded-full shadow-sm">
                  <FaPlay className="text-white w-4 h-4" />
                </div>
                Play Online
              </button>
            </Link>

            {/* Play Offline */}
            <Link to="/offline-truth-or-drink">
              <button className="flex items-center justify-center gap-3 w-full cursor-pointer bg-white text-black border border-gray-300 rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-blue-100 transition-all duration-200 active:scale-95">
                <div className="bg-blue-600 p-2 rounded-full shadow-sm">
                  <FaPlay className="text-white w-4 h-4" />
                </div>
                Play Offline
              </button>
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

      
      {/* 💬 Floating Chat Button */}
      <button
        onClick={() => setShowChat((prev) => !prev)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition"
        aria-label="Toggle ChatBot"
      >
        {showChat ? (
          <FaTimes className="w-5 h-5" />
        ) : (
          <FaCommentDots className="w-5 h-5" />
        )}
      </button>

      {/* 🧠 ChatBot Panel */}
      {showChat && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[95%] sm:w-[90%] max-w-sm h-[80vh] max-h-screen bg-white rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col">
          <ChatBot />
        </div>
      )}
    </>
  );
}

export default Home;
